function Converter() {
  var valor = parseFloat(document.querySelector('#valor').value)
  var card = document.querySelector('.container')

  const dolar = valor / 5.25
  const real = valor * 5.25

  if (valor != 1) {
    var fraseReal =
      '<b>' + valor + '  dolares </b> são <b>R$ ' + real.toFixed(2) + '</b>'
    var fraseDolar =
      '<b>' + valor + ' reais </b> são <b>$' + dolar.toFixed(2) + '</b>'
    document.querySelector('.container').style.opacity = 1
  } else {
    var fraseReal =
      '<b>' + valor + ' dolar </b> é <b>R$' + real.toFixed(2) + '</b>'
    var fraseDolar =
      '<b>' + valor + '  real </b> é <b> $' + dolar.toFixed(2) + '</b>'
    document.querySelector('.container').style.opacity = 1
  }

  if (isNaN(valor)) {
    var fraseReal = ''
    var fraseDolar = ''
    document.querySelector('.container').style.opacity = 0
  }

  document.querySelector('#Valor-Dolar').innerHTML = fraseDolar
  document.querySelector('#Valor-Real').innerHTML = fraseReal
}
