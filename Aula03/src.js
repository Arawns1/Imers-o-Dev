var numeroSorteado = parseInt(Math.random() * 11)

function chutar() {
  const valor = document.getElementById('valorInput').value
  var valorTela = document.getElementById('numero-resultado')

  valorTela.innerHTML = numeroSorteado

  if (numeroSorteado == valor) {
    alert('Acertou')
    valorTela.classList.toggle('blur', true)
  } else {
    alert('errou!')
  }

  console.log(numeroSorteado)
}
