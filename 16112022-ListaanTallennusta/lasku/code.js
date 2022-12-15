
/**
 * Oma koodi - ei toimi :D
 * 
 * let form = document.querySelector("form");
let result = document.getElementById("result");
form.addEventListener("submit", calculations);
let sumsum = document.getElementById("sum");
sumsum.checked = true|false;
let subsub = document.getElementById("sub");
subsub.checked = true|false;*/

/**
 * @param {Event} event
 */


/**function calculations(event){

    event.preventDefault();
    let sum = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
    let substract = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value);


    if(sumsum === true){
        result.textContent = sum;
    } else if (subsub === true){
        result.textContent = substract;
    }
}*/

// Opettajan tekemä

let form = document.querySelector("form");
let result = document.querySelector("h3");

form.addEventListener("submit", calculate);

function calculate(e){
    e.preventDefault();

    let fData = new FormData(form);
    let num1 = Number(fData.get("num1"));
    let num2 = Number(fData.get("num2"));

    let arit = fData.get("arit");
    let res = arit === "sum" ? num1+num2 : num1-num2;


   /**  if(arit === "sum"){
        res = num1 + num2;
    }else {
        res = num1 - num2;
    }
    let sum = num1 + num2;*/

    result.textContent = "Tulos on " + res;
}

