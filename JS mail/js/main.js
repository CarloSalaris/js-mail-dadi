/**************************
    JS MAIL
 **************************/


//Chiedi all’utente la sua email
    //inserimento userMail tramite prompt
    const userMail = prompt("Scrivi il tuo indirizzo e-mail:");

//controlla che sia nella lista di chi può accedere
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

    let registered = false;

    //scorriamo l'array (con un for loop) + stampa un messaggio appropriato sull’esito del controllo.
    for (let i = 0; i < mailArray.length; i++) {
        
        //Se il valore di userMail corrisponde a un valore contenuto nell'array: accesso consentito
        if (userMail == mailArray[i]) {
            registered === true
            alert("Accesso consentito");
            console.log("Accesso consentito");
        }      
    }
    
    //Se non corrisponde a nessun valore: accesso negato
    if (registered === false) {
        alert("Accesso negato");
        console.log("Accesso negato");
    }