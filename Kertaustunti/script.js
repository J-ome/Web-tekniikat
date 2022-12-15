// Kun painiketta painetaan
let participantButton = document.getElementById("addParticipantButton");

participantButton.onclick = function () {

    // Lue syöte ja tallenna muuttujaan
    let participant = document.getElementById("name").value
    // Luo uusi li-elementti
    let newLiElement = document.createElement("li");
    // Aseta li-elementti sisällöksi syötetty nimi
    newLiElement.innerHTML = participant;
    // Lisätään li-elementti ul-elementille
    document.getElementById("participantList").appendChild(newLiElement);
    // Tyhjennä nimi-kenttä
}