// Chiedi all'utente di scegliere pari o dispari e il numero da 0 a 5
let bet = prompt ("Il risultato sarà pari o dispari?");

let myNumber = parseInt (prompt("Scegli un numero tra 0 e 5"));
console.log("Hai scelto il numero: ", myNumber)

// Stabilisci gli if se hai scelto il numero tra 0 e 5

if (myNumber <= 5) {
	alert("Giochiamo");

	let pcNumber =random();

	let somma = pcNumber + myNumber;
	console.log(myNumber, "+", pcNumber, "=", somma);

	// Controlliamo se hai scelto il risultato corretto tra pari e dispari
	if (bet == pariOrDispari(somma)) {
		alert("Hai vinto!")
	}
	else {
		alert("Hai perso!")
	}
}

else {
	alert ("Inserisci un numero tra 0 e 5!")
}

// Specifichiamo la funzione che riguarda il numero scelto dal pc
function random() {
	let pcNumber = Math.floor(Math.random() * 5) + 1;
	console.log("Il computer ha scelto il numero: ", pcNumber)
	return pcNumber;
}

// Specifichiamo la funzione Pari orDispari
function pariOrDispari(numero) {
	let risultato = "dispari";

	if (numero % 2 == 0) {
		risultato = "pari"; 
	}

	console.log("Il risultato è: ", risultato);
	return risultato;
}
