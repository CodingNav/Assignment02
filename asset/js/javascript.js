var taskArray = [];
var form = document.getElementById("create-task");
var taskList = document.getElementById("tasks");



form.onsubmit = function (event) {
    event.preventDefault();
    var taskTitle = document.getElementById("task-title").value;
    var taskPriority = document.getElementById("task-priority").value;
    var isComplete = document.getElementById("taskStatus-complete").checked;
    var taskInfo = {
        title: taskTitle,
        priority: taskPriority,
        complete: isComplete,
    };
    taskArray.push(taskInfo);
    console.log(taskArray);
    var listTag = document.createElement('li');
    listTag.classList.add("list-group-item");
    listTag.innerText = taskTitle;

    if (isComplete) {
        listTag.classList.add("list-group-item-success");
    }
    else {
        listTag.classList.add("list-group-item-warning");
    }

    var trashButton = document.createElement("button");
    trashButton.classList.add("float-right");
    trashButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    listTag.appendChild(trashButton);

    if (!isComplete) {
        var checkButton = document.createElement("button");
        checkButton.classList.add("float-right");
        checkButton.innerHTML = `<i class="fas fa-clipboard-check"></i>`;
        listTag.appendChild(checkButton);
    }

    //<li class="list-group-item list-group-item-success">A simple success list group item</li>
    taskList.appendChild(listTag);


}

