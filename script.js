var button=document.getElementById("enter");
var input=document.getElementById("input text");
var ul=document.querySelector("ul");

function inputlength(){
   return input.value.length;
}

function createList(){
var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
}

function afterclick(){
    if (inputlength()>0){
    createList();
    }
}
function afterKeypress(event){
    if (inputlength() >0 && event.keycode===13){
        createList();
    }
}

button.addEventListener("click",afterclick);
input.addEventListener("keypress",afterKeypress);