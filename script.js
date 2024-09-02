// script.js
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
