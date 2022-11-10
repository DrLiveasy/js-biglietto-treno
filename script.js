/*---Inserimento Dati---*/
let numeroKm = prompt("inserisci quanti chilometri vuoi percorrere!");
let età = prompt("inserisci la tua età!");

/*---Prezzo biglietto normale-----*/
let prezzoBglietto = (numeroKm * 0.21);

/*---i valori per lo sconto---*/
let sconto1 = 20/100 ;
let sconto2 = 40/100 ;
//
let scontoMinori = (prezzoBglietto - sconto1);
let scontoOver65 = (prezzoBglietto - sconto2);


/*---Biglietto stampato con prezzo rispetto all'età*/ 
if(età <= 0 || età >= 120 ){
console.log("Scrivi un'età giusta!!!!");

}else if(età < 18){
    console.log(
        `
        Chilometri da Percorrere = ${numeroKm}

        La tua età è = ${età}

--------------------------------------------------------

        Prezzo finale di = ${scontoMinori} €
        `
    );
    
} else if(età > 65) {

    console.log(
        `
        Chilometri da Percorrere = ${numeroKm}

        La tua età è = ${età}

--------------------------------------------------------

        Prezzo finale di = ${scontoOver65} €

        `
    );
    
}else{
    console.log(
        `
        Chilometri da Percorrere = ${numeroKm}

        La tua età è = ${età}

--------------------------------------------------------

        Prezzo finale di = ${prezzoBglietto} €

        `
    );

};