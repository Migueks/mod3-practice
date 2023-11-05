/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/

function fibonacci(n) {
    if (n <= 1) return n;
  
    let a = 0;
    let b = 1;
    let fib = 0;
  
    for (let i = 2; i <= n; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
  
    return fib;
  }
  
  const numero = 20;
  const resultado = fibonacci(numero);
  console.log(`El vigésimo número de la serie de Fibonacci es ${resultado}`);