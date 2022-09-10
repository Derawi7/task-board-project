const tasks2 = document.getElementById("taskContainer");

function sendData() {
  let newTask = { ...task };
  newTask.taskName = taskName.value;
  newTask.taskDate = taskDate.value;
  newTask.taskTime = taskTime.value;
  userTask.addTask(newTask);
  tasks2.innerHTML = "";
  getHtml(userTask.loadTasks(), "fadeIn");
}

function getHtml(loaded, new_task) {
  for (let i = 0; i < userTask.allTasks.length; i++) {
    let e = userTask.allTasks[i];
    const sec = document.createElement("section");
    if (new_task.length > 0 && i == userTask.allTasks.length - 1) {
      sec.className = new_task;
    }
    const text = document.createElement("p");
    text.className = "text_plc";
    const txt_carry = document.createElement("section");
    txt_carry.className = "txt_carry";
    txt_carry.appendChild(text);
    const date = document.createElement("p");
    const time = document.createElement("p");
    text.innerText = e.taskName;
    date.innerText = e.taskDate;
    time.innerText = e.taskTime;
    const btn_rm = document.createElement("button");
    btn_rm.addEventListener("click", () => removeTask(i));
    btn_rm.innerHTML = "<i class='glyphicon glyphicon-remove'></i>";
    const btn_place = document.createElement("section");
    btn_place.className = "btn_place";
    btn_place.append(btn_rm);
    sec.appendChild(btn_place);
    sec.appendChild(txt_carry);
    sec.appendChild(date);
    sec.appendChild(time);
    tasks2.appendChild(sec);
  }
}

function removeTask(elementNum) {
  userTask.remove_spicific_value(elementNum);
  tasks2.innerHTML = "";
  getHtml(userTask.loadTasks(), "");
}

getHtml(userTask.loadTasks(), "");
