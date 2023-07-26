
let newItem = document.getElementById("newItem");
let item = document.getElementById("list-container")

function addItem(){

    if(!newItem.value){
        alert("Please Enter Your Task");
    }

    let li = document.createElement('li');
    li.innerHTML = newItem.value;
    item.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    newItem.value = "";
    saveData()
}

item.addEventListener("click", function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",item.innerHTML)
}

function showtask(){
    item.innerHTML = localStorage.getItem('data')
}

showtask();