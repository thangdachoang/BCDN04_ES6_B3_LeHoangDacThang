import TaskService from "./TaskService.js";

let listTask = [];

let addTask = () =>{
    let content = document.getElementById("newTask").value;
    if(content==""){
        alert("không được để trống")
    }else{
        listTask.push(new TaskService(content, false));
    }
    renderTask();
    clearInput();
}
document.getElementById("addItem").onclick=addTask;

let renderTask = () =>{
    let toDoContent ="";
    let toDoCompleted="";
    listTask.map((item,index)=>{
        if(item.done== false){
            toDoContent+=`
                <li>
                    <span>
                        ${item.content}
                    </span>
                    <span class="buttons">
                    <button class="remove" onclick="removeTask('${index}')"><i class="fa fa-trash-alt"></i></button>
                    <button class="complete" onclick="doneTask('${index}')"><i class="fa fa-check-circle"></i></button>
                    </span>
                </li>
            `
        }else{
            toDoCompleted+=`
            <li>
                <span>
                    ${item.content}
                </span>
                <span class="buttons">
                <button class="remove" onclick="removeTask('${index}')"><i class="fa fa-trash-alt"></i></button>
                <button class="complete" onclick="doneTask('${index}')"><i class="fa fa-check-circle"></i></button>
                </span>
            </li>
        `
        }
    })
    document.getElementById("todo").innerHTML=toDoContent;
    document.getElementById("completed").innerHTML=toDoCompleted;
}

let removeTask = (index) =>{
    listTask.splice(index,1);
    renderTask();
}

let doneTask = (index) =>{
    listTask.map((item,idx)=>{
        if(index == idx){
            item.done = true;
            console.log(item);
        }
    });
    renderTask();
}
let clearInput = () =>{
    document.getElementById("newTask").value="";
}

let sortAZ = () =>{
    listTask.sort((a, b) => (a.content > b.content ? 1 : -1));
    renderTask();
}

let sortZA = () =>{
    listTask.sort((a, b) => (a.content > b.content ? -1 : 1));
    renderTask();
}

window.removeTask = removeTask;
window.doneTask = doneTask;
window.sortAZ = sortAZ;
window.sortZA = sortZA;