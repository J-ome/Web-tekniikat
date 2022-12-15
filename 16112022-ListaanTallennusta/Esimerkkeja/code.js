//let button = document.querySelector("button");
let form = document.getElementById("lomake");

//button.onclick = OkClick;

/**button.addEventListener("click", OkClick);
button.addEventListener("wheel", Wheel);
let p = document.querySelector("p");
p.addEventListener("wheel", Wheel);


function OkClick() {
    button.style.width = "500px";
}**/


/**
 * 
 * @param {WheelEvent} event 
 */
function Wheel(event){
    console.log(event.deltaY);
    console.log("wheel");
}

form.addEventListener("submit", showUsername);

/**
 * 
 * @param {Event} event 
 */
function showUsername(event){
    event.preventDefault();
    let formData = new FormData(form);
    let username = formData.get("username")
    //let username = field.value;
    let h = document.createElement("h3");
    h.textContent = username;
    document.body.appendChild(h);
}

