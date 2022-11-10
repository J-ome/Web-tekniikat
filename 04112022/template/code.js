let divs = document.querySelectorAll("div")




/**  @type {element} */
let div;
for (div of divs) {
    console.log(div.textContent);
    
}

let listItems = document.querySelectorAll("ul>li");

for (li of listItems) {
    li.textContent = li.textContent + "Jane Doe";
    
}