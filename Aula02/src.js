function Converter() {
  const valor = parseFloat(document.querySelector('#valor').value)

  const dolar = valor / 5.25
  const real = valor * 5.25

  document.querySelector('#Valor-Dolar').innerHTML = dolar.toFixed(2)
  document.querySelector('#Valor-Real').innerHTML = real.toFixed(2)
}
