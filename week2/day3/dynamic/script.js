const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete">✔</button>
        <button class="delete">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Event delegation
taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("complete")) {
        e.target.parentElement.querySelector("span")
            .classList.toggle("completed");
    }
});

addTaskBtn.addEventListener("click", addTask);