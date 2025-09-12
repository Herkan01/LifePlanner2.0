document.addEventListener('DOMContentLoaded', () => {
    const exerciseForm = document.getElementById('exerciseForm');
    const exerciseList = document.getElementById('exerciseList');
    const exerciseSelect = document.getElementById('exercise');
    const setsInput = document.getElementById('sets');
    const repsInput = document.getElementById('reps');
    const weightInput = document.getElementById('weight');
    const completeBtn = document.getElementById('completeWorkout');

    let exercises = [];

    // --- Initiera färdiga pass ---
    function initDefaultWorkouts() {
        let savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
        if (savedWorkouts.length === 0) {
            savedWorkouts = [
                {
                    name: "Bröst, Axlar & Triceps",
                    exercises: [
                        { exercise: "Benchpress", sets: 3, reps: 10, weight: 0 },
                        { exercise: "Incline dumbbell press", sets: 3, reps: 12, weight: 0 },
                        { exercise: "Lateral raises", sets: 3, reps: 15, weight: 0 },
                        { exercise: "Arnold press", sets: 3, reps: 12, weight: 0 },
                        { exercise: "Triceps pushdowns", sets: 3, reps: 12, weight: 0 }
                    ]
                },
                {
                    name: "Rygg & Biceps",
                    exercises: [
                        { exercise: "Pull-ups", sets: 3, reps: 8, weight: 0 },
                        { exercise: "Barbell row", sets: 3, reps: 10, weight: 0 },
                        { exercise: "Lat pulldown", sets: 3, reps: 12, weight: 0 },
                        { exercise: "Biceps curls", sets: 3, reps: 12, weight: 0 },
                        { exercise: "Hammer curls", sets: 3, reps: 12, weight: 0 }
                    ]
                },
                {
                    name: "Ben & Mage",
                    exercises: [
                        { exercise: "Barbell squats", sets: 4, reps: 8, weight: 0 },
                        { exercise: "Leg press", sets: 3, reps: 12, weight: 0 },
                        { exercise: "Hamstring curl", sets: 3, reps: 12, weight: 0 },
                        { exercise: "Calf extensions", sets: 4, reps: 15, weight: 0 },
                        { exercise: "Cable crunches", sets: 3, reps: 15, weight: 0 }
                    ]
                }
            ];
            localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts));
        }
    }

    // --- Rendera dropdown med sparade pass ---
    function renderSavedWorkoutsDropdown() {
        const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
        const baseOptions = Array.from(exerciseSelect.querySelectorAll("option"))
            .filter(opt => !opt.value.startsWith("preset-"));

        exerciseSelect.innerHTML = '';
        baseOptions.forEach(opt => exerciseSelect.appendChild(opt));

        if (savedWorkouts.length > 0) {
            const separator = document.createElement('option');
            separator.disabled = true;
            separator.textContent = '──────────';
            exerciseSelect.appendChild(separator);
        }

        savedWorkouts.forEach((workout, index) => {
            const option = document.createElement('option');
            option.value = `preset-${index}`;
            option.textContent = `Pass: ${workout.name}`;
            exerciseSelect.appendChild(option);
        });
    }

    initDefaultWorkouts();
    renderSavedWorkoutsDropdown();

    // --- Ändra input-fält beroende på val ---
    exerciseSelect.addEventListener('change', () => {
        const selectedValue = exerciseSelect.value;
        const isPreset = selectedValue.startsWith('preset-');

        [setsInput, repsInput, weightInput].forEach(input => {
            input.required = !isPreset;
            input.disabled = isPreset;
        });
    });

    // --- Lägg till övning eller sparat pass ---
    exerciseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedValue = exerciseSelect.value;
        if (!selectedValue) return;

        if (selectedValue.startsWith('preset-')) {
            // Lägg till hela sparat pass
            const index = parseInt(selectedValue.split('-')[1], 10);
            const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
            if (savedWorkouts[index]) {
                savedWorkouts[index].exercises.forEach(ex => {
                    exercises.push({ ...ex });
                });
                renderExercises();
            }
        } else {
            // Lägg till enskild övning
            const exercise = exerciseSelect.value;
            const sets = setsInput.value;
            const reps = repsInput.value;
            const weight = weightInput.value;

            if (!exercise || !sets || !reps || !weight) {
                alert('Fyll i alla obligatoriska fält för övningen!');
                return;
            }

            exercises.push({ exercise, sets, reps, weight });
            renderExercises();
        }

        exerciseForm.reset();
    });

    // --- Rendera listan med redigerbara övningar ---
    function renderExercises() {
        exerciseList.innerHTML = '';
        exercises.forEach((ex, index) => {
            const li = document.createElement('li');

            const nameSpan = document.createElement('span');
            nameSpan.textContent = ex.exercise;

            const setsField = document.createElement('input');
            setsField.type = 'number';
            setsField.value = ex.sets;
            setsField.min = 1;
            setsField.style.width = '50px';
            setsField.addEventListener('input', () => ex.sets = setsField.value);

            const repsField = document.createElement('input');
            repsField.type = 'number';
            repsField.value = ex.reps;
            repsField.min = 1;
            repsField.style.width = '50px';
            repsField.addEventListener('input', () => ex.reps = repsField.value);

            const weightField = document.createElement('input');
            weightField.type = 'number';
            weightField.value = ex.weight;
            weightField.min = 0;
            weightField.style.width = '60px';
            weightField.addEventListener('input', () => ex.weight = weightField.value);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Ta bort';
            removeBtn.addEventListener('click', () => {
                exercises.splice(index, 1);
                renderExercises();
            });

            li.appendChild(nameSpan);
            li.appendChild(document.createTextNode(' Sets: '));
            li.appendChild(setsField);
            li.appendChild(document.createTextNode(' Reps: '));
            li.appendChild(repsField);
            li.appendChild(document.createTextNode(' Vikt: '));
            li.appendChild(weightField);
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

        const workoutDate = new Date().toISOString().split('T')[0];
        const pastWorkouts = JSON.parse(localStorage.getItem('pastWorkouts')) || [];

        pastWorkouts.push({
            date: workoutDate,
            exercises: exercises
        });

        localStorage.setItem('pastWorkouts', JSON.stringify(pastWorkouts));

        exercises = [];
        renderExercises();
        alert('Passet sparat! ✅');
    });
});
