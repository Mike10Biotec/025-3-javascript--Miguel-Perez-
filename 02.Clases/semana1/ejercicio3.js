// Importa la función ask desde el helper de entrada
const { ask } = require('../helpers/input.js');

async function main() {
  // Pide la edad al usuario (string) y la convierte a número con Number().
  // Si la entrada no es numérica, resultará en NaN (aquí no se valida NaN).
  const age = Number(await ask('¿Cuántos años tienes? '));
  // Pide el género. Se espera "masculino" o "femenino".
  const genere = await ask('¿Cuál es tu género? (masculino/femenino) ');

  // Caso 1: 12 años o menos y género femenino ⇒ "niña".
  // Incluye edades negativas o NaN por falta de validación previa.
  if (age <= 12 && genere === 'femenino') {
    console.log('Eres una niña');
    // Caso 2: 12 años o menos y género masculino ⇒ "niño".
  } else if (age <= 12 && genere === 'masculino') {
    console.log('Eres un niño');
    // Caso 3: mayor de 12 y menor de 18, y género NO es "masculino".
    // Esto incluye "femenino" pero también cualquier otro texto distinto a "masculino".
  } else if (age > 12 && age < 18 && genere !== 'masculino') {
    console.log('Eres una adolescente');
    // Caso 4: mayor de 12 y menor de 18, y género "masculino".
  } else if (age > 12 && age < 18 && genere === 'masculino') {
    console.log('Eres un adolescente');
    // Caso 5: mayor de 18 y menor de 60, género "masculino".
    // Nota: edad 18 exacto NO entra (usa > 18); edad 60 exacto tampoco entra (usa < 60).
  } else if (age > 18 && age < 60 && genere === 'masculino') {
    console.log('Eres un adulto masculino');
    // Caso 6: mayor de 18 y menor de 60, género "femenino".
  } else if (age > 18 && age < 60 && genere === 'femenino') {
    console.log('Eres un adulto femenino');
    // Caso 7: mayor de 60 y género "masculino".
    // Nota: edad 60 exacto NO entra (usa > 60).
  } else if (age > 60 && genere === 'masculino') {
    console.log('Eres un adulto mayor masculino');
    // Caso 8: mayor de 60 y género "femenino".
  } else if (age > 60 && genere === 'femenino') {
    console.log('Eres un adulto mayor femenino');
    // Caso por defecto: cualquier situación no contemplada (edades exactas 18 o 60, NaN, texto distinto en género, etc.).
  } else {
    console.log('No se encontraron resultados');
  }

}

// Llama a la función principal para ejecutar el flujo.
main();