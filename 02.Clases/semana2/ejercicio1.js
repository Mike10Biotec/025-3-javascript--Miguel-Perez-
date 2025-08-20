const { ask } = require('../helpers/input.js');

async function saludar(nombre) {
  console.log(`Hola estimada(o): ${nombre}, espero que tengas un buen día...`);
}

async function main() {
  const personas = ["Ana", "Juan", "Karla", "María", "Pedro"];
  console.log("--------------------- Ascendente -----------------------");
  for (let i = 0; i < personas.length; i++) {
    saludar(personas[i]);
  }
  console.log("--------------------- Descendente -----------------------");
  for (let j = personas.length - 1; j >= 0; j--) {
    saludar(personas[j]);
  }

  let limite = Number(await ask('Hasta que número quieres contar: '));
  let x = 1;
  while (x <= limite) {
    console.log('contador actual: ', x);
    x++;
  }
}

main();