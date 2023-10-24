/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

const text = "texto de ejemplo ejercicio 3";
const vowels = "aeiouáéíóú";
let number = 0;

for (let i=0; i<text.length; i++) {
    if (vowels.includes(text.charAt(i))) {
        number++;
    }
}

showContent(3, `Number of vowels is ${number}`);