/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/



function getPositionInAlphabet(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const formattedText = text.toLowerCase().split(' ').join('');

    const positions = [];

    for (let i = 0; i < formattedText.length; i++) {
        const char = formattedText[i];
        const position = alphabet.indexOf(char) + 1;
        if (position > 0) {
            positions.push(position);
        }
    }

    return positions;
}

const string = 'Hoy es un buen día para programar';
const positions = getPositionInAlphabet(string);
showContent (8, getPositionInAlphabet(string));