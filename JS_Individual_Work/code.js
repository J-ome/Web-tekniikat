// Haetaan päivä

const DATE = new Date();
const YEAR = DATE.getFullYear();
let month = DATE.getMonth() + 1;
let day = DATE.getDate();

if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;

const FULLDATE = day + "." + month + "." + YEAR;


let addNote = document.getElementById("addNote");



document.getElementById("form").addEventListener("submit", makeNote);


/**
 * @param {event} event
 */

function makeNote(event) {
    event.preventDefault();



    let fData = new FormData(event.currentTarget);     
    names = fData.get("name");
    note = fData.get("note");

    let h4 = document.createElement("h4");
    let newDiv = document.createElement("div");
    let button = document.createElement("button");
    button.innerText = "Poista";
   
    
    document.querySelector(".container").appendChild(newDiv);
    newDiv.appendChild(h4);
    

    let checkbox = document.getElementById("checkbox");
    
    newDiv.classList.add("newDiv");
    h4.classList.add("date");
    h4.style.fontWeight = "bold";

    h4 = FULLDATE;
    newDiv.innerText = "\xa0" + h4 + "\xa0" +"(" + names + ")" + "\n" + "\xa0" + note + "\xa0";

    
    if(checkbox.checked == true) {

        newDiv.style.border = "solid 2px red";
    }

}