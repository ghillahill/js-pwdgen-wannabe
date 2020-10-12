var nomeUtente;
var cognomeUtente;
var colorePreferito;

var nomeUtente = prompt('Quale è il tuo nome?');
var cognomeUtente = prompt('Quale è il tuo cognome?');
var colorePreferito = prompt('Quale è il tuo colore preferito?');

document.getElementById('passwordGenerator').innerHTML = document.getElementById('passwordGenerator').innerHTML + nomeUtente + cognomeUtente + colorePreferito + 20;
