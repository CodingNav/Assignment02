var taskArray = [];
var form = document.getElementById("create-task");



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
}

