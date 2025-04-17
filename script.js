// const inputbox=document.getElementById("input-box");
// const listcontainer= document.getElementById("list-container");
// function addTask(){
//     if(inputbox.value===''){
//         alert("You Must Write Something !");
//     }
//     else{
//         let li=document.createElement("li");
//         listcontainer.innerHTML=inputbox.value;
//         listcontainer.appendChild(li)
//         let span = document.createElement("span")
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }
//     inputbox.value=""
// }
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You Must Write Something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value; 
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}
inputbox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask(); 
    }
});
listcontainer.addEventListener("click" ,function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
} ,false);


function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask()