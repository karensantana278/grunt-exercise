let numero = document.getElementById("numeroMaximo");
let btn = document.getElementById("btnSortear");
let resultado = document.querySelector('.resultado');
let resultadoValor = document.querySelector('.resultado span');
let numeroSorteado = 1;


function sortearNumero(numeroMaximo){
    return numeroSorteado = Math.round(Math.random() * Number(numeroMaximo));
}

function exibirNumeroSorteado(e){
    e.preventDefault();
    resultado.style.display = 'block';
    resultadoValor.textContent = sortearNumero(numero.value);
}

btn.addEventListener("click", exibirNumeroSorteado)