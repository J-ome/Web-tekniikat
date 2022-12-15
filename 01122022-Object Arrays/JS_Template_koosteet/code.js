getAppliances();

//1 Tee map-funktiolla taulu, joka sisältää hinnat 60% alennuksella.
let prices = [200, 450, 234, 430, 670, 500, 150];

let newPrice = prices.map(function(divide){
    return divide * 0.6;
})
console.log(newPrice);

let alennus = prices.map( price => price*0.6);
//2 Tee map-funktiolla toinen taulukko, jossa on jokaista 
//3 yli 200e hintaa kohden teksti "kallis" ja lopuissa teksti "halpa"

let kuvaukset = prices.map( price => price>200 ? "kallis" : "halpa");
console.log(kuvaukset);

//4 Tee filter-funktiolla taulu, jossa on vain 300:aa halvemmat hinnat.

let halvat = prices.filter( price => price<300);
console.log(halvat);


//esimerkki miten ennen tehtiin ilman filter/map

let halvat2 = [];

for (price of prices) {
    if(price < 300)
    halvat2.push(price);
}
console.log(halvat2);

//5 Suodata taulukosta vain ne nimet, joissa on kirjaimia 6 tai enemmän (length)
let names = ["John", "Lisa", "Marco", "Elizabeth", "Gunther", "Eveliina", "Risto-Matti", "Marko", "Eijastiina"];

let isotNimet = names.filter(name => name.length>=6);
console.log(isotNimet);


function showAppliances(gadgets){
    //6 Funktion parametrina on taulukko, joka sisältää laitteiden nimiä
    //Tulosta nimistä lista tälle sivulle ul-luettelon sisään.

    let ul = document.querySelector("ul");

    for (gadget of gadgets) {
        let li = document.createElement("li");
        li.textContent = gadget;
        ul.appendChild(li);
    }

}


function getAppliances(){
    fetch("https://random-data-api.com/api/v2/appliances?size=100")
        .then(resp => resp.json())
        .then(data => showAppliances(data.map(a => a.equipment)))
}


