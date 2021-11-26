//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const namesList = ["andrea", "giovanni", "giulia", "francesco", "emanuela", "domenico", "salvatore"];
const container = document.querySelector(".container");


const myName = prompt("Inserisci il tuo nome: ");
let i=0;
let check = false;

for (i=0; i<=namesList.length-1; ++i) {
    if (myName.toLowerCase() == namesList[i]) {
        check = true;
    }
}

if (check == true) {
    container.innerHTML = "Sei il benvenuto alla festa del grande Gatsby";
} else {
    container.innerHTML ="Il tuo nome non è presente nella lista della festa del grande Gatsby";
}


/*
const myName = prompt("Inserisci il tuo nome: ");
let i=0;
let check = false;

while (i<=namesList.length-1 && check==false) {
    if (myName.toLowerCase() == namesList[i]) {
        check=true;
    }
    i=i+1;
}

if (check == true) {
    container.innerHTML = "Sei il benvenuto alla festa del grande Gatsby";
} else {
    container.innerHTML ="Il tuo nome non è presente nella lista della festa del grande Gatsby";
}*/