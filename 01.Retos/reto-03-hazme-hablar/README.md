# 🧩 Reto 3: Hazme hablar

## 🎯 Objetivo

Tu misión es agregar interactividad con JavaScript para que el botón muestre un mensaje al hacer clic. Este es tu primer paso hacia la programación dinámica en el navegador.

---

## 🧪 Resultado esperado

Cuando el usuario haga clic en el botón "Háblame", debe aparecer una ventana emergente (alert) con el siguiente mensaje:

```
📢 ¡Bien hecho!
```

**Comportamiento esperado:**

- ✅ Al hacer clic → Aparece el alert
- ✅ El botón responde inmediatamente
- ✅ No hay errores en la consola del navegador

---

## 🛠️ Archivos del proyecto

En este reto trabajarás con tres archivos:

- **`index.html`**: Contiene el botón con `id="btn-hablar"`. **No debes modificar este archivo**.
- **`style.css`**: Ya incluye todos los estilos necesarios. **No debes modificar este archivo**.
- **`script.js`**: Archivo vacío donde escribirás el código JavaScript que dará funcionalidad al botón.

---

## 📋 Instrucciones paso a paso

Sigue estos pasos para completar el reto:

1. **Abre el archivo** `script.js`
2. **Selecciona el botón** usando `document.getElementById('btn-hablar')`
3. **Agrega un listener** con `addEventListener('click', function...)`
4. **Dentro de la función**, muestra un `alert` con el texto `"¡Bien hecho!"`

---

## 🧠 Pista para empezar

Si necesitas una guía inicial, aquí tienes la estructura completa:

```js
// Seleccionar el botón por su ID
const boton = document.getElementById("btn-hablar");

// Agregar evento de clic
boton.addEventListener("click", function () {
  alert("¡Bien hecho!");
});
```

**Explicación del código:**

- `getElementById()` busca un elemento HTML por su atributo `id`
- `addEventListener()` escucha eventos (en este caso, 'click')
- `alert()` muestra una ventana emergente con un mensaje

---

## ✅ Criterios de validación

Tu solución será exitosa cuando cumpla todos estos requisitos:

- [ ] **Funcionalidad:** Al hacer clic en el botón, aparece el mensaje de alerta
- [ ] **Sin errores:** No hay errores en la consola del navegador
- [ ] **Código limpio:** El JavaScript está bien estructurado y comentado
- [ ] **Archivos intactos:** No modificaste `index.html` ni `style.css`
- [ ] **Compatibilidad:** Funciona en navegadores modernos

---

## 🎨 Consejos adicionales

- **Prueba en la consola:** Puedes verificar si tu código funciona abriendo las herramientas de desarrollador (F12)
- **Revisa los errores:** Si algo no funciona, mira la pestaña "Console" en las herramientas de desarrollador
- **Experimenta:** Una vez que funcione, prueba cambiar el mensaje del alert

---

## 🧩 Nivel de dificultad

**★☆☆☆☆** - Principiante

Este es un reto introductorio perfecto para familiarizarte con:

- Manipulación básica del DOM
- Event listeners en JavaScript
- Interacción usuario-navegador
