

class ProgramacaoPorHora extends DataHorario {

  constructor() {
    super();

    this.ArrayItemTime = document.querySelectorAll('.item-time')
    this.ArrayProgItens = document.querySelectorAll('.prog-itens')
    document.querySelector('#show-data').innerHTML = this.diaSemana + " " + this.diaMes
    document.querySelector('#local-time').innerHTML = this.horario + 'h';
    document.querySelector('.programacao-detail').style.backgroundColor = this.corPorHorario(this.horario)
    this.ArrayProgDetailItens = document.querySelectorAll('.prog-detail-itens')
  }



  defineCorInicialProgDetail() {
    return this.corPorHorario(this.horario)
  }

  pegaCorDeFundo(item) {
    let blue = item.webkitMatchesSelector(':nth-child(3n+1)')
    let pink = item.webkitMatchesSelector(':nth-child(3n+2)')
    let yellow = item.webkitMatchesSelector(':nth-child(3n+3)')
    let nextDay = item.webkitMatchesSelector(':nth-last-child(1)')
    if (blue) return '#009ade'
    else if (pink) return '#ec0080'
    else if (yellow) return '#ffea00'
    else if (nextDay) return 'white'
  }





}

var programacaoPorHora = new ProgramacaoPorHora()

var progDetail = document.querySelector('.programacao-detail');











programacaoPorHora.ArrayProgItens.forEach((item, index) => {
  if (programacaoPorHora.horario == index) {
    item.style.opacity = '1'
    item.style.backgroundColor = 'black';
    let corDaLetra = programacaoPorHora.pegaCorDeFundo(item)
    item.style.color = corDaLetra

  }
  if (index < 10) {
    item.innerHTML = '0' + index + 'h';
  }
  else if (index == 24) {
    item.innerHTML = '>'
  } else {
    item.innerHTML = index + 'h';
  }
})

let minutes = 00;

this.ArrayCartoomDetailImage = document.querySelectorAll('.item-cartoon')
document.querySelectorAll('.item-time').forEach((item, index) => {
  ArrayCartoomDetailImage[index].style.backgroundImage = `url(./images/carrousel/desenhos/${index + 1}.png)`

  if (index == 0) {
    item.innerHTML = programacaoPorHora.horario + ':' + minutes + 0;
    minutes += 15;
  }
  else {
    item.innerHTML = programacaoPorHora.horario + ':' + minutes
    minutes += 15;
  }
})






var idProgClicada

document.querySelectorAll('.prog-itens').forEach((item) => {

  item.addEventListener('click', (clicked) => {

    if (clicked.target.id != 'item-24') {

      if (idProgClicada != clicked.target.id && idProgClicada != null) {
        document.getElementById(idProgClicada).classList.remove('prog-item-daHora')
      }

      idProgClicada = clicked.target.id

      clicked.srcElement.classList.toggle('prog-item-daHora')


      let corDeFundo = programacaoPorHora.pegaCorDeFundo(item)
      let horaItem = new String()
      horaItem = clicked.target.textContent
      document.querySelector('#local-time').innerHTML = horaItem
      progDetail.style.backgroundColor = corDeFundo
      horaItem = horaItem.substring(0, horaItem.length - 1)
      let minutes = 000;
      programacaoPorHora.ArrayItemTime.forEach((itemTime, index) => {
        if (index == 0) {
          itemTime.innerHTML = horaItem + ':' + minutes + 0;
          minutes += 15;
        }
        else {
          itemTime.innerHTML = horaItem + ':' + minutes
          minutes += 15;
        }

      })

    }
    else console.log('nextDay')
  })
})

/* 
    programacaoPorHora.ArrayProgDetailItens.forEach((progItem,index)=>{
      progItem.addEventListener('mouseover', (hovered)=>{
        hovered.preventDefault()
        progItem.style.backgroundColor = 'transparent'
      } )
    } ) */

