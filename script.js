const button = document.getElementById('button');

const nome = document.getElementById('nome');

const altura = document.getElementById('altura');

const peso = document.getElementById('peso');

const resultado = document.getElementById('resultado');

const limparButton = document.getElementById('limpar')

const getText = (imc) => {
    if (imc > 40) return 'Obesidade grau III';
    if (imc > 35) return 'Obesidade grau II';
    if (imc > 30) return 'Obesidade grau I';
    if (imc > 25) return 'Levemente acima do peso';
    if (imc > 18.5) return 'Peso ideal';
    if (imc < 18.5) return 'Abaixo do peso';
}

const imcCalc = () => {
    if (!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos'
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value}, ${getText(valorImc)}`;  
}

const limparCampos = () => {
    nome.value = '';
    altura.value = '';
    peso.value = '';
    resultado.textContent = '';
}

button.addEventListener('click', imcCalc);
limparButton.addEventListener('click', limparCampos);