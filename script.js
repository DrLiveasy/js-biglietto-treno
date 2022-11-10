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
/**/ 


