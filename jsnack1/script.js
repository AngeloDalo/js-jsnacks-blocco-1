//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//ciclo for
let numeri=[];
let numero;
let somma=0;
const containerBlock = document.querySelector (".container");

for (let i=0; i<=9; i++) {
    numero = parseInt(prompt("inserisci un numero"));
    numeri.push(numero);
    somma = somma + numeri[i];
}

containerBlock.innerHTML = somma;


//ciclo while
/*
const containerBlock = document.querySelector (".container");
let numeri=[];
let numero;
let i=0;
let somma=0;
while (i<=9) {
    numero = parseInt(prompt("inserisci un numero"));
    numeri.push(numero);
    somma = somma + numeri[i];
    i=i+1;
}

containerBlock.innerHTML = somma;
*/