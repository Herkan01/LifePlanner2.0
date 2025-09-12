document.addEventListener('DOMContentLoaded', () => {
    const mealList = document.getElementById('mealList');
    const input = document.getElementById('dinner');
    const gramInput = document.getElementById('dinnerGram');
    const addBtn = document.querySelector('.add-btn[data-meal="Dinner"]');
    const suggestionBox = input.nextElementSibling;
    const chartCanvas = document.getElementById('totalChart');

    const validFoods = foods.filter(f => f.name && !isNaN(f.calories));
    let selectedFood = null;

    // --- Hämta datum från query-param eller dagens datum ---
    function getCurrentDate() {
        const params = new URLSearchParams(window.location.search);
        const dateParam = params.get('date');
        if (dateParam) return dateParam;
        return new Date().toISOString().split('T')[0];
    }
    const currentDate = getCurrentDate();

    // --- Ladda sparade måltider för aktuell dag ---
    let addedFoods = JSON.parse(localStorage.getItem(`dinner-${currentDate}`)) || [];

    // Kopiera originalvärden
    addedFoods = addedFoods.map(f => ({
        ...f,
        original: { calories: f.calories, protein: f.protein, fat: f.fat, carbs: f.carbs }
    }));

    // --- Skapa diagram ---
    const totalChart = new Chart(chartCanvas, {
        type: 'doughnut',
        data: {
            labels: ['Protein', 'Fett', 'Kolhydrater'],
            datasets: [{ data: [0,0,0], backgroundColor:['#4CAF50','#FF9800','#2196F3'] }]
        },
        options: { responsive:false, plugins:{ legend:{display:true,position:'bottom'} }, cutout:'50%' }
    });

    // --- Uppdatera diagram och spara i localStorage ---
    function updateChart() {
        const totalProtein = addedFoods.reduce((sum,f)=>sum+f.protein,0);
        const totalFat = addedFoods.reduce((sum,f)=>sum+f.fat,0);
        const totalCarbs = addedFoods.reduce((sum,f)=>sum+f.carbs,0);

        totalChart.data.datasets[0].data = [totalProtein,totalFat,totalCarbs];
        totalChart.update();

        localStorage.setItem(`dinner-${currentDate}`, JSON.stringify(addedFoods));
        localStorage.setItem(`dinner-totals-${currentDate}`, JSON.stringify({
            calories: addedFoods.reduce((sum,f)=>sum+f.calories,0),
            protein: totalProtein,
            fat: totalFat,
            carbs: totalCarbs
        }));
    }

    // --- Sökfunktion ---
    function searchFood(query) {
        if (!query) return [];
        const q = query.toLowerCase();
        return validFoods
            .sort((a,b)=>{
                if(a.name.toLowerCase().startsWith(q) && !b.name.toLowerCase().startsWith(q)) return -1;
                if(!a.name.toLowerCase().startsWith(q) && b.name.toLowerCase().startsWith(q)) return 1;
                return a.name.localeCompare(b.name);
            })
            .filter(f => f.name.toLowerCase().includes(q))
            .slice(0,10);
    }

    // --- Autocomplete ---
    input.addEventListener('input', () => {
        const query = input.value.trim();
        suggestionBox.innerHTML = '';
        selectedFood = null;
        if (!query) return;

        searchFood(query).forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.addEventListener('click', () => {
                input.value = item.name;
                selectedFood = item;
                suggestionBox.innerHTML = '';
            });
            suggestionBox.appendChild(li);
        });
    });

    // --- Skapa måltidsrad ---
    function createFoodLi(foodData, grams) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="meal-name">${foodData.name}</span>
            <span>Gram: <input type="number" value="${grams}" min="0" class="gram-input"></span>
            <div class="nutrients-column">
                <div class="calories">Kalorier: ${foodData.calories.toFixed(0)}</div>
                <div class="protein">Protein: ${foodData.protein.toFixed(1)}g</div>
                <div class="fat">Fett: ${foodData.fat.toFixed(1)}g</div>
                <div class="carbs">Kolhydrater: ${foodData.carbs.toFixed(1)}g</div>
            </div>
            <button class="remove-btn">Ta bort</button>
        `;

        const gramField = li.querySelector('.gram-input');
        gramField.addEventListener('input', () => {
            const factor = parseFloat(gramField.value)/100;
            foodData.calories = foodData.original.calories * factor;
            foodData.protein = foodData.original.protein * factor;
            foodData.fat = foodData.original.fat * factor;
            foodData.carbs = foodData.original.carbs * factor;

            li.querySelector('.calories').textContent = `Kalorier: ${foodData.calories.toFixed(0)}`;
            li.querySelector('.protein').textContent = `Protein: ${foodData.protein.toFixed(1)}g`;
            li.querySelector('.fat').textContent = `Fett: ${foodData.fat.toFixed(1)}g`;
            li.querySelector('.carbs').textContent = `Kolhydrater: ${foodData.carbs.toFixed(1)}g`;

            updateChart();
        });

        li.querySelector('.remove-btn').addEventListener('click', () => {
            addedFoods.splice(addedFoods.indexOf(foodData),1);
            li.remove();
            updateChart();
        });

        mealList.appendChild(li);
    }

    // --- Ladda sparade matvaror ---
    addedFoods.forEach(f => createFoodLi(f, f.grams || 100));
    updateChart();

    // --- Lägg till mat ---
    addBtn.addEventListener('click', () => {
        if (!selectedFood) return alert('Välj en matvara från listan!');
        const grams = parseFloat(gramInput.value) || 0;
        const factor = grams / 100;

        const foodData = {
            name: selectedFood.name,
            calories: selectedFood.calories * factor,
            protein: selectedFood.protein * factor,
            fat: selectedFood.fat * factor,
            carbs: selectedFood.carbs * factor,
            grams: grams,
            original: { calories: selectedFood.calories, protein: selectedFood.protein, fat: selectedFood.fat, carbs: selectedFood.carbs }
        };

        addedFoods.push(foodData);
        createFoodLi(foodData, grams);
        updateChart();

        input.value = '';
        gramInput.value = '';
        suggestionBox.innerHTML = '';
        selectedFood = null;
    });
});
