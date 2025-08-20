const { ask } = require('../helpers/input.js');

async function main() {
  let opcion = '';
  let frutas = [];

  while (opcion !== '3') {
    opcion = await ask(`¿Que deseas hacer? \n1. Agregar una fruta. \n2. Eliminar una fruta. \n3. Salir.\n`);

    if (opcion === '1') {
      let frutaNueva = await ask('¿Qué fruta deseas agregar?: ');
      frutas.push(frutaNueva);
      console.log('Fruta agregada: ', frutaNueva);
      console.log(`Frutas disponibles`, frutas);
    } else if (opcion === '2') {
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        let index = frutas.indexOf(frutaEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaEliminar} ha sido eliminada`);
        } else {
          console.log('Fruta no encontrada');
        }

        console.log('Frutas disponibles', frutas);
      }
    } else if (opcion === '3') {
      console.log('Gracias');
    } else {
      console.log('Opción inválida');
    }
  }
}

main();