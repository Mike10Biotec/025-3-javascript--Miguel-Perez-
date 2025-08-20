// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

/**
 * Calcula diferencia exacta en días entre dos fechas.
 * @param {Date} actualDate Fecha actual.
 * @param {Date} birthDate Fecha de nacimiento.
 * @returns {number} Días completos transcurridos.
 */
function diffDays(actualDate, birthDate) {
  // Diferencia en milisegundos (Date se convierte a ms).
  const diffMs = actualDate - birthDate;
  // 1000 ms * 60 s * 60 min * 24 h = ms por día
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Redondea hacia abajo a días completos.
  const days = Math.floor(diffMs / MS_PER_DAY);
  return days; // Retorna los días.
}

/**
 * Calcula diferencia en meses de calendario entre dos fechas.
 * Regla: resta meses (año*12 + mes) y ajusta si el día actual aún no alcanza el día de nacimiento.
 * @param {Date} actualDate
 * @param {Date} birthDate
 * @returns {number} Meses completos transcurridos.
 */
function diffMonths(actualDate, birthDate) {
  // Meses totales entre años y meses (0-11).
  let months =
    (actualDate.getFullYear() - birthDate.getFullYear()) * 12 +
    (actualDate.getMonth() - birthDate.getMonth());
  // Si el día del mes actual todavía no llega al día de nacimiento, aún no se cumple el mes.
  if (actualDate.getDate() < birthDate.getDate()) {
    months -= 1;
  }
  return months;
}

/**
 * Calcula diferencia en años de calendario entre dos fechas.
 * Regla: resta años y ajusta si aún no pasó el cumpleaños de este año.
 * @param {Date} actualDate
 * @param {Date} birthDate
 * @returns {number} Años completos transcurridos.
 */
function diffYears(actualDate, birthDate) {
  let years = actualDate.getFullYear() - birthDate.getFullYear();
  // Si el mes actual es menor al de nacimiento, o igual pero el día actual es menor, no se cumplió el año.
  const monthA = actualDate.getMonth();
  const monthB = birthDate.getMonth();
  if (monthA < monthB || (monthA === monthB && actualDate.getDate() < birthDate.getDate())) {
    years -= 1;
  }
  return years;
}

async function main() {
  // Crea la fecha actual (momento en que corre el programa).
  const actualDate = new Date();

  // Pide día, mes y año como texto y convierte a Number.
  const birthDateDayText = await ask('¿Cuál es el día de tu fecha de nacimiento? ');
  const birthDateDay = Number(birthDateDayText); // Puede resultar en NaN.

  // Validaciones básicas de número y rango humano razonable.
  if (!Number.isInteger(birthDateDay) || birthDateDay < 1 || birthDateDay > 31) {
    console.log('Día inválido. Ingresa un número entre 1 y 31.');
    return;
  }

  const birthDateMonthText = await ask('¿Cuál es el mes de tu fecha de nacimiento? ');
  const birthDateMonth = Number(birthDateMonthText);

  if (!Number.isInteger(birthDateMonth) || birthDateMonth < 1 || birthDateMonth > 12) {
    console.log('Mes inválido. Ingresa un número entre 1 y 12.');
    return;
  }

  const birthDateYearText = await ask('¿Cuál es el año de tu fecha de nacimiento? ');
  const birthDateYear = Number(birthDateYearText);

  if (!Number.isInteger(birthDateYear) || birthDateYear < 1900 || birthDateYear > actualDate.getFullYear()) {
    console.log(`Año inválido. Ingresa un número entre 1900 y ${actualDate.getFullYear()}.`);
    return;
  }

  // Construye la fecha de nacimiento con índices de mes 0-11.
  const birthDate = new Date(birthDateYear, birthDateMonth - 1, birthDateDay);

  // Verifica que la fecha sea válida (Date no se “autoajustó” a otro día/mes).
  const dateValid =
    birthDate.getFullYear() === birthDateYear &&
    birthDate.getMonth() === birthDateMonth - 1 &&
    birthDate.getDate() === birthDateDay;

  if (!dateValid) {
    console.log('Fecha inválida: ese día no existe en el mes indicado (revisa febrero/meses de 30 días).');
    return;
  }

  // Evita fechas futuras.
  if (birthDate > actualDate) {
    console.log('La fecha de nacimiento no puede ser en el futuro.');
    return;
  }

  // Muestra resultados con funciones puras.
  console.log('Has vivido aproximadamente:');
  console.log(`${diffDays(actualDate, birthDate)} días.`);
  console.log(`${diffMonths(actualDate, birthDate)} meses.`);
  console.log(`${diffYears(actualDate, birthDate)} años.`);
}

// Ejecuta el programa.
main();