/**************************
    JS MAIL - BONUS
 **************************/

//Creare un array di email con diritto di accesso
const mailArray = ["shannon08@eichmann.com",
    "samson04@lind.com",
    "cthompson@hotmail.com",
    "kling.ruthe@halvorson.org",
    "lehner.jadyn@williamson.com",
    "arely57@yahoo.com",
    "carloa.salaris@gmail.com",
    "sister_08@hotmail.com",
    "schaden.mario@pagac.com",
    "brody.doyle@yahoo.com",
    "keebler.kathleen@jakubowski.com",];

const inputConfirm = document.getElementById("inputConfirm");


inputConfirm.addEventListener("click", 

    function() {

        let registered = false;
        //Chiedi all’utente la sua email
        const userMail = document.getElementById("userMail").value;

        //controlla che sia nella lista di chi può accedere
        //scorriamo l'array (con un for loop) + stampa un messaggio appropriato sull’esito del controllo.
        for (let i = 0; i < mailArray.length; i++) {
            
            //Se il valore di userMail corrisponde a un valore contenuto nell'array: accesso consentito
            if (userMail == mailArray[i]) {
                registered = true;   
            }
        }
    
        //Output risultato
        if (registered == true) {
            alert("Accesso consentito");
            console.log("Accesso consentito");
        } else {
            alert("Accesso negato");
            console.log("Accesso negato");
        }

        console.log(registered);
    }

);


