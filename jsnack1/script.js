// alert('Suggerimento: Maria Rossi')

// costruisco un array di invitati

const invitati = [
    'Maria Rossi',
    'Maria Bianchi',
    'Samuele Neri',
    'Beppe Vessicchio'
];

// l'accesso di base è negato
let accesso = false;

// setto dove catturare  il valore del nome e cognome dell'invitato
let nameSurname = document.getElementById('invitato')

// funzione che si attiverà al click del bottone
let bottone = document.getElementById('accedi');

function validation() {
    for (let i = 0; i < invitati.length; i++){
        let provaAccesso = nameSurname.value;
        
        if(invitati[i] === nameSurname.value) {
            
            accesso = true;
        }
    }
    if (accesso){
        let validationNone = document.getElementById('validation');
        validationNone.setAttribute('class', 'd-none');
        let benvenuto = document.createElement('div');
        benvenuto.innerHTML = `
        <div class="container text-center pt-5">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Benvenuto/a ${nameSurname.value}, può accedere alla festa
                    </h1>
                </div>
            </div>
        </div>
        `
        document.body.append(benvenuto);
    } else {
        alert('Accesso negato, si prega di andarsene')
    }
}

//scateno la funzione
bottone.addEventListener('click', validation);




