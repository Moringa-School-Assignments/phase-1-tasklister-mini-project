let form = document.getElementById("create-task-form");
let tasks = document.querySelector("#tasks");
let formText = document.querySelector("#new-task-description")
document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    taskLister(formText.value);
    // alert(e.target);
    // console.log(formText.value);
  })

});

let btn = document.createElement("button");
function taskLister(arg){
     let li = document.createElement("li");
     btn.textContent = "Delete";
     btn.style.backgroundColor = "red";
     btn.style.color = "white";
     btn.style.fontSize = "15px";
     btn.style.marginLeft = "30px";
     li.textContent = arg;
     li.append(btn);
     tasks.appendChild((li));
     btn.addEventListener('click', tasksDeleter)
}

function tasksDeleter(){
  btn.parentNode.remove();
}