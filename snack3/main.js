//dichiaro un valore da poter sommare
let risultato = 0;

//dico quante volte deve essre eseguito il comando prompt e faccio la somma
for(let i = 0; i < 10; i++){
risultato += +prompt('Inserisci il tuo numero');
}

//dico la somma dei numeri
window.alert('la somma dei numeri è ' + risultato);