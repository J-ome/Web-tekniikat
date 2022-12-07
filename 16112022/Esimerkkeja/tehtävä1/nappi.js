let button = document.querySelector("button");
let buttonSize = 50;
button.style.width = buttonSize + "px";

button.addEventListener("click", changeColor);

function changeColor(){
   document.body.style.backgroundColor = "Red";
   buttonSize += 10;
   button.style.width = buttonSize + "px";
   
}

button.addEventListener("mouseenter", changeLang);
button.addEventListener("mouseleave", changeBack);

function changeLang(){
    button.textContent = "Button";
}

function changeBack(){
    button.textContent = "Nappi";
}