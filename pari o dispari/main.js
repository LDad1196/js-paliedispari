// Metto il prompt per riuscire a prendere il numero
const myNumber = prompt("Inserisci un numero da 1 a 5")
console.log("Il numero da te scelto è", myNumber);

for (let i = 0; i < 10; i++) {
	
	let numero = getRandomNumber(1, 5);
	let risultato = pariOrDispari(numero);
	console.log(`Il numero ${numero} è ${risultato}`);
	
}


//La funzione pariOrDispari accetta un "numero" in ingresso, controlla se pari o dispari e restituisce una stringa in risultato
function pariOrDispari( numero ) {
	// console.log(numero);
	//controllo che "numero", cioè il valore fornito sia pari o dispari
	if( numero % 2 == 0 ) {
		let testo = "pari";
		return testo;
	}
	
	return "dispari";
}

//Input: range inteso come min e max, Output: un numero casuale in quel range
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}