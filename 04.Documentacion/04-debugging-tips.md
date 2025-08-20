# 🐛 Tips de Debugging - Cómo Encontrar y Solucionar Errores

El debugging (depuración) es una habilidad fundamental en programación. Esta guía te enseñará cómo encontrar, entender y solucionar errores en tu código.

## 🎯 Mindset de Debugging

### ✅ Mentalidad Correcta

- **Los errores son normales y esperados**
- **Cada error es una oportunidad de aprender**
- **Ser sistemático es mejor que hacer cambios aleatorios**
- **Pedir ayuda es inteligente, no una debilidad**

### 🔍 El Proceso de Debugging

1. **Reproduce** el error consistentemente
2. **Identifica** exactamente qué está fallando
3. **Aísla** la causa del problema
4. **Corrige** el código
5. **Verifica** que la solución funciona
6. **Prevé** errores similares en el futuro

---

## 🛠️ Herramientas de Debugging

### 1. 🌐 Chrome DevTools (Tu Mejor Amigo)

#### Abrir DevTools

- **Windows/Linux**: `F12` o `Ctrl+Shift+I`
- **Mac**: `Cmd+Option+I`
- **Clic derecho** → "Inspeccionar elemento"

#### Panel Console

```javascript
// Usar console.log para debugging
function cambiarColor() {
  console.log("Función ejecutada"); // ¿Se ejecuta?

  const color = "blue";
  console.log("Color seleccionado:", color); // ¿Qué valor tiene?

  const elemento = document.getElementById("boton");
  console.log("Elemento encontrado:", elemento); // ¿Existe el elemento?

  if (elemento) {
    elemento.style.backgroundColor = color;
    console.log("Color cambiado exitosamente");
  } else {
    console.log("ERROR: Elemento no encontrado");
  }
}
```

#### Panel Elements

- Ver y editar HTML en tiempo real
- Inspeccionar estilos CSS aplicados
- Ver computed styles (estilos finales)

#### Panel Sources

- Ver código fuente
- Poner breakpoints (puntos de parada)
- Ejecutar código línea por línea

### 2. 📝 VS Code Debugging

#### Extensiones Útiles

- **Error Lens** - Muestra errores inline
- **Bracket Pair Colorizer** - Colores en paréntesis
- **Auto Close Tag** - Cierra tags automáticamente

#### Atajos Útiles

- `Ctrl+` - Aumentar zoom
- `Ctrl+/` - Comentar/descomentar línea
- `Ctrl+D` - Seleccionar siguiente coincidencia
- `Alt+Up/Down` - Mover línea arriba/abajo

---

## 🚨 Tipos de Errores Comunes

### 1. 📝 Errores de Sintaxis (Syntax Errors)

**¿Qué son?**: Errores en la escritura del código.

#### JavaScript

```javascript
// ❌ Error: Paréntesis sin cerrar
function saludar() {
    console.log('Hola mundo';
}

// ✅ Correcto
function saludar() {
    console.log('Hola mundo');
}

// ❌ Error: Comillas sin cerrar
const mensaje = "Hola mundo;

// ✅ Correcto
const mensaje = "Hola mundo";

// ❌ Error: Punto y coma en lugar de dos puntos
if (true); {
    console.log('Error');
}

// ✅ Correcto
if (true) {
    console.log('Correcto');
}
```

#### HTML

```html
<!-- ❌ Error: Tag sin cerrar -->
<div>
  <p>Contenido</p>
</div>

<!-- ✅ Correcto -->
<div>
  <p>Contenido</p>
</div>

<!-- ❌ Error: Atributo sin comillas -->
<button id="mi-boton">Click</button>

<!-- ✅ Correcto -->
<button id="mi-boton">Click</button>
```

#### CSS

```css
/* ❌ Error: Llave sin cerrar */
.mi-clase {
    color: red;
    font-size: 16px;

/* ✅ Correcto */
.mi-clase {
    color: red;
    font-size: 16px;
}

/* ❌ Error: Punto y coma faltante */
.otra-clase {
    color: blue
    font-size: 14px;
}

/* ✅ Correcto */
.otra-clase {
    color: blue;
    font-size: 14px;
}
```

### 2. 🔍 Errores de Referencia (Reference Errors)

**¿Qué son?**: Intentar usar algo que no existe.

```javascript
// ❌ Error: Variable no declarada
console.log(variableInexistente);

// ❌ Error: Función no definida
funcionInexistente();

// ❌ Error: Elemento no encontrado
const elemento = document.getElementById("id-inexistente");
elemento.style.color = "red"; // Error: elemento es null
```

#### Soluciones

```javascript
// ✅ Verificar si existe antes de usar
const elemento = document.getElementById("mi-boton");
if (elemento) {
  elemento.style.color = "red";
} else {
  console.log("Elemento no encontrado");
}

// ✅ Usar optional chaining (ES2020)
elemento?.style.setProperty("color", "red");
```

### 3. 🎯 Errores de Tipo (Type Errors)

**¿Qué son?**: Usar un tipo de dato incorrectamente.

