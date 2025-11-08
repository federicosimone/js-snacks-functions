/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
const secondName = prompt("Inserisci il tuo nome")

// Dichiara la funzione qui.

function saluto(name){
    return `Ciao ${name}` ;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(userName))
console.log(saluto(secondName))

//Risultato atteso se si passa 'Mario': // ciao Mario
