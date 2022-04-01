//dichiaro il mio array vuoto
const mioArray = [];

// setto dove catturare il valore del numero inserito
let numero = document.getElementById('numero');

// funzione che si attiverà al click del bottone
let bottone = document.getElementById('inserisci');

function validation(){

    //se non è un numero ricomincio da capo
    if (isNaN(numero.value)){
        alert('ritenta');
        window.location.reload()
    }

    if ((numero.value < 1000) || (numero.value > 9999)){
        alert('Inserire un numero a 4 cifre');
        window.location.reload()
    }

    //metto parseInt per sicurezza
    let numeroInserito = parseInt(numero.value);
    console.log(numeroInserito);


    //prendo il valore inserito e lo pusho in mioArray
    mioArray.push(numeroInserito);
    console.log(mioArray);

    //prendo mioArray e lo divido internamente
    const nuovoMioArray = Array.from(String(mioArray), Number);
    console.log(nuovoMioArray);

    //sommo gli elementi del mio array
    let somma = 0;
    for (let i = 0; i < nuovoMioArray.length; i++) {
        somma += nuovoMioArray[i];
    }
    console.log(somma);

    if (somma){
        let validationNone = document.getElementById('validation');
        validationNone.setAttribute('class', 'd-none');
        let giocoConcluso = document.createElement('div');
        giocoConcluso.innerHTML = `
        <div class="container text-center pt-5">
            <div class="row">
                <div class="col-12">
                    <h1>
                        La somma degli elementi che compongono il numero inserito è ${somma}
                    </h1>
                </div>
            </div>
        </div>
        `
        document.body.append(giocoConcluso);
    }

}




// scateno la funzione
bottone.addEventListener('click', validation);