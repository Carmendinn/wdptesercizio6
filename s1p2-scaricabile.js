/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I datatype in Javascript sono diverse tipologie di valori utilizziabili nel contesto di Javascript.Javascript
Alcuni dei più importanti sono:
per quanto riguarda i primitivi
le stringhe, parole o numeri racchiusi all'interno di appendici.
i numeri, che a loro volta possono essere interi oppure decimali. 
i booleani, che risultano essere true o false.
null, ovvero un valore che indica l'assenza di valore nella variabile.
undefined, ovvero un valore non ancora dichiarato 
in merito ai tipi strutturati
gli oggetti, chiusi in parentesi graffe e che descrivono la stessa entità. 
gli Array o liste di dati, che contengono all'interno di parentesi quadre diverse tipologie di valori.
Infine abbiamo le funzioni, caratterizzate da una non data structuredClone, ovvero un blocco di codice che può essere eseguito. */



/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in Javascript, è un tipo di dato strutturato che descrive la stessa entità tramite utilizzo di una chiave-valore racchiuse da parentesi graffe.*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/*
let x = 12;
let y = 20;
let somma = x + y;
console.log (somma);*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12; */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*let nome = "Carmen";
console.log (nome);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*let x = 12;
let y = 4;
let sottrazione = (12 - 4);
console.log (sottrazione);*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log(name1 == name2);

console.log(name2.toLowerCase() === name1);

