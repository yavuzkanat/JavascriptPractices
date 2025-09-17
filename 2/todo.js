let taskList = [
    { "id": 0, "taskName": "" }
];



// show list on web page 
function displayList() {
    ul = document.getElementById("task_list");
    ul.innerHTML = "";
    for (let e of taskList) {
        li = ` <li class="list-group-item">
              <input type="checkbox" id="${e.id}"/>
               <label for="${e.id}">${e.taskName}</label>
              </li>`
        ul.insertAdjacentHTML("beforeend", li);

    }



}

document.getElementById("addNewTaskButton").addEventListener("click", AddTheTask);
document.querySelector("#addNewTask").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        AddTheTask(e);
    }


});

taskList.shift();
// It's push the element to JSON element.
function AddTheTask(NewEvent) {
    NewEvent.preventDefault();
    let input = document.getElementById("addNewTask");
    if (input.value.trim() !== "") {
        taskList.push({ "id": taskList.length + 1, "taskName": input.value });
        
        input.value = "";
        displayList();

    }

   

}


// It's remove all element in JSON
function RemoveTheTask(e) {
    e.preventDefault();
    taskList.slice(0,length+1);
    displayList();
}