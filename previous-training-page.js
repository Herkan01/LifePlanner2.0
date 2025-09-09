document.addEventListener("DOMContentLoaded", () => {
    const workoutsContainer = document.getElementById("workoutsContainer");

    let pastWorkouts = JSON.parse(localStorage.getItem("pastWorkouts")) || [];

    // Sortera från senaste till äldsta
    pastWorkouts.sort((a, b) => new Date(b.date) - new Date(a.date));

    pastWorkouts.forEach((workout, index) => {
        const passDiv = document.createElement("div");
        passDiv.className = "workout-pass";

        const header = document.createElement("h3");
        header.textContent = `Pass ${workout.date} (${workout.exercises.length} övningar)`;
        passDiv.appendChild(header);

        const details = document.createElement("div");
        details.className = "workout-details";

        const ul = document.createElement("ul");
        workout.exercises.forEach(ex => {
            const li = document.createElement("li");
            li.textContent = `${ex.exercise} - ${ex.sets}x${ex.reps} @ ${ex.weight}kg ${ex.comments || ""}`;
            ul.appendChild(li);
        });
        details.appendChild(ul);
        passDiv.appendChild(details);

        // Klicka på pass för att visa/dölja detaljer
        passDiv.addEventListener("click", () => {
            details.style.display = details.style.display === "block" ? "none" : "block";
        });

        workoutsContainer.appendChild(passDiv);
    });

    // Om inga pass finns
    if (pastWorkouts.length === 0) {
        workoutsContainer.textContent = "Inga tidigare pass sparade.";
    }
});
