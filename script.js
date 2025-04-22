// 🏆 SNACK 1
// Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// function somma(a, b) {
//     return a + b;
// }

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// const somma = function(a, b) {
//     return a + b;
// }

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
// const somma = () => a + b; // RISULTATO FINALE DEL SNACK 1

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🏆 SNACK 2
// Crea una arrow function che calcola il quadrato di un numero.

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
// const quadrato = n => n * n;
// const quadrato = n => n ** 2; (MODO ALTERNATIVO NEL JAVASCRIPT MODERNO ---> n elevato al quadrato)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🏆 SNACK 3
// Crea una funzione eseguiOperazione

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a + b;


// const eseguiOperazioni = (a, b, operatore) => {
//     operatore(a, b);
// }

// eseguiOperazioni(2, 3, somma);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🏆 SNACK 4
// Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
// const timer3s = creaTimer(3000);
// timer3s();

// function creaTimer(tempo) {
//     return () => {
//         setTimeout(() => {
//             console.log('Tempo scaduto');
//         }, tempo)
//     }
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🏆 SNACK 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

// function stampaOgniSecondo(messagio) {
//     setInterval(() => {
//         console.log(messagio);
//     }, 1000)
// }

// stampaOgniSecondo('Messaggio ripetuto ogni secondo');

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🏆 SNACK 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function creaContatoreAutomatico(intervallo) {

//     let count = 0; // CLOSURE

//     return () => {
//         setInterval(() => {
//             count ++;
//             console.log(`Il contatore è arrivato a ${count}`);
//         }, intervallo)
//     }
// }

// const contaOgniSecondo = creaContatoreAutomatico(1000);
// contaOgniSecondo();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🏆 SNACK 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// function eseguiEferma(messaggio, intervallo, durata) {

//     const intervalId = setInterval(() => {
//         console.log(messaggio);
//     }, intervallo);

//     setTimeout(() => {
//         // dirgli di interrompere l'intervallo
//         clearInterval(intervalId);
//     }, durata);
// }

// eseguiEferma('Sto eseguendo...', 1000, 5000); // STAMPARE IL MESSAGGIO OGNI SECONDO PER 5 SECONDI E POI FERMARSI