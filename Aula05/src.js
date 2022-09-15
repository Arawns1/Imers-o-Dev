
var filmes = []

var indiceFilmeSelecionado = 0;



function menuFilme(index){
  indiceFilmeSelecionado = index;
  var menu = document.querySelector(".menu");
  menu.innerHTML += '<img src="'+ filmes[index] +'">'
  menu.style.display = "flex"

}

function adicionarFilme(){
  
  var input = document.getElementById("inputFilme").value;

  if(input.endsWith('.jpg') ||input.endsWith('.png') ){
    filmes.push(input)
  }
  else{
    alert("Formato de imagem inválido!")
  }
  
  
atualizaLista();

  document.getElementById("inputFilme").value = '';
}

function atualizaLista(){
  document.getElementById("film-list").innerHTML = ' '
  for(var i in filmes){
    document.getElementById("film-list").innerHTML += '<img onclick="menuFilme(' + i + ') " src="' + filmes[i] + '">'
  }
}

function removerFilme(){
  const index = indiceFilmeSelecionado
if (index > -1) {
  filmes.splice(index, 1);
}
atualizaLista()
var menu = document.querySelector(".menu");
menu.style.display = "none "
}






/*
var i = 0;

function adicionarFilme() {
  var input = document.getElementById("filme").value;
  if(input.endsWith(".jpg") || input.endsWith(".png")){
    listarFilmesNaTela(input)
  }
  else{
    alert("Formato de inválido imagem!")
    console.error("Formato de inválido imagem!")
  }
 
}

function listarFilmesNaTela(input){
  i++
  var elementoFilmeFavorito = "<img src=" + input + ">";
  var id = "<p>" + i + "</p>"
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoFilmeFavorito + id;
  document.getElementById("filme").value = ' ';
}
*/