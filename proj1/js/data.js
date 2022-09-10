let taskName = document.getElementById("Task");
let taskDate = document.getElementById("taskDate");
let taskTime = document.getElementById("timeTask");

const task = {
  taskName: "",
  taskDate: "",
  taskTime: "",
};

const userTask = {
  allTasks: [],

  saveTasks: () => {
    localStorage.setItem("tasks", JSON.stringify(userTask.allTasks));
  },
  loadTasks: () => {
    userTask.allTasks = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage.getItem("tasks") === null) userTask.allTasks = [];
    return userTask.allTasks;
  },
  addTask: (newTask) => {
    userTask.allTasks.push(newTask);
    userTask.saveTasks();
  },
  remove_spicific_value: (elNum) => {
    userTask.allTasks.splice(elNum, 1);
    userTask.saveTasks();
  },
};
