let images = [
    "https://picsum.photos/id/1/500",
    "https://picsum.photos/id/20/500",
    "https://picsum.photos/id/45/500",
    "https://picsum.photos/id/80/500",
    "https://picsum.photos/id/23/500",
];

let imageContainer = document.getElementById("img_container");
let lightBox = document.getElementById("lightbox");

lightBox.addEventListener("click", closeImage);

for(image of images){
    let img = document.createElement("img");
    img.src = image;

    document.body.appendChild(img);

    img.addEventListener("click", openImage);
}


/**
 * @param {event} event 
 * 
 */
function openImage(event){
    let clickedImage = event.currentTarget
    imageContainer.src = clickedImage.src;
    lightBox.classList.add("visible");
}

function closeImage(){
    lightBox.classList.remove("visible");
}
