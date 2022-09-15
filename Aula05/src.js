
var filmes = []
//var i = 0;


function menuFilme(index){
  var menu = document.querySelector(".menu");
  menu.innerHTML += '<img src="'+ filmes[index] +'">'
 // menu.innerHTML += '<p>Índice: ' + index +'</p>'
  menu.style.display = "flex"
}

function adicionarFilme(){
  document.getElementById("film-list").innerHTML = ' '
  var input = document.getElementById("inputFilme").value;
  filmes.push(input)
  
  for(var i in filmes){
    document.getElementById("film-list").innerHTML += '<img onclick="menuFilme(' + i + ')" src="' + filmes[i] + '">'
  }

 // i++

  document.getElementById("inputFilme").value = '';
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