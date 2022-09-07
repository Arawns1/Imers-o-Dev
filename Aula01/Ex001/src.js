function CalcularMedia() {
  const nota1 = parseFloat(document.querySelector('#nota1').value)
  const nota2 = parseFloat(document.querySelector('#nota2').value)
  const nota3 = parseFloat(document.querySelector('#nota3').value)
  const nota4 = parseFloat(document.querySelector('#nota4').value)

  let media = (nota1 + nota2 + nota3 + nota4) / 4

  const resultado = (document.getElementById('media-resultado').innerHTML =
    media.toFixed(2))

  if (media >= 6) {
    document.getElementById('media-msg').innerHTML =
      'Parabéns, você passou acima da média!'
    document.getElementById('media-resultado').style.color = 'var(--verdeclaro)'
  } else if (media >= 8.5) {
    document.getElementById('media-msg').innerHTML = 'Você está arrasando!'
    document.getElementById('media-resultado').style.color = 'var(--verdeclaro)'
  } else {
    var resto = (6 - media).toFixed(2)
    document.getElementById('media-msg').innerHTML =
      'Você ficou abaixo da média por ' +
      resto +
      ' ponto(s) <br> :(  Vamos estudar!'

    document.getElementById('media-resultado').style.color = 'red'
  }
  document.getElementById('card-resultado').style.opacity = 1
}
