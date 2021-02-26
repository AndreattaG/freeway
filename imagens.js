//imagens e sons do jogo

function preload() {
  imagemEstrada = loadImage("imgs/estrada.png");
  imagemAtor = loadImage("imgs/ator.png");
  imagemCarroVerde = loadImage("imgs/carro-1.png");
  imagemCarroPreto = loadImage("imgs/carro-2.png");
  imagemCarroAmarelo = loadImage("imgs/carro-3.png");
  imagemCarro4 = loadImage("imgs/carro-2.png");
  imagemCarro5 = loadImage("imgs/carro-1.png");
  imagemCarro6 = loadImage("imgs/carro-3.png");
  imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo,imagemCarroPreto, imagemCarroVerde, imagemCarroAmarelo];
  imagemGameOver = loadImage("imgs/gameOver.jpg");
  imagemVidas = loadImage("imgs/vidas.png");
  somTrilha = loadSound("sounds/trilha.mp3");
  somPonto = loadSound("sounds/ponto.wav");
  somColisao = loadSound("sounds/colisao.mp3");
  somGameOver = loadSound("sounds/gameOver.mp3");
}