/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/

function convertirEnHashtag(cadena) {
    const palabras = cadena.split(" ");
    const palabrasCapitalizadas = palabras.map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1));
    const hashtag = "#" + palabrasCapitalizadas.join("");
    return hashtag;
  }
  
  
  const texto = "Programando en Javascript";
  const resultado = convertirEnHashtag(texto);
  showContent(18, (resultado));