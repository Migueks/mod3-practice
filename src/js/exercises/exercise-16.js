/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

function siglo(year) {
    return Math.ceil(year / 100);
}

// Ejemplo
const year = 1905;
console.log(`El año ${year} pertenece al siglo ${siglo(year)}`);