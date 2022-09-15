/*
Exemplo utilizando classes

class pessoa {
    constructor(nome, vitorias, empates, derrotas, pontos){
      this.nome = nome;
      this.vitorias = vitorias;
      this.empates = empates;
      this.derrotas = derrotas;
      this.pontos = pontos;
    }
  
    getInfo(){
      return console.log("Nome: " + this.nome + "\nVitorias: " + this.vitorias + "\nEmpates: " + this.empates+ " \nDerrotas: " + this.derrotas + "\nPontos: " + this.pontos)
    }
   
  }
  
  var Carlos = new pessoa("Carlos", 10, 10, 20, 30)
  Carlos.getInfo()

*/




var Rafa = {
  nome: "Rafa",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0,
}

var Paulo = {
  nome: "Paulo",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0

}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return jogador.pontos = pontos
}


var jogadores = [Rafa, Paulo];


function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria()'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
    elemento += "</tr>";

  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  console.log(tabelaJogadores)
  tabelaJogadores.innerHTML = elemento;
}





console.log(jogadores)
calculaPontos(Rafa);
calculaPontos(Paulo);
exibeJogadoresNaTela(jogadores);