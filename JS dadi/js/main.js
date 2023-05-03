/**************************
    Gioco dei dadi
 **************************/

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    // creare punteggio giocatore (playerPoints)
const playerPoints = Math.ceil(Math.random() * 6);
    // creare punteggio computer (ComputerPoints)
const ComputerPoints = Math.ceil(Math.random() * 6);

console.log(playerPoints, ComputerPoints);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
    // Se il punteggio giocatore è maggiore del punteggio computer: "HAI VINTO!"
    // Se il punteggio giocatore è uguale al punteggio computer:"PARI"
    // Altrimenti: "HA VINTO IL COMPUTER!"