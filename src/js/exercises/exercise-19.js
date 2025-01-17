/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

function contarLetras(cadena) {
    const contador = {};
  
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i].toLowerCase();
      if (letra.match(/[a-z]/)) {
        if (contador[letra]) {
          contador[letra] += 1;
        } else {
          contador[letra] = 1;
        }
      }
    }
  
    return contador;
  }
  

  const texto = "Hello world";
  const resultado = contarLetras(texto);
  console.log(resultado);