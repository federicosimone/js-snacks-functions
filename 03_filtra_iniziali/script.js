/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let lettera = prompt("Scegli la lettera per filtrare") ;

// Dichiara la funzione qui.

//input
function letterFilter(array, string) {
    let newArray= [] ;
    let letterToCheck = string;

    //elaborazione dati

    for (i=0 ; i< array.length; i++) {
        let thisWord= array[i]
        let firstLetter = thisWord[0].toLowerCase() ;
        console.log(firstLetter)
        if ( firstLetter === letterToCheck ) {
            
            newArray.push(thisWord) ; 
        }
    } 

    //output

    return newArray
}
// Invoca la funzione qui e stampa il risultato in console
console.log(letterFilter(names, lettera)) ;


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]