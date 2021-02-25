//variáveis ator
let xAtor = 235;
let yAtor = 368;
let vidas = 3;
let vivo = true;
let pontos = 0;

function mostraAtor() {
  if (vivo) {
    image(imagemAtor,xAtor,yAtor,30,30)
  }
}

function mostraVidas() {
  image(imagemVidas,440,370,20,20);
  textSize(16);
  stroke(0);
  fill(0);
  text("=",465,385);
  text(vidas,480,385);
}

function movimentaAtor() {
  if (vivo) {
    if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yAtor += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
      xAtor -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      xAtor += 3;
    }
    if (yAtor > 368) {
      yAtor -= 3;
    }
    if (yAtor > 340 && xAtor > 406) {
      yAtor -= 3;
      xAtor -= 3;
    }
  }
  
}

function retornaAtor() {
  xAtor = 235;
  yAtor = 368;
}

function colisao(x,y) {
  if(yAtor - 15 <= y + 13 &&
     yAtor + 15 >= y - 13 &&
     xAtor - 15 <= x + 31 &&
     xAtor + 15 >= x - 12) {
      vidas -= 1;
      somColisao.play();
      retornaAtor();
  } 
}

function atravessou() {
  for (i = 0; i < imagemCarros.length; i ++) {
    if (yAtor < 5) {
    velCarros[0] = velCarros[0] * 1.1;
    velCarros[1] = velCarros[1] * 1.1;
    velCarros[2] = velCarros[2] * 1.1;
    velCarros[3] = velCarros[3] * 1.1;
    velCarros[4] = velCarros[4] * 1.1;
    velCarros[5] = velCarros[5] * 1.1;
    pontos += 1;
    somPonto.play();
    retornaAtor();
    }
  }
}

function gameOver() {
  if(vidas === 0) {
    image(imagemGameOver,150,100,200,200);
    vivo = false;
    somGameOver.play();
  }
}

function mostraPontos() {
  stroke(255,240,60);
  fill(255,240,60);
  textSize(25);
  text(pontos,20,26)
}
