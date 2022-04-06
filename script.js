//Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100)
//parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//elenco numeri casuali da 1 a 100
let numeriCasuali = [];

//elenco numeri che l'utente si ricorda
let numeriRicordati = []

//elenco numeri indovinati
let numeriIndovinati = []
//ciclo che mi crea i numeri casuali 
while (numeriCasuali.length <= 5){
    let numeroGenerato = Math.floor(Math.random() * 100) + 1;
    if (!numeriCasuali.includes(numeroGenerato)){
        numeriCasuali.push(numeroGenerato)
    } 
}
    
//visualizzare nella pagina i 5 numeri
document.getElementById('screen').innerHTML = numeriCasuali.join(' ')

//funzione timer che nasconde numeri dopo 30 sec
setTimeout(nascondiNumeri, 5000);
function nascondiNumeri(){
    document.getElementById('screen').classList.add('nascosto')
}

//funzione che chiede all'utente i numeri dopo 30 sec
setTimeout(chiediNumeri, 6000);
function chiediNumeri(){
    for(let c = 0; c < 5; c++){
        let numeroricordo = parseInt(prompt('inserisci i numeri che ricordi'))
        numeriRicordati.push(numeroricordo)
    }   
}

for (i = 0; i < 25; i++){
    if (numeriCasuali[i] === numeriRicordati[i]){
        numeriIndovinati.push([i])
    }
}

console.log(numeriCasuali)
console.log(numeriRicordati)
console.log(numeriIndovinati)


