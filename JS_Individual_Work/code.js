// Haetaan päivä

const DATE = new Date();
const YEAR = DATE.getFullYear();
let month = DATE.getMonth() + 1;
let day = DATE.getDate();

if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;

const FULLDATE = day + "." + month + "." + YEAR;

document.getElementById("form").addEventListener("submit", makeNote);

// eventti Formille ja noten tulostus uuteen tekstikenttään
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
    let p = document.createElement("p");
    document.querySelector(".container").appendChild(newDiv);
    newDiv.appendChild(h4);
    newDiv.appendChild(p);
    
    let checkbox = document.getElementById("checkbox");
    
    newDiv.classList.add("newDiv");
    h4.classList.add("date");
    p.classList.add("p")
    h4 = FULLDATE;
    
    p.innerText = "\xa0" + h4 + "\xa0" +"(" + names + ")" + "\n" + "\xa0" + note + "\xa0";

    
    if(checkbox.checked == true) {

        newDiv.style.border = "solid 2px red";
    }

}