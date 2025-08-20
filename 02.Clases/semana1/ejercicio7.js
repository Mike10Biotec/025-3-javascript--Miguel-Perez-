// Clase 3: Lógica con Condicionales
// Importa la función ask para leer entradas por consola.
const { ask } = require('../helpers/input.js');

async function main() {
  // Pide un número al usuario (string) y lo convierte a Number.
  // Si la entrada no es numérica, Number(...) dará NaN.
  const number = Number(await ask("Ingresa un número:"));

  // Caso 1: no es múltiplo de 3 NI de 5.
  // number % 3 !== 0 significa "el residuo al dividir entre 3 no es 0" ⇒ no es múltiplo de 3.
  // number % 5 !== 0 significa "el residuo al dividir entre 5 no es 0" ⇒ no es múltiplo de 5.
  // Nota: si number es NaN, (NaN !== 0) es true, por lo que caerá aquí.
  if (number % 3 !== 0 && number % 5 !== 0) {
    console.log('No es múltiplo de 3 o 5');
    // Caso 2: es múltiplo de 3 pero NO de 5.
  } else if (number % 3 === 0 && number % 5 !== 0) {
    console.log('Es múltiplo de 3');
    // Caso 3: es múltiplo de 5 pero NO de 3.
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log('Es múltiplo de 5');
    // Caso 4 (resto de escenarios): es múltiplo de 3 Y de 5 a la vez.
    // Ej.: 15, 30, 45... y también 0 (porque 0 % n === 0).
  } else {
    console.log('Es múltiplo de 3 y 5');
  }

}

// Llama a la función principal para ejecutar el flujo.
main();