// richiesta utente numero km e età
const userKm = prompt('Quanti km devi fare?');
console.log(userKm);
const userAge = prompt('Quanti anni hai?');
console.log(userAge);
const ticketPrice = userKm * 0.21;
console.log(ticketPrice);
// faccio un ciclo unico che comprende le 3 situazioni
if ( userAge <= 17 ) {
    // se il cliente è minorenne
const sconto = ticketPrice - (( ticketPrice * 20 ) / 100);
// sconto è inizializzato internamente solo se il ciclo si attiva inutile dichiararlo allesterno se non viene attivato il ciclo
document.getElementById('user-message').innerHTML = sconto.toFixed(2);
}
else if ( userAge >= 65 ){
    // se il cliente è over 65
const sconto = ticketPrice - (( ticketPrice * 40 ) / 100);
document.getElementById('user-message').innerHTML = sconto.toFixed(2);
} else {
    // caso rimanente
    document.getElementById('user-message').innerHTML = ticketPrice.toFixed(2);
}

// As a general rule, always declare a variable with const unless you know that the value will change.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp
