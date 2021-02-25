function setup() {
  createCanvas(500, 400);
}

function draw() {
  somTrilha.play();
  background(imagemEstrada);
  mostraAtor();
  mostraVidas();
  mostraPontos();
  mostraCarro(imagemCarros[0],xCarros[0],yCarros[0]);
  mostraCarro(imagemCarros[1],xCarros[1],yCarros[1]);
  mostraCarro(imagemCarros[2],xCarros[2],yCarros[2]);
  movimentaAtor();
  movimentaCarros();
  atravessou();
  colisao(xCarros[0],yCarros[0]);
  colisao(xCarros[1],yCarros[1]);
  colisao(xCarros[2],yCarros[2]);
  colisao(xCarros[3],yCarros[3]);
  colisao(xCarros[4],yCarros[4]);
  colisao(xCarros[5],yCarros[5]);
  gameOver();
}