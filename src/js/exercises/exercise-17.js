/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function esIsograma(cadena) {
    const letras = {};
    const cadenaMin = cadena.toLowerCase();

    for (let i = 0; i < cadenaMin.length; i++) {
        if (letras[cadenaMin[i]]) {
            return `La cadena '${cadena}' no es un isograma`;
        }
        letras[cadenaMin[i]] = true;
    }

    return `La cadena '${cadena}' es un isograma`;
}

const cadena = "hola mundo";
showContent(17, esIsograma(cadena));