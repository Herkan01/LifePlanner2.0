document.addEventListener("DOMContentLoaded", () => {
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach(task => createTaskElement(task.text, task.completed));
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push({
                text: li.querySelector(".task-text").textContent,
                completed: li.classList.contains("completed")
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function createTaskElement(text, completed = false) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;
        span.className = "task-text";
        if (completed) li.classList.add("completed");

        span.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Ta bort";
        removeBtn.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener("click", () => {
        const text = newTaskInput.value.trim();
        if (text !== "") {
            createTaskElement(text);
            newTaskInput.value = "";
            saveTasks();
        }
    });

    newTaskInput.addEventListener("keyup", e => {
        if (e.key === "Enter") addTaskBtn.click();
    });

    loadTasks();
});
