//creo una lista array con i nomi degli invitati
const listaInvitati = ['andrea', 'marco', 'jessyca', 'ester'];
console.log(listaInvitati)

//chiedo all'utente che mi dica il suo nome per controlare la mia lista
nome = prompt('inserisci il tuo nome');
console.log(nome)

//controllo che nella mia lista "array" includa il nome che lutente mi ha passato
if( listaInvitati.includes(nome)){
    window.alert('puoi entrare, sei nella lista');
}
else
    window.alert('mi dispiace non sei nella lista');

