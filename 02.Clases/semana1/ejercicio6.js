// Día de la semana según número
// Función que devuelve el día de la semana según un número del 1 al 7
// Ejercicio: Crear un programa que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 = Lunes, 2 = Martes, etc.).

// Importa la función ask desde el helper de entrada
const { ask } = require('../helpers/input.js');

async function main() {
  // Pide un número al usuario, lo convierte a Number.
  // Si la entrada no es numérica, el resultado será NaN.
  const dia = Number(await ask("Ingresa un número del 1 al 7:"));
  // Arreglo con los nombres de los días (índices 0..6).
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  // Verifica que el número esté en el rango 1..7 (ambos inclusive).
  // Nota:
  // - Si dia es NaN, esta condición es falsa y caerá en el else.
  // - Si dia es decimal (p. ej., 1.5), 1.5 >= 1 && 1.5 <= 7 es true, pero el índice 1.5 no existe (retornará undefined).
  if (dia >= 1 && dia <= 7) {
    // Accede al índice correspondiente restando 1 (porque el arreglo inicia en 0).
    // Para decimales válidos por la condición, 'diasSemana[dia - 1]' dará undefined.
    console.log(diasSemana[dia - 1]);
  } else {
    // Mensaje cuando está fuera de rango o cuando es NaN.
    console.log('NO es un número válido ☠️');
  }
}

// Llama a la función principal para ejecutar el flujo.
main();