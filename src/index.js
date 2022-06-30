const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let numStr = expr
    let numArr = []
    let arrayWithoutZero = []
    let morseArr = ''

    for (let i = 0; i < numStr.length; i = i + 10) {
        numArr.push(numStr.slice(i, i + 10));
    }

    numArr.map((item, i) => {
        arrayWithoutZero.push(item.replace(/0[^1]/g, ''))
    })

    morseArr = arrayWithoutZero.join(' ').replace(/11/g, '-').replace(/10/g, '.').split(' ')

    let indexChar = [];

    morseArr.map((item, i) => {
        indexChar.push(Object.keys(MORSE_TABLE).indexOf(morseArr[i]))
    })


    let result = morseArr.join('')

    for (let k = 0; k < indexChar.length; k++) {
        Object.values(MORSE_TABLE)[indexChar[k]] ? result = result.replace(Object.keys(MORSE_TABLE)[indexChar[k]], Object.values(MORSE_TABLE)[indexChar[k]]) : null
    }

    return result.replace(/[**********]+/g, ' ')
}

module.exports = {
    decode
}