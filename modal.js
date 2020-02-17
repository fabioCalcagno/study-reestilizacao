
var data = new DataHorario()


var modalContainer = document.querySelector('.modal-monitor')
var modal = document.querySelector('.modal-container')
var cartoonDescription = document.querySelector('.cartoon-description')
    .innerHTML = 'Dexter é um menino gênio que construiu um laboratório secreto atrás do armário do seu quarto. Apesar de suas invenções pacíficas, ele está sempre em conflito com sua endiabrada irmã, Dee Dee, e seu arqui-inimigo, Mandark.'


document.querySelector('#modal-data').innerHTML = data.diaSemana + ", " + data.diaMes


document.querySelectorAll('.prog-detail-itens').forEach((progDetail, index) => {
    if (index != 0) {
        progDetail.addEventListener('click', (clicked) => {
            modalContainer.style.display = 'flex';
        })
    }
})


modalContainer.addEventListener('click', (clicked) => {
    if (clicked.target.id == 'modalMonitor' || clicked.target.id == 'modalPersonagens') {
        modalContainer.style.display = 'none'
    }
})



let modal2 = document.querySelector('#modal-personagens')
modal2.addEventListener('click', (clicked) => {
    if (clicked.target.id == 'modal-personagens') {
        modal2.style.display = "none";
    }

})

function fechar(item) {
    if (item == 1) {
        modalContainer.style.display = 'none'
    }
    else modal2.style.display = 'none'

}


let infoArray = ['26 de fevereiro de 1995',
    '20 de novembro de 2003',
    `Dexter's Laboratory`,
    'Christine Cavanaugh, Kath Soucie, Jeff Bennett',
    'Cartoon Network, YTV, Teletoon, Discovery',
]



document.querySelectorAll('.cartoon-info-data').forEach((cartoonInfo, index) => {

    cartoonInfo.innerHTML = "  " + infoArray[index]
})



document.querySelectorAll(".item").forEach((itemCarrousel, index) => {


    itemCarrousel.addEventListener('click', (clicked) => {
        modal2.style.display = "flex";
    })

})