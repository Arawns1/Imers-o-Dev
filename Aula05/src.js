
var filmes = []

function adicionarFilme(){
  var input = document.getElementById("inputFilme").value;
  var lista = document.getElementById("listafilme")
  filmes.push(input)

  console.log(filmes)

  


  
    
  

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