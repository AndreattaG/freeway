//variáveis carros
let yCarros = [45,102,156,218,270,325];
let xCarros = [570,730,550,820,750,760];
let velCarros = [3.8,3,3.4,4,3.2,2.9]

//CRIAR DIFICULDADE CLICÁVEL MULTIPLICANDO A VELOCIDADE DOS CARROS POR 1.5

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i],xCarros[i],yCarros[i],50,30)
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velCarros[i];
      if (xCarros[i] < -50) {
      xCarros[i] = 550;
    }
  }
}