var carta1 = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  },
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
};

var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  },
  imagem: "https://ironstudios.vteximg.com.br/arquivos/ids/314491-1000-1000/257014_0.jpg?v=637955044723270000"
};

var carta3 = {
  nome: "Shiryu de dragão",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  },
  imagem:"https://img.elo7.com.br/product/zoom/2B30902/camiseta-shiryu-de-dragao-fullprint-nerd.jpg"
};


var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador


function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)

  while(numeroCartaMaquina == numeroCartaJogador){
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  
  cartaJogador = cartas[numeroCartaJogador]

  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  exibirCartaJogador();
}



function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");


  for(var i =0; i<radioAtributos.length; i++){
    if(radioAtributos[i].checked == true){
      return radioAtributos[i].value
    } 

  }

  

}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  if(atributoSelecionado == undefined){
    alert("Selecione um atributo")
    
  }else{

    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
   
        if(valorCartaJogador > valorCartaMaquina){
          elementoResultado.innerHTML = "<p class='resultado-final'> Você venceu! </p>"
        }
        else if(valorCartaMaquina > valorCartaJogador){
          elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu, a carta da máquina é maior</p>"
        }
        else if(valorCartaJogador == valorCartaMaquina){
          elementoResultado.innerHTML = "<p class='resultado-final'>Empatou<p>"
        }
    }
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina()
  }

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:inherit; height:inherit; position:absolute">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ""
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width:inherit; height:inherit; position:absolute">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ""
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}