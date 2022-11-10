//let harj1 = document.getElementById(content);
let harj1 = document.querySelector("#content");

console.log(harj1.tagName);

let harj2 = document.querySelector(".basic");
console.log(harj2.tagName);

let harj3 = document.querySelector("li");
console.log(harj3.textContent);

let harj4 = document.querySelector("ul>:last-child");
console.log(harj4.textContent);


//collections

let bodyDesc = document.querySelectorAll("body *");

for (elem of bodyDesc) {
    console.log(elem.nodeName);
    
}

let pElems = document.querySelectorAll("article p");

for (elem of pElems) {
    console.log(elem.textContent);

}

let liElems = document.querySelectorAll("li");

for (elem of liElems) {
    elem.textContent="Jane Doe";
}


let harj4Elems = document.querySelectorAll("#content *");

for (elem of harj4Elems) {
    if(elem.textContent.length > 10){
    console.log(elem.nodeName);
    }
    
}