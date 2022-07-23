const readline = require('readline-sync');
const Palavras = require('./baseDeDadosPalavras');
const Forca = require('./forca');

const jogo = new Forca(Palavras());

while (!['perdeu', 'ganhou'].includes(jogo.buscarEstado())) {
  const chute = readline.question('Aguardando chute: \n');
  jogo.chutar(chute);
  console.log(jogo.buscarDadosDoJogo());
}

console.log(`Você ${jogo.buscarEstado()}!\n`);
