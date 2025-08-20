// Ejercicio: Simulador de clima
// Crear un programa que simule un clima basado en la temperatura actual.
// El programa debe pedir al usuario la temperatura actual y mostrar un mensaje indicando si hace frío, calor o si está templado.
// La lógica es la siguiente:
// - Si la temperatura es menor a 10 grados, mostrar "Hace frío"
// - Si la temperatura está entre 10 y 20 grados, mostrar "Está templado"
// - Si la temperatura está entre 20 y 30 grados, mostrar "Hace calor"
// - Si la temperatura es mayor a 30 grados, mostrar "Hace mucho calor"

// Importa la función ask para leer entradas del usuario desde consola.
const { ask } = require('../helpers/input.js');

async function main() {
  // Pide la temperatura como texto y la convierte a número con Number().
  // Si el usuario escribe algo no numérico, el resultado será NaN.
  const temperatura = Number(await ask("¿Cuál es la temperatura actual?"));

  // Caso 1: temperaturas menores a 10 → "Hace frío".
  // Nota: si temperatura es NaN, esta comparación es falsa y no entra aquí.
  if (temperatura < 10) {
    console.log("Hace frío");
    // Caso 2: entre 10 (incluido) y 20 (excluido) → "Está templado".
  } else if (temperatura >= 10 && temperatura < 20) {
    console.log('Está templado');
    // Caso 3: entre 20 (incluido) y 30 (excluido) → "Hace calor".
  } else if (temperatura >= 20 && temperatura < 30) {
    console.log('Hace calor');
    // Caso 4: mayor a 30 → "Hace mucho calor".
  } else if (temperatura >= 30) {
    console.log('Hace mucho calor');
  }
  // Nota importante:
  // - Si temperatura es NaN, no se imprime nada (todas las comparaciones son falsas).
}

// Inicia el programa llamando a la función principal.
main();
