const visualizationImage = document.getElementById('imagem-visualizacao');
const productTitle = document.getElementById('titulo-produto');
const colorName = document.getElementById('nome-cor-selecionada');
const image0Miniature = document.getElementById('0-imagem-miniatura');
const image1Miniature = document.getElementById('1-imagem-miniatura');
const image2Miniature = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    name: 'Verde-Cipreste',
    folder: 'imagens-verde-cipreste',
};

const azulInverno = {
    name: 'Azul-inverno',
    folder: 'imagens-azul-inverno',
};

const meiaNoite = {
    name: 'Meia-noite', 
    folder: 'imagens-meia-noite',
};

const estelar = {
    name: 'Estelar',
    folder: 'imagens-estelar',
};

const rosaClaro = {
    name: 'Rosa-Claro',
    folder: 'imagens-rosa-claro',
};

const colorOptions = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const sizeOptions = ['41mm', '45mm'];

let selectedImage = 1;
let selectedSize = 1;
let selectedColor = 1;

function changeImage() {
    const idSelectedOption = document.querySelector('[name="opcao-imagem"]:checked').id;
    selectedImage = idSelectedOption.charAt(0);
    visualizationImage.src = './/imagens/opcoes-cores/' + colorOptions[selectedColor].folder + '/imagem-' + selectedImage + '.jpeg';
}

function changeSize() {
    const idSelectedOption = document.querySelector('[name="opcao-tamanho"]:checked').id;
    selectedSize = idSelectedOption.charAt(0);
    productTitle.innerText = "Pulseira loop esportiva " + colorOptions[selectedColor].name + " para caixa de " + sizeOptions[selectedSize];
    if (sizeOptions[selectedSize] === '41mm') {
        visualizationImage.classList.add('caixa-pequena');
    } else {
        visualizationImage.classList.remove('caixa-pequena');
    }
}

function changeColor() {
    const idSelectedOption = document.querySelector('[name="opcao-cor"]:checked').id;
    selectedColor = idSelectedOption.charAt(0);
    productTitle.innerText = "Pulseira loop esportiva " + colorOptions[selectedColor].name + " para caixa de " + sizeOptions[selectedSize];
    colorName.innerText = 'Cor - ' + colorOptions[selectedColor].name;
    image0Miniature.src = 'imagens/opcoes-cores/' + colorOptions[selectedColor].folder + '/imagem-0.jpeg';
    image1Miniature.src = 'imagens/opcoes-cores/' + colorOptions[selectedColor].folder + '/imagem-1.jpeg';
    image2Miniature.src = 'imagens/opcoes-cores/' + colorOptions[selectedColor].folder + '/imagem-2.jpeg';
    visualizationImage.src = './imagens/opcoes-cores/' + colorOptions[selectedColor].folder + '/imagem-' + selectedImage + '.jpeg';
}