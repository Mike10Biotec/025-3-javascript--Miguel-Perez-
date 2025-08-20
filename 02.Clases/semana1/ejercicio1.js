// Importa la función ask desde el helper de entrada (ruta relativa a este archivo).
const { ask } = require('../helpers/input.js');

/**
 * Flujo principal: pide nombre, edad y comida favorita; valida y muestra un resumen.
 */
async function main() {
  // Pide el nombre; asegura que sea string y elimina espacios al inicio/fin.
  const name = String(await ask('¿Cómo te llamas? ')).trim();

  // Pide la edad como texto (string).
  const ageText = await ask('¿Cuántos años tienes? ');
  // Convierte la edad a número. Si no es convertible, resultará en NaN.
  const age = Number(ageText);

  // Valida que la edad sea un número válido (no NaN).
  if (Number.isNaN(age)) {
    console.log('Entrada inválida: la edad debe ser un número.');
    return; // Termina la ejecución temprano si la edad no es válida.
  }

  // Pide la comida favorita; la normaliza a string y quita espacios.
  const food = String(await ask('¿Cuál es tu comida favorita? ')).trim();

  // Muestra el mensaje final usando template literals por legibilidad.
  console.log(`Hola ${name}, tienes ${age} años y tu comida favorita es: ${food}`);
}

// Invoca la función principal para iniciar el programa.
main();