const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor+1);
}


const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML=menorValor;

const elementorMaiorValor = document.getElementById('maior-valor');
elementorMaiorValor.innerHTML = maiorValor;
