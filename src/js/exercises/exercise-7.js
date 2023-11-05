/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

function formatText(text) {
    return text.toLowerCase().replaceAll(" ","");
}

function removeAccents(text) {
    const accents = "áéíóúÁÉÍÓÚ";
    const vowels = "aeiouAEIOU";

    for (let i = 0; i< accents.length; i++) {
        if (text.includes(accents.charAt(i))) {
            text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
        }
    }
    return text
}

function reverseString(text) {
    let result = "";

    for (let i = text.length - 1; i >= 0; i--) {
        result += text.charAt(i);
    }
    return result;
}

function isPalindrome2(text) {
    text = formatText(text);
    text = removeAccents(text);
    return text === reverseString(text);
}

const text = 'Dábale arroz a la zorra el abad';
console.log(isPalindrome2(text));
// showContent(7, isPalindrome2(text)); NO ME FUNCIONA!!