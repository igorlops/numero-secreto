function verificaSeOChutePossuiValorValido(chute){

    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    else if(numeroForMaiorOuMenorQueOvalorPermitido(numero)){
        elementoChute.innerHTML += `<div>Número inválido: O número precisa 
        estar entre ${menorValor} e ${maiorValor}</div>`;

    }

    else if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        
            <button id="jogar-novamente" class="btn-jogar">Jogar 
            novamente</button>
            `;
            recognition.stop();
    }
    else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }


}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOvalorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click',function(e){
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})