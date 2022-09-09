var numeroSorteado = parseInt(Math.random() * 11)

var vida = 3

function chutar() {
  var valor = document.getElementById('valorInput').value
  if (numeroSorteado == valor) {
    acertou()
  } else {
    vida--
    perdeVida(vida)
    if (vida == 0) {
      errou()
    }
  }
  document.getElementById('valorInput').value = ' '
}

function jogar() {
  var valorTela = document.getElementById('numero-resultado')

  valorTela.innerHTML = numeroSorteado
  const menu = document.querySelector('.menu')
  const conteudo = document.querySelector('.conteudo')
  const main1 = document.querySelector('main')
  main1.classList.remove('blur')
  menu.style.visibility = 'hidden'
  conteudo.style.visibility = 'hidden'
}

var clicked = 0
function comoJogar() {
  clicked++
  if (clicked == 1) {
    const menu1 = document.querySelector('.menu')
    menu1.style.height = '29em'
    const howtoplay = document.getElementById('txtcomoJogar')
    howtoplay.innerHTML =
      'O computador irá gerar um valor entre 0 e 10 aleatóriamente. Cabe a você a descobrir qual é esse valor. Você possui apenas 3 chances. <b>Boa sorte! </b>'
  } else {
    const menu1 = document.querySelector('.menu')
    menu1.style.height = '22em'
    const howtoplay = document.getElementById('txtcomoJogar')
    howtoplay.innerHTML = ''
    clicked = 0
  }
}

function acertou() {
  const correto = document.querySelector('.acertou')
  const main = document.querySelector('main')
  const titulo = document.querySelector('#titulo-resposta')
  const texto = document.querySelector('#texto-resposta')

  titulo.innerText = 'Parabéns você acertou!'
  texto.innerHTML = 'O número sorteado foi ' + numeroSorteado
  main.classList.add('blur')
  correto.style.opacity = 1
  correto.style.top = '-540px'
  correto.style.width = '23em'
  correto.style.height = '24em'
  var btn = document.querySelector('.play-again')
  btn.addEventListener('click', function () {
    location.reload()
  })
}

function perdeVida(num) {
  switch (num) {
    case 2:
      const vida1 = document.querySelector('#vida1')
      vida1.src = 'images/vida.gif'
      vida1.style.scale = '105%'
      vida1.style.filter = 'grayscale(0%)'
      vida1.style.opacity = '0.8'
      vida1.style.filter = 'saturate(60%)'
      const textoDica = document.getElementById('dica')
      if (numeroSorteado > 5) {
        textoDica.innerHTML = '<b>Dica:</b> o número é maior que 5'
      } else {
        textoDica.innerHTML = '<b>Dica:</b> o número é menor que 5'
      }
      break
    case 1:
      const vida2 = document.querySelector('#vida2')
      vida2.src = 'images/vida.gif'
      vida2.style.scale = '105%'
      vida2.style.filter = 'grayscale(0%)'
      vida2.style.opacity = '0.8'
      vida2.style.filter = 'saturate(60%)'
      const textoDica1 = document.getElementById('dica')
      if (numeroSorteado % 2 == 0) {
        textoDica1.innerHTML = '<b>Dica:</b> o número é par '
      } else {
        textoDica1.innerHTML = '<b>Dica:</b> o número é ímpar'
      }
      break
    case 0:
      const vida3 = document.querySelector('#vida3')
      vida3.src = 'images/vida.gif'
      vida3.style.scale = '105%'
      vida3.style.filter = 'grayscale(0%)'
      vida3.style.opacity = '0.8'
      vida3.style.filter = 'saturate(60%)'
      break

    default:
      alert('erro')
  }
}

function errou() {
  const correto = document.querySelector('.acertou')
  const main = document.querySelector('main')
  const titulo = document.querySelector('#titulo-resposta')
  const texto = document.querySelector('#texto-resposta')
  const img = document.querySelector('#img-resposta')

  img.src = 'images/errou.gif'
  correto.style.top = '-540px'
  correto.style.width = '23em'
  correto.style.height = '24em'

  titulo.innerText = 'Você perdeu :('
  texto.innerHTML = 'O número sorteado foi ' + numeroSorteado
  main.classList.add('blur')
  correto.style.opacity = 1
  var btn = document.querySelector('.play-again')
  btn.addEventListener('click', function () {
    location.reload()
  })
}
