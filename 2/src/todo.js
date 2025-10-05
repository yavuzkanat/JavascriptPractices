

//values
let todos = [
    { "id": 1, "task": "test1", "status": "pending" },
    { "id": 2, "task": "test2", "status": "done" },

];
let editMode = false;
let editId;
displayTask(document.querySelector("span.active").id);
//buttons
document.getElementById("addButton").addEventListener("click", newTask);
//document.getElementById("clearB").addEventListener("click", deleteAllTask);
document.getElementById("todoInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        document.getElementById("addButton").click();
        event.preventDefault();




    }

});

const listElement = document.getElementById("listTask");
const filters = document.querySelectorAll(".filters span");

for (let span of filters) {
    span.addEventListener("click", function () {
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTask(span.id);
    })
}


function markTheTask(id) {
    let e = document.getElementById(`input_${id}`).nextElementSibling;
    if (!e.classList.contains("text-decoration-line-through")) {
        e.classList.add("text-decoration-line-through");
        for (const element of todos) {
            if (element.id == id) {
                element.status = "done";

            }
        }

    } else {
        e.classList.remove("text-decoration-line-through");
        for (const element of todos) {
            if (element.id == id) {
                element.status = "pending";

            }
        }
    }






}

function newTask() {
    let input = document.getElementById("todoInput");
    if (!editMode) {
        todos.push({ "id": todos.length + 1, "task": input.value, "status": "pending" });
        input.value = "";
        displayTask(document.querySelector("span.active").id);
    } else {
        editMode = false;
        for (const element of todos) {
            if (element.id == editId) {
                element.task = input.value;
                break;

            }


        }
        input.value = "";
        displayTask(document.querySelector("span.active").id);

    }





}
function deleteAllTask() {
    todos.splice(0, todos.length);
    displayTask(document.querySelector("span.active").id);
}

function deleteTheTask(id) {
    let deletedId;
    for (let index in todos) {
        if (todos[index].id == id) {
            deletedId = index;
        }
    }
    todos.splice(deletedId, 1);
    displayTask(document.querySelector("span.active").id);
}
function updateTask(id, taskName) {
    editMode = true;
    editId = id;
    let input = document.getElementById("todoInput");
    input.value = taskName;
    input.focus();



}
function displayTask(filter) {
    let ul = document.getElementById("listTask");
    ul.innerHTML = "";
    if (todos.length == 0) {
        empty_msg = `<h1 class="text-center text-danger"> Empty List ! <br><i class="text-danger fa fa-battery-empty" aria-hidden="true"></i></h1>
            
        `
        ul.insertAdjacentHTML("beforeend", empty_msg);
    } else {

        for (let i of todos) {
            if (filter == i.status || filter == "all") {
                let isChecked = i.status === "done" ? "checked" : "";
                let isCheckedLine = i.status === "done" ? "text-decoration-line-through" : "";
                let li_element = `
            <li class="list-group-item">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" onclick="markTheTask(${i.id})" id="input_${i.id}" ${isChecked}>
                    <label class="form-check-label text-primary ${isCheckedLine} font-weight-bold" for="input_${i.id}">${i.task}</label>
                    <i class="fa fa-trash" aria-hidden="true" onclick="deleteTheTask(${i.id})" id="trash_${i.id}"></i>
                    <i class="fa fa-pencil-square" aria-hidden="true" onclick="updateTask('${i.id}','${i.task}')" id="edit_${i.id}"></i>
                </div>
            </li>
        `;
                ul.insertAdjacentHTML("beforeend", li_element);
            }


        }




    }


}



