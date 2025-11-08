/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function iniziali(array) {
    //input
    let newArray = []

    //elaborazione dati 
    for (i=0 ; i<array.length; i++) {
        
        newArray.push(array[i].charAt(0)) ;   
        /*let newArray= [] ;
        let firstLetter = newArray.push(scomposto[0]) ; */   
    }
    //output 
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]