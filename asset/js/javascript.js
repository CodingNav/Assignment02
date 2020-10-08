var taskArray = [];
var form = document.getElementById("create-task");
var taskList = document.getElementById("tasks");

function updateTasks() {
    taskList.innerHTML = "";

    for (var i = 0; i < taskArray.length; i++) {
        const index = i;
        var taskInfo = taskArray[i];
        var taskTitle = taskInfo.title;
        var taskPriority = taskInfo.priority;
        var isComplete = taskInfo.complete;
        var listTag = document.createElement('li');
        listTag.classList.add("list-group-item");
        listTag.innerHTML = `<span>${taskTitle}</span>`;


        if (isComplete) {
            listTag.classList.add("list-group-item-success");
            listTag.style.textDecoration = "line-through";
        }
        else {
            listTag.classList.add("list-group-item-warning");
        }

        var trashButton = document.createElement("button");
        trashButton.classList.add("float-right");
        trashButton.classList.add("task-btn");
        trashButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        listTag.appendChild(trashButton);
        trashButton.onclick = function () {
            console.log(taskArray);
            console.log(index);
            taskArray.splice(index, 1);
            console.log(taskArray);
            updateTasks();
        }

        if (!isComplete) {
            var checkButton = document.createElement("button");
            checkButton.classList.add("float-right");
            checkButton.classList.add("task-btn");
            checkButton.innerHTML = `<i class="fas fa-clipboard-check"></i>`;
            listTag.appendChild(checkButton);
            checkButton.onclick = function () {
                taskArray[index].complete = true;
                updateTasks();
            }
        }

        var priorityText = document.createElement("span");
        priorityText.innerText = "Priority: " + taskPriority;
        priorityText.classList.add("float-right");
        listTag.appendChild(priorityText);

        //<li class="list-group-item list-group-item-success">A simple success list group item</li>
        taskList.appendChild(listTag);
    }
}

form.onsubmit = function (event) {
    event.preventDefault();
    var taskTitle = document.getElementById("task-title").value;
    if (taskTitle.trim() == "") {
        return alert("Task title must be filled");
    }
    var taskPriority = document.getElementById("task-priority").value;
    var isComplete = document.getElementById("taskStatus-complete").checked;
    var taskInfo = {
        title: taskTitle,
        priority: taskPriority,
        complete: isComplete,
    };
    taskArray.push(taskInfo);
    form.reset();
    updateTasks();


}

