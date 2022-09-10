let myTasks = [];

function saveTasks(newTask) {
  myTasks.push(newTask);
  localStorage.setItem("myTasks", JSON.stringify(myTasks));
}

function loadTasks() {
  myTasks = JSON.parse(localStorage.getItem("myTasks"));
}
