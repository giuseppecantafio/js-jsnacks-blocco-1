const mioArray = [];

// setto dove catturare il valore del numero inserito
let numeroInserito = document.getElementById('numero');

// funzione che si attiverà al click del bottone
let bottone = document.getElementById('inserisci');

// dichiaro la variabile numero disparo
let numeroDisparo;

// dichiaro una index vuota che incrementa a ogni inserimento
const index = [];

function validation(){

    if (isNaN(numeroInserito.value)){
        alert('ritenta');
        window.location.reload()
    }

    if (numeroInserito.value % 2 === 0){
        numeroDisparo = false;
    } else {
        numeroDisparo = true;
    }
    
    if(numeroDisparo){
        mioArray.push(numeroInserito.value);
        index.push(1);
        console.log(mioArray);
        numeroInserito.value = " ";
        
    } else {
        index.push(1);
        console.log(mioArray);
        numeroInserito.value = " ";
    }

    if (index.length === 6 && mioArray.length !== 0){ 
        let validationNone = document.getElementById('validation');
        validationNone.setAttribute('class', 'd-none');
        let giocoConcluso = document.createElement('div');
        giocoConcluso.innerHTML = `
        <div class="container text-center pt-5">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Ok, hai inserito 6 numeri. I numeri dispari inseriti sono: ${mioArray}
                    </h1>
                </div>
            </div>
        </div>
        `
        document.body.append(giocoConcluso);
    } else if (index.length === 6 && mioArray.length === 0) {
        let validationNone = document.getElementById('validation');
        validationNone.setAttribute('class', 'd-none');
        let giocoConcluso = document.createElement('div');
        giocoConcluso.innerHTML = `
        <div class="container text-center pt-5">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Non hai inserito numeri dispari :(
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
