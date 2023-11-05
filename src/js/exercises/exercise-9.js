/* 
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 101));
}

let min = Math.min(...array);
let max = Math.max(...array);

console.log("Array generado: " + array);
console.log("El número mínimo es: " + min);
console.log("El número máximo es: " + max);

showContent(9, "Array generado: " + array);
showContent(9, "El número mínimo es: " + min);
showContent(9, "El número máximo es: " + max);