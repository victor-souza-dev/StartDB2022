class Forca {
  constructor(word) {
    this._word = word.toLowerCase();
    this._state = 'aguardando chute'; // 2. O jogo deve iniciar com o estado aguardando chute.
    this._kickedLetters = [];
    this._filteredLetters = [];
    this._lifes = 6; // 1. O jogo deve iniciar com 6 vidas
    this._camouflagedWord = ''.padEnd(this._word.length, '_');
  }

  // Getters
  get word() {
    return this._word;
  }

  get state() {
    return this._state;
  }

  get kickedLetters() {
    return this._kickedLetters;
  }

  get filteredLetters() {
    return this._filteredLetters;
  }

  get lifes() {
    return this._lifes;
  }

  get camouflagedWord() {
    return this._camouflagedWord;
  }

  // Setters

  set state(state) {
    this._state = state;
  }

  set kickedLetters(letter) {
    this._kickedLetters.push(letter);
  }

  set filteredLetters(letter) {
    this._filteredLetters.push(letter);
  }

  set lifes(lifes) {
    this._lifes = lifes;
  }

  set camouflagedWord(word) {
    this._camouflagedWord = word;
  }

  // Métodos

  chutar(letter) {
    this.kickedLetters = letter; // 5. Toda chamada ao método chutar deve registrar a letra em letrasChutadas
    // 3. Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
    if (letter.length > 1 || letter.length < 1 || !isNaN(letter)) {
      return console.log('Caractere inválido!');
    } else {
      letter = letter.toLowerCase();
      let resultLetter = this.word.includes(letter);
      // 7. Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição.
      if (resultLetter) {
        let wordDecript = descriptWord(this.camouflagedWord, this.word, letter);
        this.camouflagedWord = wordDecript;
        // 9. Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para ganhou.
        if (wordDecript == this.word && this.lifes > 0) {
          this.state = resultLetter;
        }
      }
      //6. Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
      else {
        // 4. Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
        if (!this.filteredLetters.includes(letter)) {
          this.filteredLetters.push(letter);
          this.lifes--;
        } else {
          console.log('Letra repetida, tente outra.');
        }
        // 8. Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para perdeu.
        if (this.lifes === 0) {
          this.state = resultLetter;
        }
      }
    }
  }

  buscarEstado() {
    switch (this.state) {
      case true:
        return 'ganhou';
      case false:
        return 'perdeu';
      default:
        break;
    }
  }

  buscarDadosDoJogo() {
    return `
    Letras Chutadas: ${this.kickedLetters}
    Vida: ${this.lifes}
    Palavra: ${primaryLetterUpperCase(this.camouflagedWord)}
    `;
  }
}

// Funções

function descriptWord(camouflagedWord, word, letter) {
  let arrayWord = camouflagedWord.split('');
  var arrayLetters = [];
  var i = word.indexOf(letter);
  while (i != -1) {
    arrayLetters.push(i);
    i = word.indexOf(letter, i + 1);
  }
  arrayLetters.map(position => {
    arrayWord[position] = letter;
  });
  return (camouflagedWord = arrayWord.join(''));
}

function primaryLetterUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = Forca;
