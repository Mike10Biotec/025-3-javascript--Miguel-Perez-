# Reto 07 — Convertidor de Temperatura (C ↔ F)

Crea un programa de consola que:

1. Pregunte primero el tipo de temperatura que se va a calcular: C o F.
2. Pida luego el número de la temperatura.
3. Muestre el resultado en grados Celsius y en grados Fahrenheit.

No copies/pegues soluciones completas; sigue el paso a paso y completa `index.js`.

Archivos del reto:

- Código: `01.Retos/reto-07-convertidor-temperatura/index.js`
- Ayuda para leer por consola: `01.Retos/reto-07-convertidor-temperatura/helpers/input.js`

## Fórmulas

- Celsius a Fahrenheit: F = C × 9/5 + 32
- Fahrenheit a Celsius: C = (F − 32) × 5/9

## Reglas

- Primero pregunta por el tipo (C o F).
- Después pide la temperatura numérica.
- Muestra SIEMPRE ambos valores: en °C y en °F (conversión + el valor original).
- Acepta C/c y F/f (no distingas mayúsculas/minúsculas).
- Si hay entradas inválidas (tipo distinto a C/F o valor no numérico), muestra un mensaje y termina.

## Paso a paso sugerido

1. Leer el tipo

- Lee: "¿Qué tipo de temperatura ingresarás? (C/F)".
- Normaliza: trim + toUpperCase.
- Valida: debe ser 'C' o 'F'. Si no, muestra "Tipo inválido: usa C o F" y termina.

2. Leer la temperatura

- Lee: "Ingresa la temperatura:".
- Convierte con Number().
- Si es NaN, muestra "Temperatura inválida: ingresa un número" y termina.

3. Calcular ambos valores

- Si tipo === 'C': c = valor; f = c × 9/5 + 32
- Si tipo === 'F': f = valor; c = (f − 32) × 5/9

4. Mostrar resultados

- Imprime ambos: "Celsius: X°C" y "Fahrenheit: Y°F"
- Opcional: redondea con toFixed(1) o toFixed(2) al mostrar.

5. Estructura (opcional)

- Funciones pequeñas: isValidType(tipo), toF(c), toC(f).
- Usa "early return" para errores.

## Ejemplos de ejecución

```text
¿Qué tipo de temperatura ingresarás? (C/F): c
Ingresa la temperatura: 25
Celsius: 25 °C
Fahrenheit: 77 °F
```

```text
¿Qué tipo de temperatura ingresarás? (C/F): F
Ingresa la temperatura: 32
Celsius: 0 °C
Fahrenheit: 32 °F
```

## Casos de prueba mínimos

- Tipo C, temp 0 → C=0, F=32
- Tipo C, temp 100 → C=100, F=212
- Tipo F, temp 32 → C=0, F=32
- Tipo F, temp 212 → C=100, F=212
- Tipo f (minúscula), temp 50 → Debe funcionar como 'F'
- Tipo X → Error por tipo inválido
- Tipo C, temp "hola" → Error por número inválido
- Borde: C = −40 → F = −40 (coinciden)

## Errores comunes y cómo resolverlos

1. Node no inicializado / scripts de npm

- Al intentar `npm start` aparece: "Missing script: start".

  - Solución: añade en `package.json` del reto:
    ```json
    {
      "scripts": {
        "start": "node index.js"
      }
    }
    ```
  - Alternativa: ejecuta directo sin npm: `node index.js`.

- No tienes `package.json` en la carpeta del reto y quieres usar npm:
  - Crea uno rápido:
    ```sh
    npm init -y
    ```
  - Luego agrega el script "start" como arriba.

2. No existe el helper `helpers/input.js` o la ruta está mal

- Error típico: "Cannot find module './helpers/input.js'" o similar.

  - Verifica que el archivo exista en `01.Retos/reto-07-convertidor-temperatura/helpers/input.js`.
  - Verifica el require en `index.js`:
    ```js
    const { ask } = require("./helpers/input.js"); // ruta relativa desde index.js
    ```

- Si no tienes helper, crea uno simple:

  ```js
  // filepath: 01.Retos/reto-07-convertidor-temperatura/helpers/input.js
  const readline = require("readline");

  function ask(questionText) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(questionText, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }

  module.exports = {
    ask,
  };
  ```

3. Ruta al ejecutar

- Si ves "Cannot find module 'index.js'":
  - Asegúrate de estar dentro de `01.Retos/reto-07-convertidor-temperatura` al ejecutar.
  - O ejecuta con ruta relativa: `node 01.Retos/reto-07-convertidor-temperatura/index.js`.

## Pistas (sin código)

