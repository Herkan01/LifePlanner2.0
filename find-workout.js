// Färdiga pass
const workoutPlans = {
    "chest-shoulders-triceps": {
        name: "Bröst, Axlar & Triceps",
        exercises: [
            { exercise: "Benchpress", sets: 3, reps: 10, weight: 0 },
            { exercise: "Incline dumbbell press", sets: 3, reps: 12, weight: 0 },
            { exercise: "Lateral raises", sets: 3, reps: 15, weight: 0 },
            { exercise: "Arnold press", sets: 3, reps: 12, weight: 0 },
            { exercise: "Triceps pushdowns", sets: 3, reps: 12, weight: 0 },
            { exercise: "Dips", sets: 3, reps: 10, weight: 0 }
        ]
    },
    "back-biceps": {
        name: "Rygg & Biceps",
        exercises: [
            { exercise: "Deadlift", sets: 3, reps: 8, weight: 0 },
            { exercise: "Pull-ups", sets: 3, reps: 8, weight: 0 },
            { exercise: "Barbell row", sets: 3, reps: 10, weight: 0 },
            { exercise: "Lat pulldown", sets: 3, reps: 12, weight: 0 },
            { exercise: "Biceps curls", sets: 3, reps: 12, weight: 0 },
            { exercise: "Hammer curls", sets: 3, reps: 12, weight: 0 }
        ]
    },
    "legs-core": {
        name: "Ben & Mage",
        exercises: [
            { exercise: "Barbell squats", sets: 4, reps: 8, weight: 0 },
            { exercise: "Leg press", sets: 3, reps: 12, weight: 0 },
            { exercise: "Hamstring curl", sets: 3, reps: 12, weight: 0 },
            { exercise: "Calf extensions", sets: 4, reps: 15, weight: 0 },
            { exercise: "Crunch machine", sets: 3, reps: 15, weight: 0 },
            { exercise: "Hanging knee raises", sets: 3, reps: 12, weight: 0 }
        ]
    }
};

// Koppla knapparna
document.querySelectorAll(".save-btn").forEach(button => {
    button.addEventListener("click", () => {
        const planKey = button.dataset.pass;
        const plan = workoutPlans[planKey];
        if (!plan) return;

        // Hämta tidigare sparade pass
        let savedWorkouts = JSON.parse(localStorage.getItem("savedWorkouts")) || [];

        // Kolla så vi inte sparar samma flera gånger
        const alreadySaved = savedWorkouts.some(w => w.name === plan.name);

        if (!alreadySaved) {
            savedWorkouts.push(plan);
            localStorage.setItem("savedWorkouts", JSON.stringify(savedWorkouts));
            alert(`Passet "${plan.name}" sparat! ✅`);
        } else {
            alert(`Passet "${plan.name}" finns redan sparat!`);
        }
    });
});
