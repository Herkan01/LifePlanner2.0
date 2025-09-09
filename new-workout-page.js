const exerciseForm = document.getElementById('exerciseForm');
const exerciseList = document.getElementById('exerciseList');
const saveWorkoutBtn = document.getElementById('saveWorkout');
const workoutNameInput = document.getElementById('workoutName');

let exercises = [];

// Lägg till övning i listan
exerciseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;

    if (!exercise) return;

    const newExercise = { exercise, sets, reps, weight };
    exercises.push(newExercise);
    renderExercises();

    // Nollställ formuläret
    exerciseForm.reset();
});

// Rendera listan
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

// Spara pass i localStorage
saveWorkoutBtn.addEventListener('click', () => {
    const workoutName = workoutNameInput.value.trim();
    if (!workoutName || exercises.length === 0) {
        alert('Fyll i passnamn och lägg till minst en övning.');
        return;
    }

    let savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    savedWorkouts.push({ name: workoutName, exercises });
    localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts));

    alert('Passet sparat!');
    exercises = [];
    renderExercises();
    workoutNameInput.value = '';
});
