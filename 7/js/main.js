// Generatore di “nomi cognomi” casuali
// Prendendo una lista di nomi 
var nome = ['Edoardo', 'Alberto', 'Dario', 'Federico'];
// e una lista di cognomi
var cognome = ['Ercolino', 'Gaia', 'Bosco', 'Ferrara'];
//Gatsby vuole generare una falsa lista di invitati.
var random;
var random_2;

for(var i = 0; i < nome.length; i++) {
    random = Math.floor(Math.random()* nome.length);
    random_2 = Math.floor(Math.random()* cognome.length);
    console.log((nome[random]) + ' ' + (cognome[random_2]));
}
