// Crea un array di numeri interi
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Fai la somma di tutti gli elementi che sono in posizione dispari
var somma = 0;

for(var i = 0; i < numeri.length; i++){
    if (i % 2 != 0) {
        somma = somma + numeri[i];
        console.log(somma)
    }
}

