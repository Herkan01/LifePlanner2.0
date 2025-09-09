document.addEventListener('DOMContentLoaded', () => {
    const exerciseForm = document.getElementById('exerciseForm');
    const exerciseList = document.getElementById('exerciseList');
    const exerciseSelect = document.getElementById('exercise');
    const setsInput = document.getElementById('sets');
    const repsInput = document.getElementById('reps');
    const weightInput = document.getElementById('weight');
    const completeBtn = document.getElementById('completeWorkout');

    let exercises = [];

    // --- Rendera sparade pass i dropdown ---
    function renderSavedWorkoutsDropdown() {
        const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];

        // Behåll vanliga övningar
        const options = Array.from(exerciseSelect.options).filter(opt => !opt.value.startsWith('preset-'));
        exerciseSelect.innerHTML = '';
        options.forEach(opt => exerciseSelect.appendChild(opt));

        if (savedWorkouts.length > 0) {
            // Lägg till visuellt mellanrum innan sparade pass
            const separator = document.createElement('option');
            separator.disabled = true;
            separator.textContent = '──────────';
            exerciseSelect.appendChild(separator);
        }

        // Lägg till sparade pass längst ner
        savedWorkouts.forEach((workout, index) => {
            const option = document.createElement('option');
            option.value = `preset-${index}`;
            option.textContent = `Pass: ${workout.name}`;
            exerciseSelect.appendChild(option);
        });
    }

    renderSavedWorkoutsDropdown();

    // --- Ändra fält beroende på val ---
    exerciseSelect.addEventListener('change', () => {
        const selectedValue = exerciseSelect.value;
        if (selectedValue.startsWith('preset-')) {
            // Sparat pass: ta bort required och inaktivera fälten
            setsInput.required = false;
            repsInput.required = false;
            weightInput.required = false;
            setsInput.disabled = true;
            repsInput.disabled = true;
            weightInput.disabled = true;
        } else {
            // Vanlig övning: återställ required och aktivera fälten
            setsInput.required = true;
            repsInput.required = true;
            weightInput.required = true;
            setsInput.disabled = false;
            repsInput.disabled = false;
            weightInput.disabled = false;
        }
    });

    // --- Lägg till övning eller pass ---
    exerciseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedValue = exerciseSelect.value;
        if (!selectedValue) return;

        if (selectedValue.startsWith('preset-')) {
            // Sparat pass
            const index = parseInt(selectedValue.split('-')[1]);
            const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
            if (savedWorkouts[index]) {
                savedWorkouts[index].exercises.forEach(ex => {
                    exercises.push({ ...ex });
                });
                renderExercises();
            }
        } else {
            // Vanlig övning
            const exercise = exerciseSelect.value;
            const sets = setsInput.value;
            const reps = repsInput.value;
            const weight = weightInput.value;

            if (!exercise || !sets || !reps || !weight) {
                alert('Fyll i alla obligatoriska fält för övningen!');
                return;
            }

            const newExercise = { exercise, sets, reps, weight };
            exercises.push(newExercise);
            renderExercises();
        }

        exerciseForm.reset();
    });

    // --- Rendera listan ---
    function renderExercises() {
        exerciseList.innerHTML = '';
        exercises.forEach((ex, index) => {
            const li = document.createElement('li');
            li.textContent = `${ex.exercise} - ${ex.sets}x${ex.reps} @ ${ex.weight}kg`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Ta bort';
            removeBtn.addEventListener('click', () => {
                exercises.splice(index, 1);
                renderExercises();
            });
            li.appendChild(removeBtn);
            exerciseList.appendChild(li);
        });
    }

    // --- Klar-knappen ---
    completeBtn.addEventListener('click', () => {
        if (exercises.length === 0) {
            alert('Inga övningar att spara!');
            return;
        }

        const workoutDate = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
        const pastWorkouts = JSON.parse(localStorage.getItem('pastWorkouts')) || [];

        pastWorkouts.push({
            date: workoutDate,
            exercises: exercises
        });

        localStorage.setItem('pastWorkouts', JSON.stringify(pastWorkouts));

        // Töm listan
        exercises = [];
        renderExercises();
        alert('Passet sparat! ✅');
    });
});
