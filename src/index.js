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
    let arr = expr.match(/.{10}/g);
    let decode_str = '';
    for (let i of arr) {
      if (i == '**********') {
        decode_str += ' ';
        continue;
      };
      let two_number_arr = i.match(/.{2}/g);
      let decode_sym = '';
      for (twos of two_number_arr) {
        if (twos == '00') {continue};
        if (twos == '10') {decode_sym += '.'};
        if (twos == '11') {decode_sym += '-'};
      }
      decode_str += MORSE_TABLE[decode_sym];
    }
    return decode_str;
}

module.exports = {
    decode
}