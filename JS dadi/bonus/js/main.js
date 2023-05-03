/**************************
    Gioco dei dadi
 **************************/

const playButton = document.getElementById("play");

playButton.addEventListener("click",

    function () {
        // Numero random da 1 a 6
        // creare punteggio giocatore (playerPoints)
        const playerPoints = Math.ceil(Math.random() * 6);
        // creare punteggio computer (ComputerPoints)
        const computerPoints = Math.ceil(Math.random() * 6);

        console.log(playerPoints, computerPoints);

        // Output punteggio giocatore
        const playerOutput = document.getElementById("playerOutput");
        playerOutput.append (playerPoints);

        // Output punteggio computer
        const computerOutput = document.getElementById("computerOutput");
        computerOutput.append (computerPoints);

        let resultValue;
        // Stabilire il vincitore, in base al punteggio più alto.
        // Se il punteggio giocatore è maggiore del punteggio computer: "HAI VINTO!"
        if (playerPoints > computerPoints) {
            resultValue = "HAI VINTO!";
            console.log("HAI VINTO!");
        // Se il punteggio giocatore è uguale al punteggio computer:"PARI"
        } else if (playerPoints === computerPoints) {
            resultValue = "PAREGGIO";
            console.log("PAREGGIO");
        // Altrimenti: "HA VINTO IL COMPUTER!"
        } else {
            resultValue = "HAI PERSO";
            console.log("HAI PERSO");
        }

        const resultOutput = document.getElementById("resultOutput");
        resultOutput.append(resultValue);
    }

);

    