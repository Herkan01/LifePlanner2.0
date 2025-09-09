document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    const prevDayBtn = document.getElementById("prevDay");
    const nextDayBtn = document.getElementById("nextDay");
    const saveBtn = document.getElementById("saveDiary");

    function loadDiary(date) {
        const entry = JSON.parse(localStorage.getItem(`diary-${date}`));
        if (entry) {
            document.getElementById("productivity").value = entry.productivity;
            document.getElementById("mood").value = entry.mood;
            document.getElementById("agenda1").value = entry.agenda[0];
            document.getElementById("agenda2").value = entry.agenda[1];
            document.getElementById("agenda3").value = entry.agenda[2];
            document.getElementById("agenda4").value = entry.agenda[3];
            document.getElementById("reflection").value = entry.reflection;
            document.getElementById("negative").value = entry.negative;
        } else {
            // Töm fälten om inget sparats
            ["productivity","mood","agenda1","agenda2","agenda3","agenda4","reflection","negative"]
                .forEach(id => document.getElementById(id).value = "");
        }
    }

    function formatDate(date) {
        return date.toISOString().split("T")[0];
    }

    // Init dagens datum
    let currentDate = new Date();
    dateInput.value = formatDate(currentDate);
    loadDiary(dateInput.value);

    // Navigera dag
    prevDayBtn.addEventListener("click", () => {
        currentDate.setDate(currentDate.getDate() - 1);
        dateInput.value = formatDate(currentDate);
        loadDiary(dateInput.value);
    });

    nextDayBtn.addEventListener("click", () => {
        currentDate.setDate(currentDate.getDate() + 1);
        dateInput.value = formatDate(currentDate);
        loadDiary(dateInput.value);
    });

    dateInput.addEventListener("change", () => {
        currentDate = new Date(dateInput.value);
        loadDiary(dateInput.value);
    });

    // Spara funktion
    saveBtn.addEventListener("click", () => {
        const diaryEntry = {
            date: dateInput.value,
            productivity: document.getElementById("productivity").value,
            mood: document.getElementById("mood").value,
            agenda: [
                document.getElementById("agenda1").value,
                document.getElementById("agenda2").value,
                document.getElementById("agenda3").value,
                document.getElementById("agenda4").value
            ],
            reflection: document.getElementById("reflection").value,
            negative: document.getElementById("negative").value
        };
        localStorage.setItem(`diary-${dateInput.value}`, JSON.stringify(diaryEntry));
        alert("Dagbok sparad! ✅");
    });
});
