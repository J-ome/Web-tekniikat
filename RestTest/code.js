getData();
//Ei jäädä odottamaan
getData2();

//tehdään muuta, lisätään vaikka elementtejä sivulle



async function getData() {
    const response = await fetch('https://yesno.wtf/api');
    const olio = await response.json();

    console.log(olio);
}


async function getData2() {
    const response = await fetch('https://random-data-api.com/api/v2/appliances?size=10');
    const taulu = await response.json();
    
    for(laite of taulu) {
        let h = document.createElement("h4");
        h.textContent = laite.equipment;
        document.body.appendChild(h);
    }
}