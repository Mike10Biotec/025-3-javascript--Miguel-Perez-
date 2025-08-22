// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
    let contador = 1;
    let limite = 100;


    while(contador <= limite) {
        if(contador % 2 === 0) {
            console.log(`El numnero ${contador} es par `)
        }
        contador++
    }

    
}

main();