- Normaliza el tipo con trim + toUpperCase.
- Valida con ifs simples ('C' o 'F').
- Convierte la temperatura con Number() y verifica NaN.
- Calcula y muestra ambos valores siempre.

## Plantilla comentada (para guiar, sin solución)

```js
const { ask } = require("./helpers/input");

async function main() {
  // 1) Pregunta tipo (C/F) → normaliza a mayúsculas y valida
  // 2) Pregunta temperatura → convierte a Number y valida NaN
  // 3) Según el tipo, calcula la conversión
  // 4) Imprime ambos valores (opcional: formatea con toFixed)
}

main();
```

## Cómo ejecutar

```sh
# 1) Entra a la carpeta del reto
cd 01.Retos/reto-07-convertidor-temperatura

# 2) Ejecuta con Node (sin npm)
node index.js
```

Opcional con npm (si quieres un script):

```sh
# Inicializa (si no tienes package.json)
npm init -y

# Agrega "start": "node index.js" en package.json y luego:
npm start
```

## Criterios de evaluación

- Flujo correcto (tipo → número → ambos resultados).
- Validaciones claras (tipo y número).
- Fórmulas correctas.
- Mensajes comprensibles y ordenados.
- Código legible (nombres claros; funciones pequeñas si las usas).

## Para estudiantes avanzados

Si este reto te resulta sencillo, prueba estos desafíos:

### En línea (CodeWars)

1. **[Temperature Converter (7 kyu)](https://www.codewars.com/kata/convert-between-celsius-and-fahrenheit)** - Compara tu solución con otras
2. **[Digital root (6 kyu)](https://www.codewars.com/kata/541c8630095125aba6000c00)** - Loops avanzados con recursión
3. **[Build Tower (6 kyu)](https://www.codewars.com/kata/576757b1df89ecf5bd00073b)** - Patrones con strings y espacios
4. **[Even or Odd (8 kyu)](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)** - Repaso del operador módulo
5. **[Grasshopper - Grade book (8 kyu)](https://www.codewars.com/kata/55cbd4ba903825f7970000f5)** - Condicionales con rangos

### Extensiones locales

1. **Multi-unidades**: Agrega Kelvin (K = C + 273.15) y Rankine (R = F + 459.67)
2. **Historial**: Permite varias conversiones y guarda el historial en un array
3. **Validaciones físicas**: Rechaza temperaturas bajo el cero absoluto (-273.15°C)
4. **Menú completo**: Sistema que no termine hasta que el usuario elija "salir"

### Reto ninja 🥷: Convertidor Universal Modular

Crea un sistema de conversión completo que maneje múltiples tipos de medidas con arquitectura profesional:

#### Funcionalidades objetivo:

- **Temperaturas**: Celsius, Fahrenheit, Kelvin, Rankine
- **Longitudes**: Metro, centímetro, kilómetro, pie, pulgada, milla
- **Pesos**: Gramo, kilogramo, libra, onza, tonelada
- **Volúmenes**: Litro, mililitro, galón, pinta, metro cúbico

#### Arquitectura sugerida:

```
convertidor-universal/
├── index.js                    // Menú principal y flujo de la app
├── modules/
│   ├── temperature.js          // Clase Temperature con todas las conversiones
│   ├── length.js               // Clase Length
│   ├── weight.js               // Clase Weight
│   └── volume.js               // Clase Volume
├── utils/
│   ├── input.js                // Helper para leer consola
│   ├── validator.js            // Funciones de validación centralizadas
│   └── formatter.js            // Formateo de números y unidades
└── data/
    └── conversions.js          // Factores de conversión y unidades válidas
```

#### Ejemplo de flujo esperado:

```text
=== CONVERTIDOR UNIVERSAL ===
1. Temperatura
2. Longitud
3. Peso
4. Volumen
5. Salir
Selecciona una opción: 1

=== CONVERSIÓN DE TEMPERATURA ===
Unidades disponibles: C, F, K, R
¿Desde qué unidad convertir?: C
Ingresa la temperatura: 25
¿A qué unidades convertir? (todas/específica): todas

Resultados:
• Celsius:    25.0°C
• Fahrenheit: 77.0°F
• Kelvin:     298.15K
• Rankine:    536.67°R

¿Otra conversión? (s/n): s
```

#### Criterios técnicos del reto ninja:

- **Modularidad**: Cada tipo de medida en su propio archivo/clase
- **Extensibilidad**: Fácil añadir nuevas unidades sin tocar código existente
- **Validaciones robustas**: Manejo de todas las entradas inválidas
- **Interfaz clara**: Menús informativos y resultados bien formateados
- **Persistencia**: Historial de conversiones guardado en memoria durante la sesión
- **Eficiencia**: Factores de conversión centralizados, no hardcodeados
