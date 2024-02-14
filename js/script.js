// bersagliamo lo slider
// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// per ognuno di essi andremo a creare un elemento img dentro lo slider

const images = [
    {
        image: '../img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: '../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: '../img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: '../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: '../img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



console.log(images);


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");
const smallSliderElement = document.getElementById("small-slider")

// tramite un ciclo for prendiamo ogni indirizzo dall'array
for (let i = 0; i < images.length; i++) {

    // creo un nuovo elemento per l'inserimento delle immagini
    newElement = document.createElement("img");
    newElement.classList.add("img-thumbnail")
    newElement.src =  images[i].image;
    // let imageElement =
    // console.log(imageElement)
    let titleElement = images[i].title;
    console.log(titleElement)
    let textElement = images[i].text;
    console.log(textElement)

    // aggiungo il nuovo elemento creato al nuovo contenitore per le img 
    smallSliderElement.append(newElement)
    
}
console.log(images)

// document.querySelector("#slider img:nth-of-type(1)").className = "active";

/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
newElement.addEventListener("click", function() {

    


//     if (slideNumber < images.length) {

//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // - aumento il contatore di 1
//         slideNumber++;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//         console.log(slideNumber);

//     } else {

//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // resetto la variabile che mi conta l'immagine a cui sono arrivato
//         slideNumber = 1;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//     }

        
// });


// document.querySelector("#down-arrow").addEventListener("click", function() {

//     if (slideNumber > 1) {
//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // - diminuisco il contatore di 1
//         slideNumber--;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//         console.log(slideNumber);

//     } else {

//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
//         slideNumber = images.length;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//     }
    


});