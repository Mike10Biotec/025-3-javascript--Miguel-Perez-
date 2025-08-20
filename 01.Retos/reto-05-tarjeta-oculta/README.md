# 🧩 Reto 5: Tarjeta oculta

## 🎯 Objetivo

Crear una tarjeta que aparezca o desaparezca al hacer clic en un botón. Este reto utiliza CSS para controlar la visibilidad y JavaScript para alternar clases.

---

## 🧪 Resultado esperado

1. **Un botón** con el texto "Mostrar tarjeta"
2. **Una tarjeta** que aparece/desaparece al hacer clic
3. **El texto del botón** cambia dinámicamente a "Ocultar tarjeta" y viceversa

**Ejemplo visual:**

```
[ Mostrar tarjeta ] ⟶ [ Tarjeta aparece ] ⟶ [ Ocultar tarjeta ]
```

**Comportamiento esperado:**

- ✅ Estado inicial: tarjeta oculta, botón dice "Mostrar tarjeta"
- ✅ Al hacer clic: tarjeta aparece, botón cambia a "Ocultar tarjeta"
- ✅ Al volver a hacer clic: tarjeta se oculta, botón vuelve a "Mostrar tarjeta"

---

## 🛠️ Archivos del proyecto

En este reto trabajarás con tres archivos:

- **`index.html`**: Estructura completa con tarjeta y botón. **No modificar**.
- **`style.css`**: Contiene estilos para el diseño y clase `.oculto`. **No modificar**.
- **`script.js`**: Funcionalidad incompleta que debes completar.

---

## 📋 Instrucciones paso a paso

1. **Selecciona los elementos:** En `script.js`, usa `getElementById` para obtener la tarjeta y el botón
2. **Agrega el evento:** Usa `addEventListener` para escuchar el clic del botón
3. **Alterna la visibilidad:** Usa `.classList.toggle('oculto')` para mostrar/ocultar la tarjeta
4. **Actualiza el texto:** Cambia el texto del botón según el estado actual de la tarjeta

---

## 🧠 Pista para empezar

Si necesitas una guía inicial, aquí tienes la estructura básica:

```js
// Seleccionar elementos
const boton = document.getElementById("boton-toggle");
const tarjeta = document.getElementById("tarjeta");

// Agregar evento de clic
boton.addEventListener("click", function () {
  // Alternar la clase 'oculto'
  tarjeta.classList.toggle("oculto");

  // Cambiar el texto del botón según el estado
  if (tarjeta.classList.contains("oculto")) {
    boton.textContent = "Mostrar tarjeta";
  } else {
    boton.textContent = "Ocultar tarjeta";
  }
});
```

**Explicación del código:**

- `classList.toggle()` añade la clase si no existe, la quita si existe
- `classList.contains()` verifica si un elemento tiene una clase específica
- `textContent` cambia el texto visible del elemento

---

## ✅ Criterios de validación

Tu solución será exitosa cuando cumpla todos estos requisitos:

- [ ] **Funcionalidad completa:** La tarjeta se muestra/oculta al hacer clic
- [ ] **Texto dinámico:** El botón cambia su texto según el estado
- [ ] **Estado inicial correcto:** La tarjeta inicia oculta
- [ ] **Transiciones suaves:** La animación CSS funciona correctamente
- [ ] **Sin errores:** No hay errores en la consola del navegador

---

## 🎨 Consejos adicionales

- **Usa las herramientas de desarrollador:** Inspecciona los elementos para ver cómo cambian las clases
- **Verifica los IDs:** Asegúrate de usar los IDs correctos del HTML
- **Prueba el estado inicial:** La tarjeta debe empezar oculta
- **Experimenta:** Una vez que funcione, prueba diferentes textos para el botón

---

## 🧩 Nivel de dificultad

**★★☆☆☆** - Intermedio básico

Este reto te ayudará a practicar:

- Manipulación de clases CSS con JavaScript
- Event listeners y manejo de eventos
- Lógica condicional para cambiar estados
- Interacción dinámica con el DOM
