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
  imagem:"https://static.wikia.nocookie.net/ssu/images/c/c9/Shiryu_AD_GB_card.png/revision/latest?cb=20181003024739"
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

  var imagens = document.getElementById("imagens")

  imagens.innerHTML += "<img src="+cartaJogador.imagem + ">"
  imagens.innerHTML += "<h2>Essa é sua carta! </h2>"
  imagens.innerHTML += "<h2>Ataque:"+ cartaJogador.atributos.ataque+"</h2>"
  imagens.innerHTML += "<h2>Defesa:"+cartaJogador.atributos.defesa+"</h2>"
  imagens.innerHTML += "<h2>Magia:"+cartaJogador.atributos.magia+"</h2>"

  console.log(cartaMaquina)
  console.log(cartaJogador)
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto;
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
          elementoResultado.innerHTML = "Você venceu!"
        }
        else if(valorCartaMaquina > valorCartaJogador){
          elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior"
        }
        else if(valorCartaJogador == valorCartaMaquina){
          elementoResultado.innerHTML = "Empatou"
        }
    }

  }


