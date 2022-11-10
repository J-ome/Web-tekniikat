function qs(selector){
    return document.querySelector(selector);
}
function ce(name){return document.createElement(name);}



//let elem = document.querySelector("body");
let elem = qs("body");

let nimet = ["Reima", "Liisa", "Timo", "Merja"];

for (const nimi of nimet) {
    let n = ce("p");
    //funktio ajaa saman asian kuin alhaalla oleva createElement
    //document.createElement("P");
    n.textContent = nimi;
    elem.appendChild(n);
    
}


//let x = elem.nextElementSibling;

//tai

// let x = elem.parentElement; <- etsii bodyn

//Lisätään tekstiä divin sisään, älä käytä innerHTML !!
//let elem2 = document.querySelector("#test");
//Luodaan uusi P elementti/node
//let p = document.createElement("p");
//p.textContent = "Tässäpä uusi P elementti";
//Lisätään appendChildillä p elementti
//elem2.appendChild(p);
//Lisätäksesi toisen elementin appendChildillä luo kokonaan uusi muuttuja edellisestä seuraten

let elem3 = document.querySelector(".special").nextElementSibling;
let p = document.createElement("P");
p.textContent = "Jotain tekstiä";

elem3.parentElement.insertBefore(p, elem3);


//classList.toggle <- voi asettaa esim. napin joka muuttaa muotoilua