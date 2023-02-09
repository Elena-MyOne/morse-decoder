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

function decode(expr) {
    // write your solution here
    const letterLength = 10;
    const space = '**********';
    const encodedString = [];
    let result = [];

    for (let i = 0; i < expr.length; i += letterLength) {
        let letter = expr.slice(i, i + letterLength);
        encodedString.push(letter);
    }

    for (let j = 0; j < encodedString.length; j += 1) {
        let encodedValue = encodedString[j].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
        if (encodedValue === space) {
            result.push(' ');
        }
        result.push(MORSE_TABLE[encodedValue]);
    }

  return result.join('');
}

module.exports = {
    decode
}