```javascript
// ❌ Error: Intentar llamar undefined como función
let miFuncion;
miFuncion(); // TypeError: miFuncion is not a function

// ❌ Error: Intentar acceder propiedad de null
let objeto = null;
console.log(objeto.propiedad); // TypeError: Cannot read property of null

// ✅ Verificar tipo antes de usar
if (typeof miFuncion === "function") {
  miFuncion();
}

if (objeto && objeto.propiedad) {
  console.log(objeto.propiedad);
}
```

### 4. 🎭 Errores de Lógica (Logic Errors)

**¿Qué son?**: El código funciona pero no hace lo que esperamos.

```javascript
// ❌ Error: Condición incorrecta
function esMayorDeEdad(edad) {
  if (edad < 18) {
    // Debería ser >= 18
    return true;
  }
  return false;
}

// ✅ Correcto
function esMayorDeEdad(edad) {
  return edad >= 18;
}

// ❌ Error: Bucle infinito
let contador = 0;
while (contador < 10) {
  console.log(contador);
  // Olvidamos incrementar contador
}

// ✅ Correcto
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}
```

---

## 🔧 Técnicas de Debugging

### 1. 📢 Console.log Debugging

#### Básico

```javascript
function calcular(a, b) {
  console.log("Función calcular ejecutada");
  console.log("Valores recibidos:", a, b);

  const resultado = a + b;
  console.log("Resultado calculado:", resultado);

  return resultado;
}
```

#### Avanzado

```javascript
function procesarUsuario(usuario) {
  // Mostrar objeto completo
  console.log("Usuario completo:", usuario);

  // Mostrar propiedades específicas
  console.log("Nombre:", usuario.nombre);
  console.log("Edad:", usuario.edad);

  // Usar console.table para objetos
  console.table(usuario);

  // Usar console.group para organizar
  console.group("Procesando usuario");
  console.log("Validando datos...");
  console.log("Guardando en base de datos...");
  console.groupEnd();
}
```

#### Tipos de Console

```javascript
console.log("Información general");
console.info("Información importante");
console.warn("Advertencia");
console.error("Error crítico");
console.debug("Información de debug");

// Medir tiempo
console.time("Operación");
// ... código a medir ...
console.timeEnd("Operación");
```

### 2. 🎯 Breakpoints (Puntos de Parada)

```javascript
function miFuncion() {
  let x = 5;
  debugger; // El código se pausará aquí
  let y = x * 2;
  return y;
}
```

**En Chrome DevTools**:

1. Ve a Sources
2. Encuentra tu archivo
3. Clic en el número de línea para poner breakpoint
4. Ejecuta el código
5. Usa los controles para avanzar paso a paso

### 3. 🔍 Inspección de Elementos

#### HTML/CSS Debugging

1. **Clic derecho** en elemento → "Inspeccionar"
2. **Ver estilos aplicados** en panel Styles
3. **Editar CSS en tiempo real** para probar cambios
4. **Ver computed styles** para valores finales

#### Problemas CSS Comunes

```css
/* ❌ Problema: Especificidad incorrecta */
.boton {
  color: red;
}
#mi-boton {
  color: blue;
} /* Tiene mayor especificidad */

/* ❌ Problema: Typo en propiedad */
.texto {
  colour: red; /* Debería ser 'color' */
}

/* ❌ Problema: Unidades faltantes */
.caja {
  width: 100; /* Debería ser '100px' */
}
```

---

## 🎯 Metodología de Debugging Paso a Paso

### 🔍 Paso 1: Identifica el Problema

```
❓ Preguntas que hacer:
- ¿Qué esperaba que pasara?
- ¿Qué está pasando en realidad?
- ¿Cuándo empezó a fallar?
- ¿Funciona en diferentes navegadores?
```

### 📊 Paso 2: Reproduce el Error

```javascript
// Crea un caso de prueba simple
function probarError() {
  // Código mínimo para reproducir el problema
  const elemento = document.getElementById("boton");
  elemento.addEventListener("click", function () {
    // El error ocurre aquí
  });
}
```

### 🔬 Paso 3: Aísla el Problema

```javascript
function debuggearPaso() {
  console.log("1. Iniciando función");

  const elemento = document.getElementById("boton");
  console.log("2. Elemento encontrado:", elemento);

  if (!elemento) {
    console.error("PROBLEMA: Elemento no encontrado");
    return;
  }

  console.log("3. Agregando event listener");
  elemento.addEventListener("click", function () {
    console.log("4. Click detectado");
    // Resto del código...
  });
}
```

### 🛠️ Paso 4: Aplica la Solución

```javascript
// Antes (con error)
function cambiarColorMal() {
  const elemento = document.getElementById("boton");
  elemento.style.color = "red"; // Error si elemento es null
}

// Después (sin error)
function cambiarColorBien() {
  const elemento = document.getElementById("boton");
  if (elemento) {
    elemento.style.color = "red";
  } else {
    console.warn('Elemento con ID "boton" no encontrado');
  }
}
```

### ✅ Paso 5: Verifica la Solución

