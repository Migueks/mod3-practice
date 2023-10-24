/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/

let number;

function Numbers(number) {
    if (number % 2 == 0) {
        return `El número ${number} es par`;
    }
    else {
        return `El número ${number} es impar`;
    }
} 

showContent(2, Numbers(4));