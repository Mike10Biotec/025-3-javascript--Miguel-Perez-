// Importa la función ask desde el helper de entrada (ruta relativa a este archivo).
const { ask } = require('../helpers/input.js');

/**
 * Verifica si el operador es válido usando ifs.
 * @param {string} op Operador ingresado por el usuario.
 * @returns {boolean}
 */
function isValidOperator(op) {
  // Si el operador es '+', es válido.
  if (op === '+') return true;
  // Si el operador es '-', es válido.
  if (op === '-') return true;
  // Si el operador es '*', es válido.
  if (op === '*') return true;
  // Si el operador es '/', es válido.
  if (op === '/') return true;
  // Cualquier otro símbolo no es válido.
  return false;
}

/**
 * Realiza la operación aritmética usando if/else.
 * Importante: División valida contra 0.
 * @param {number} a Primer número.
 * @param {number} b Segundo número.
 * @param {string} op Uno de: +, -, *, /
 * @returns {number} Resultado de la operación.
 * @throws {Error} Si el operador es inválido o si hay división entre 0.
 */
function calculate(a, b, op) {
  // Suma cuando el operador es '+'
  if (op === '+') {
    return a + b; // Retorna la suma de a y b.
  }
  // Resta cuando el operador es '-'
  if (op === '-') {
    return a - b; // Retorna la resta de a menos b.
  }
  // Multiplicación cuando el operador es '*'
  if (op === '*') {
    return a * b; // Retorna el producto de a por b.
  }
  // División cuando el operador es '/'
  if (op === '/') {
    // Valida que b no sea 0 para evitar división por cero.
    if (b === 0) throw new Error('No se puede dividir entre 0');
    return a / b; // Retorna el cociente de a entre b.
  }
  // Si no coincide con ningún operador permitido, lanza error.
  throw new Error('Operación no válida');
}

/**
 * Flujo principal: pide 2 números y un operador, valida, calcula y muestra el resultado.
 */
async function main() {
  // Pide el primer número como texto y lo convierte a Number.
  const num1 = Number(await ask('Ingresa el primer número: '));

  // Verifica que la conversión haya resultado en un número válido (no NaN).
  if (Number.isNaN(num1)) {
    console.log('Entrada inválida: el primer valor no es un número.'); // Mensaje de error amistoso.
    return; // Termina la ejecución tempranamente (early return).
  }

  // Pide el operador, lo convierte a string y elimina espacios extra al inicio/fin.
  const operador = String(await ask('Ingresa el operador que deseas usar (+, -, *, /): ')).trim();

  // Valida que el operador esté dentro de los permitidos.
  if (!isValidOperator(operador)) {
    console.log('Operación no válida. Usa uno de: +, -, *, /'); // Guía al usuario sobre opciones válidas.
    return; // Termina si el operador no es correcto.
  }

  // Pide el segundo número y lo convierte a Number.
  const num2 = Number(await ask('Ingresa el segundo número: '));

  // Verifica que el segundo valor sea un número válido.
  if (Number.isNaN(num2)) {
    console.log('Entrada inválida: el segundo valor no es un número.'); // Informa el error.
    return; // Termina si es inválido.
  }

  // Intenta calcular el resultado con los valores y el operador dados.
  const resultado = calculate(num1, num2, operador);
  console.log(`El resultado de la operación es: ${resultado}`); // Muestra el resultado.
}

// Invoca la función main que contiene el inicio del flujo del programa
main();