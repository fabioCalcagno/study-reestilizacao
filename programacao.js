
var fabio = 'eumesmo'

class Programacao {
    constructor() {
        this.horario = [];
        this.imagem = '';
        this.description = '';
    }


}

this.commomUrl = 'F:/workspace/testeFrontEnd/Exercicio-Front/images/carrousel/'

this.imagePaths = ['1.png',
    '2.jpg',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.jpg']




var elementosAtivosArray = []
var elementosInativosArray = [];


document.querySelectorAll('.item-carrousel').forEach(ativo => {
    elementosAtivosArray.push(ativo)
})
document.querySelectorAll('.inativo').forEach(inativo => {
    elementosInativosArray.push(inativo)
})


document.querySelector('#next').addEventListener('click', (next) => {
   
    let primeiroAtivo = elementosAtivosArray.shift()
    primeiroAtivo.classList.replace('item-carrousel', 'inativo')
    elementosInativosArray.push(primeiroAtivo)
    let primeiroInativo = elementosInativosArray.shift()
    primeiroInativo.classList.replace('inativo', 'item-carrousel')
    elementosAtivosArray.push(primeiroInativo)
    arrayGeralcarrousel.push(...elementosAtivosArray,...elementosInativosArray)
   

})
document.querySelector('#prev').addEventListener('click', (prev) => {
    let ultimoInativo = elementosInativosArray.pop()
    let ultimoAtivo = elementosAtivosArray.pop()
    ultimoAtivo.classList.replace('item-carrousel', 'inativo')
    ultimoInativo.classList.replace('inativo', 'item-carrousel')
    elementosAtivosArray.unshift(ultimoInativo)
    elementosInativosArray.unshift(ultimoAtivo)
})









document.querySelectorAll('.item-time').forEach((item, index) => {
    let a = item.textContent

    if (a == '20:15') {
        let nextElement = item.nextElementSibling;
        nextElement.nextElementSibling.innerHTML = programacao1.description
        item.nextElementSibling.style.backgroundImage = ` url(${commomUrl + imagePaths[7]})`
    }

})




/* if (ultimoAtivo.id.split('-', 2)[1] == elementosAtivosArray.length + elementosInativosArray.length) {
    ultimoAtivo = elementosAtivosArray.pop()
    ultimoAtivo.classList.replace('item-carrousel', 'inativo')
    elementosInativosArray.push(ultimoAtivo)
    let primeiroElemento = elementosInativosArray.shift()
    primeiroElemento.classList.replace('inativo', 'item-carrousel')
    elementosAtivosArray.push(primeiroElemento)
} */