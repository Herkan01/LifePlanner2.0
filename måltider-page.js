document.addEventListener('DOMContentLoaded', () => {
    const currentDateEl = document.getElementById('currentDate');
    const prevDayBtn = document.getElementById('prevDay');
    const nextDayBtn = document.getElementById('nextDay');

    const frukostBtn = document.getElementById('frukostBtn');
    const lunchBtn = document.getElementById('lunchBtn');
    const middagBtn = document.getElementById('middagBtn');
    const snacksBtn = document.getElementById('snacksBtn');

    const totalCaloriesEl = document.getElementById('totalCalories');
    const totalProteinEl = document.getElementById('totalProtein');
    const totalFatEl = document.getElementById('totalFat');
    const totalCarbsEl = document.getElementById('totalCarbs');

    // --- Hämta datum från localStorage eller dagens datum ---
    function getCurrentDate() {
        const params = new URLSearchParams(window.location.search);
        const urlDate = params.get('date');
        const savedDate = localStorage.getItem('lastSelectedDate');
        if (urlDate) return urlDate;
        if (savedDate) return savedDate;
        return new Date().toISOString().split('T')[0];
    }

    let currentDate = getCurrentDate();

    // --- Spara datumet i localStorage ---
    function saveCurrentDate() {
        localStorage.setItem('lastSelectedDate', currentDate);
    }

    // --- Formatera datum för visning ---
    function formatDateForDisplay(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('sv-SE', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    }

    // --- Uppdatera totalsummor ---
    function updateTotals() {
        const meals = ['frukost','lunch','dinner','snacks'];
        let calories = 0, protein = 0, fat = 0, carbs = 0;

        meals.forEach(meal => {
            const data = JSON.parse(localStorage.getItem(`${meal}-${currentDate}`)) || [];
            data.forEach(item => {
                calories += item.calories || 0;
                protein += item.protein || 0;
                fat += item.fat || 0;
                carbs += item.carbs || 0;
            });
        });

        totalCaloriesEl.textContent = calories.toFixed(0);
        totalProteinEl.textContent = protein.toFixed(1);
        totalFatEl.textContent = fat.toFixed(1);
        totalCarbsEl.textContent = carbs.toFixed(1);
    }

    function updateDateDisplay() {
        currentDateEl.textContent = formatDateForDisplay(currentDate);
        updateTotals();
        saveCurrentDate();
    }

    // --- Kalendernavigation ---
    function changeDay(offset) {
        const d = new Date(currentDate);
        d.setDate(d.getDate() + offset);
        currentDate = d.toISOString().split('T')[0];
        updateDateDisplay();
        history.replaceState(null,'',`?date=${currentDate}`);
    }

    prevDayBtn.addEventListener('click', () => changeDay(-1));
    nextDayBtn.addEventListener('click', () => changeDay(1));

    // --- Öppna måltidssidor med korrekt datum ---
    function openMealPage(meal) {
    let url = '';
    switch(meal) {
        case 'frukost':
            url = `breakfast-page.html?date=${currentDate}`;
            break;
        case 'lunch':
            url = `lunch-page.html?date=${currentDate}`;
            break;
        case 'middag':
            url = `dinner-page.html?date=${currentDate}`; // ändrat här
            break;
        case 'snacks':
            url = `snacks-page.html?date=${currentDate}`; // ändrat här
            break;
    }
    window.location.href = url;
}


    frukostBtn.addEventListener('click', () => openMealPage('frukost'));
    lunchBtn.addEventListener('click', () => openMealPage('lunch'));
    middagBtn.addEventListener('click', () => openMealPage('middag'));
    snacksBtn.addEventListener('click', () => openMealPage('snacks'));

    // --- Initiera visning ---
    updateDateDisplay();
});
