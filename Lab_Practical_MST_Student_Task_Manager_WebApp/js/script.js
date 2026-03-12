const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

taskList.innerHTML="";

let filteredTasks = tasks.filter(task =>{

if(currentFilter === "completed") return task.completed;
if(currentFilter === "pending") return !task.completed;

return true;

});

filteredTasks.forEach(task =>{

const li = document.createElement("li");

li.className = task.completed ? "completed" : "";

li.innerHTML = `
<span class="priority-${task.priority.toLowerCase()}">
${task.name} (${task.priority})
</span>

<div class="task-actions">
<button onclick="toggleComplete(${task.id})">✔</button>
<button onclick="deleteTask(${task.id})">🗑</button>
</div>
`;

taskList.appendChild(li);

});

}

function addTask(){

const name = taskInput.value.trim();
const priority = prioritySelect.value;

if(name === "") return;

const newTask = {
id: Date.now(),
name,
priority,
completed:false
};

tasks.push(newTask);

taskInput.value="";

saveTasks();
renderTasks();

}

function toggleComplete(id){

tasks = tasks.map(task =>{

if(task.id === id){
task.completed = !task.completed;
}

return task;

});

saveTasks();
renderTasks();

}

function deleteTask(id){

tasks = tasks.filter(task => task.id !== id);

saveTasks();
renderTasks();

}

filterButtons.forEach(btn =>{

btn.addEventListener("click", () =>{

currentFilter = btn.dataset.filter;

renderTasks();

});

});

addTaskBtn.addEventListener("click", addTask);

renderTasks();