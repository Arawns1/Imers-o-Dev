var numeroSorteado = parseInt(Math.random() * 11)
var vida = 3

function chutar() {
  const valor = document.getElementById('valorInput').value
  var valorTela = document.getElementById('numero-resultado')

  valorTela.innerHTML = numeroSorteado

  if (numeroSorteado == valor) {
    acertou()
  } else {
    vida--
    console.log(vida)
    perdeVida(vida)
    if (vida == 0) {
      errou()
    }
  }

  console.log(numeroSorteado)
}

function acertou() {
  const correto = document.querySelector('.acertou')
  const main = document.querySelector('main')
  const titulo = document.querySelector('#titulo-resposta')
  const texto = document.querySelector('#texto-resposta')
  var btn = document.querySelector('.play-again')

  titulo.innerText = 'Parabéns você acertou!'
  texto.innerHTML = 'O número sorteado foi ' + numeroSorteado
  main.classList.add('blur')
  correto.style.opacity = 1
  correto.style.top = '-450px'
  correto.style.width = '15em'
  correto.style.height = '22em'
  btn.style.width = '2em'
  btn.style.height = '3em'
  btn.addEventListener('click', function () {
    location.reload()
  })
}

function perdeVida(num) {
  console.log('num:' + num)
  switch (num) {
    case 2:
      const vida1 = document.querySelector('#vida1')
      vida1.src = 'images/vida.gif'
      vida1.style.scale = '105%'
      vida1.style.filter = 'grayscale(0%)'
      vida1.style.opacity = '0.8'
      vida1.style.filter = 'saturate(60%)'
      break
    case 1:
      const vida2 = document.querySelector('#vida2')
      vida2.src = 'images/vida.gif'
      vida2.style.scale = '105%'
      vida2.style.filter = 'grayscale(0%)'
      vida2.style.opacity = '0.8'
      vida2.style.filter = 'saturate(60%)'
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
  var btn = document.querySelector('.play-again')
  img.src = 'images/errou.gif'
  correto.style.top = '-450px'
  correto.style.width = '15em'
  correto.style.height = '22em'
  titulo.innerText = 'Você perdeu :('
  texto.innerHTML = 'O número sorteado foi ' + numeroSorteado
  main.classList.add('blur')
  correto.style.opacity = 1

  btn.style.width = '2em'
  btn.style.height = '3em'
  btn.addEventListener('click', function () {
    location.reload()
  })
}
