//--esercizio senza bonus--

//--prompt---
/*
let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let numeroKm = prompt("inserisci quanti chilometri vuoi percorrere!");
let età = prompt("inserisci la tua età!");
let errore = ("HAI MESSO UNA DATA ERRATA!!!!!!!");
//---Prezzo biglietto normale----
*/

//--input--
let Prezzo321 = document.getElementById("calcolaPrezzo");


Prezzo321.addEventListener('click', function(){

let nome = document.getElementById("input-nome").value;
let cognome = document.getElementById("input-cognome").value;
let chilometri = document.getElementById("input-chilometri").value;
let età = document.getElementById("input-età").value;
let errore = ("HAI MESSO UN'ETA' ERRATA!!!!!!!");

let prezzoBglietto = (chilometri * 0.21);

let prezzoFinale = prezzoBglietto.toFixed(2);

let sconto1 = 20/100 ;
let sconto2 = 40/100 ;
let scontoMinori = (prezzoFinale - sconto1);
let scontoOver65 = (prezzoFinale - sconto2);

    if(età <= 0 || età >= 120 ){
        console.log("Scrivi un'età giusta!!!!");
        document.getElementById("errore").innerHTML = errore;
    }else if(età < 18){
    
        document.getElementById("nome").innerHTML = "   Nome  :  " + nome;
        document.getElementById("cognome").innerHTML = "   Congnome  :  " + cognome;
        document.getElementById("età").innerHTML = "   Età  :  " + età;
        document.getElementById("prezzoFinale").innerHTML = "  il Prezzo FInale é : " + scontoMinori + "€";
        
    } else if(età > 65) { 
        document.getElementById("nome").innerHTML = "   Nome  :  " + nome;
        document.getElementById("cognome").innerHTML = "   Congnome  :  " + cognome;
        document.getElementById("età").innerHTML = "   Età  :  " + età;
        document.getElementById("prezzoFinale").innerHTML = "  il Prezzo FInale é : " + scontoOver65 + "€";
        
    }else{
        document.getElementById("nome").innerHTML = "   Nome  :  " + nome;
        document.getElementById("cognome").innerHTML = "   Congnome  :  " + cognome;
        document.getElementById("età").innerHTML = "   Età  :  " + età;
        document.getElementById("prezzoFinale").innerHTML ="  il Prezzo FInale é : " + prezzoFinale + " €";
    
    };
    
});


/*
document.getElementById("input-nome").value = nome;
document.getElementById("input-cognome").value = cognome;
document.getElementById("input-chilometri").value = chilometri;
document.getElementById("input-età").value = età;

let prezzoBglietto = (chilometri * 0.21);

//---Prezzo con massimo 2 decimali 
let prezzoFinale = prezzoBglietto.toFixed(2);

//---i valori per lo sconto---
let sconto1 = 20/100 ;
let sconto2 = 40/100 ;
//
let scontoMinori = (prezzoFinale - sconto1);
let scontoOver65 = (prezzoFinale - sconto2);

//---Biglietto stampato con prezzo rispetto all'età
if(età <= 0 || età >= 120 ){
console.log("Scrivi un'età giusta!!!!");
document.getElementById("errore").innerHTML = errore;
}else if(età < 18){
    console.log(
        `
        Chilometri da Percorrere = ${numeroKm}

        La tua età è = ${età}

--------------------------------------------------------

        Prezzo finale di = ${scontoMinori} €
        `
    )

    document.getElementById("nome").innerHTML = "   Nome  :  " + nome;
    document.getElementById("cognome").innerHTML = "   Congnome  :  " + cognome;
    document.getElementById("età").innerHTML = "   Età  :  " + età;
    document.getElementById("prezzoFinale").innerHTML = "  il Prezzo FInale é : " + scontoMinori;
    
} else if(età > 65) {

    console.log(
        `
        Chilometri da Percorrere = ${numeroKm}

        La tua età è = ${età}

--------------------------------------------------------

        Prezzo finale di = ${scontoOver65} €

        `
    )
    
    document.getElementById("nome").innerHTML = "   Nome  :  " + nome;
    document.getElementById("cognome").innerHTML = "   Congnome  :  " + cognome;
    document.getElementById("età").innerHTML = "   Età  :  " + età;
    document.getElementById("prezzoFinale").innerHTML = "  il Prezzo FInale é : " + scontoOver65;
    
}else{
    console.log(
        `
        Chilometri da Percorrere = ${numeroKm}

        La tua età è = ${età}

--------------------------------------------------------

        Prezzo finale di = ${prezzoFinale} €

        `
    )
    document.getElementById("nome").innerHTML = "   Nome  :  " + nome;
    document.getElementById("cognome").innerHTML = "   Congnome  :  " + cognome;
    document.getElementById("età").innerHTML = "   Età  :  " + età;
    document.getElementById("prezzoFinale").innerHTML ="  il Prezzo FInale é : " + prezzoFinale;

};

*/



