const inputValue = document.querySelector("#task-input");
const addButton = document.querySelector("#add-task");
const taskContainer = document.querySelector(".task-container");

function addTask(){
    // console.log(inputValue.value);
    if(inputValue.value === ""){
        alert("Please enter a task name");
    } else {
        const newLi = document.createElement("li");
        newLi.textContent = inputValue.value;
        taskContainer.appendChild(newLi);
        inputValue.value = "";
        const spanTag = document.createElement("span");
        spanTag.innerHTML = '\u00d7'
        newLi.appendChild(spanTag);
    }
    inputValue.value = "";
    storeTasks();
}

addButton.addEventListener("click",addTask);

taskContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        storeTasks();
    } else if(e.target.tagName === "SPAN"){
        // console.log("Please select");
        e.target.parentNode.remove();
        storeTasks();
    }
},false);

//save the tasks when page is refreshed or browser is closed
const storeTasks =() => {
    localStorage.setItem("tasks",taskContainer.innerHTML);
}

//display same tasks when page is refreshed or browser is closed
const displayTasks =() => {
    taskContainer.innerHTML = localStorage.getItem("tasks");
}

displayTasks();
