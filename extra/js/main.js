// Crea due array che hanno un numero di elementi diversi. 
var lista_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log('la lista 1 ha ' + lista_1.length + ' ' + 'elementi');

var lista_2 = ['1', '2', '3', '4', '5'];
console.log('la lista 2 ha ' + lista_2.length + ' ' + 'elementi');

// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
while(lista_1.length != lista_2.length) {
    lista_2.push(parseInt(prompt('inserisci un numero')));
}

console.log('ora la lista 1 ha ' + lista_1.length + ' ' + 'elementi');
console.log('ora la lista 2 ha ' + lista_2.length + ' ' + 'elementi');



