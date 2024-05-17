
//chiede all'utente di inserire il primo numero
const numero1 = prompt('Inserisci il tuo numero1');

//chiede all'utente di inserire il secondo numero
const numero2 = prompt('Inserisci il tuo numero2');

//converte i valori inseriti in numeri e li transforma in interi (senza virgola)
numero1 = parseFloat(numero1);
numero2 = parsefloat(numero2);

//confonta i numeri e stampa il maggiore
if (numero1 < numero2){
console.log ('il numero maggiore è '+ numero2);
}
else if (numero1 > numero2){
console.log ('il numero maggiore è ' + numero1);
}
else (numero1 == numero2) 
    console.log('i due numeri sono uguali');
