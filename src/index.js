const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BINARY = {
  '10': '.',
  '11': '-',
  '00': ''
};

const LETTER_LENGTH = 10;
const SPACE  = '**********';

function decode(expr) {
    const encodedString = [];

    for (let i = 0; i < expr.length; i += LETTER_LENGTH) {
        let letter = expr.substr(i, LETTER_LENGTH);
        encodedString.push(letter);
    }

    function binaryMorse(str) {
      return str
          .match(/.{2}/g)
          .map(pair => BINARY[pair])
          .join('');
  }

    const result = encodedString.map(item => {
      if (item === SPACE) {
          return ' ';
      }
      return MORSE_TABLE[binaryMorse(item)];
  });

    return result.join('');
}

module.exports = {
    decode
}
