let catalogo = {
  nomeFilme: [],
  posterFilme: [],
  getFilmes: function () {
    for (const i in this.nomeFilme) {
      document.write('<img class= posterFilme src=' + this.posterFilme[i] + '>')
      document.write('<p class= nomeFilme>' + this.nomeFilme[i] + '</p>')
    }
  },
  setFilmes: function (nome, poster) {
    this.nomeFilme.push(nome)
    this.posterFilme.push(poster)
  }
}

catalogo.setFilmes(
  'Yesterday',
  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9eKMZn4kI1sHDuWD8NUry234ZCmfxrB_gubLD_Zn5mox-kJXa'
)
catalogo.setFilmes(
  'A chegada',
  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTt2dzvBs0FkqzxitH8o2X-t52hPQ28-FMkfgp9b46BZQaBmGuF'
)

catalogo.setFilmes(
  'Escola de Rock',
  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0554fwGDNd3p46TRrGEvl-cc0zDmJW2hAVSeUw29fz5sZcmRu'
)
catalogo.getFilmes()