- Prueba el caso que fallaba originalmente
- Prueba casos extremos
- Verifica que no rompiste otras funcionalidades

---

## 🚨 Errores Específicos por Tecnología

### HTML - Problemas Comunes

```html
<!-- ❌ IDs duplicados -->
<button id="boton">Botón 1</button>
<button id="boton">Botón 2</button>

<!-- ✅ IDs únicos -->
<button id="boton1">Botón 1</button>
<button id="boton2">Botón 2</button>

<!-- ❌ Script en lugar incorrecto -->
<html>
  <head>
    <script>
      // Error: DOM aún no existe
      document.getElementById('boton').addEventListener('click', ...);
    </script>
  </head>
  <body>
    <button id="boton">Click</button>
  </body>
</html>

<!-- ✅ Script al final o con DOMContentLoaded -->
<html>
  <head></head>
  <body>
    <button id="boton">Click</button>
    <script>
      document.getElementById('boton').addEventListener('click', ...);
    </script>
  </body>
</html>
```

### CSS - Problemas Comunes

```css
/* ❌ Selectores incorrectos */
#boton .clase {
  /* Busca .clase DENTRO de #boton */
  color: red;
}

/* ✅ Si queremos el botón CON la clase */
#boton.clase {
  /* Sin espacio */
  color: red;
}

/* ❌ Propiedades que no existen */
.texto {
  text-colour: red; /* No existe */
  font-weight: normal; /* 'normal' no es válido para font-weight */
}

/* ✅ Propiedades correctas */
.texto {
  color: red;
  font-weight: 400;
}
```

### JavaScript - Problemas Comunes

```javascript
// ❌ Event listeners mal definidos
button.addEventListener("click", miFuncion()); // Se ejecuta inmediatamente

// ✅ Correcto
button.addEventListener("click", miFuncion); // Se ejecuta al hacer click
// o
button.addEventListener("click", function () {
  miFuncion();
});

// ❌ Scope problems
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Imprime 3, 3, 3
  }, 100);
}

// ✅ Solución con let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Imprime 0, 1, 2
  }, 100);
}
```

---

## 📚 Recursos de Debugging

### Herramientas Online

- **JSHint** - [jshint.com](https://jshint.com/) - Detecta errores en JavaScript
- **CSS Validator** - [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/) - Valida CSS
- **HTML Validator** - [validator.w3.org](https://validator.w3.org/) - Valida HTML

### Extensiones de Browser

- **Web Developer** - Herramientas de desarrollo
- **ColorZilla** - Inspector de colores
- **WhatFont** - Identificar fuentes

### VS Code Extensions

- **Error Lens** - Muestra errores inline
- **Debugger for Chrome** - Debugging avanzado
- **ESLint** - Linting para JavaScript

---

## 🆘 Cuando Todo Falla

### Estrategias de Último Recurso

1. **Comenta todo y agrega poco a poco**

```javascript
function problematica() {
  // Comentar todo
  // console.log('paso 1');
  // const x = calcular();
  // console.log('paso 2');
  // return x;

  // Descommentar línea por línea hasta encontrar el problema
  console.log("paso 1");
}
```

2. **Crea una versión simple que funcione**

```javascript
// Versión súper simple
function versionSimple() {
  console.log("Hola mundo");
}

// Agrega funcionalidad poco a poco
function versionMejorada() {
  console.log("Hola mundo");
  const usuario = "Juan"; // Agregar variable
  console.log("Hola", usuario);
}
```

3. **Pregunta a alguien más**

- Explica el problema en voz alta (rubber duck debugging)
- Comparte tu código con un compañero
- Crea un issue en tu repositorio

4. **Toma un descanso**

- A veces la solución viene cuando no estás pensando en el problema
- Camina, toma agua, respira

---

## 🎯 Checklist de Debugging

### Antes de Pedir Ayuda

- [ ] ¿Revisé la consola del navegador?
- [ ] ¿Probé con console.log?
- [ ] ¿Verifiqué que todos los IDs/clases sean correctos?
- [ ] ¿Guardé todos los archivos?
- [ ] ¿El script está vinculado correctamente al HTML?
- [ ] ¿Probé en otro navegador?
- [ ] ¿Googlee el error exacto?

### Al Pedir Ayuda

- [ ] Explico qué esperaba que pasara
- [ ] Explico qué está pasando en realidad
- [ ] Comparto el código relevante
- [ ] Incluyo el mensaje de error exacto
- [ ] Menciono qué ya intenté

---

## 🎉 Debugging es un Superpoder

Recuerda:

- **Todo programador debuggea constantemente**
- **Cada error resuelto te hace mejor programador**
- **Ser sistemático es más efectivo que hacer cambios aleatorios**
- **Pedir ayuda es inteligente, no significa que no sepas**

### 💡 Frases Motivacionales

- _"No hay código sin bugs, solo código sin probar"_
- _"El debugging es como ser detective en un crimen donde tú también eres el asesino"_
- _"Un bug encontrado es un bug menos por encontrar"_

---

_¡Happy debugging! 🐛→✨_
