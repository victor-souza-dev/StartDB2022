function Palavras() {
  let array = [
    'Abacaxi',
    'Limao',
    'Uva',
    'Cereja',
    'Pedra',
    'Madeira',
    'Ligeiro',
    'Lisongeado',
    'Verme',
    'Incapaz',
    'Relutante',
    'Banal',
    'Construtivo',
    'Pressuposto',
    'Esperto',
  ];
  let random = Randomizando(array);
  return random;
}

function Randomizando(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = Palavras;
