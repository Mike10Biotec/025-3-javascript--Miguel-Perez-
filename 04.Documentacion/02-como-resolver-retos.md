# 🧩 Cómo Resolver los Retos

Esta guía te enseñará la metodología paso a paso para abordar y resolver cada reto del curso de manera efectiva.

## 🎯 Filosofía del Curso

Los retos están diseñados para:

- **Reforzar conceptos**: Cada ejercicio practica habilidades específicas
- **Construir progresivamente**: Cada reto es más complejo que el anterior
- **Desarrollar lógica**: Más importante que memorizar sintaxis
- **Simular situaciones reales**: Problemas que encontrarás como desarrollador

---

## 📋 Metodología PROBLEMA → SOLUCIÓN

### 🔍 Paso 1: ENTENDER el Problema

**Tiempo estimado: 10-15 minutos**

1. **Lee COMPLETAMENTE** el README del reto
2. **Identifica**:
   - ¿Qué debo construir?
   - ¿Qué funcionalidad debe tener?
   - ¿Qué archivos necesito modificar?
3. **Analiza los archivos existentes**:
   - ¿Qué HTML/CSS ya está hecho?
   - ¿Qué necesito agregar?
4. **Define el resultado esperado**:
   - ¿Cómo debería verse?
   - ¿Cómo debería comportarse?

💡 **Tip**: Si no entiendes algo, pregunta ANTES de comenzar a programar.

### 📝 Paso 2: PLANIFICAR la Solución

**Tiempo estimado: 10-20 minutos**

1. **Descompón el problema**:

   ```
   Ejemplo: "Botón que cambie de color al hacer clic"

   Pasos:
   - Crear/encontrar el botón en HTML
   - Escribir función que cambie el color
   - Conectar función al evento click
   - Probar que funcione
   ```

2. **Identifica qué tecnologías usar**:

   - HTML para estructura
   - CSS para estilos
   - JavaScript para interactividad

3. **Establece prioridades**:
   - ¿Qué es lo mínimo que debe funcionar?
   - ¿Qué puedo agregar si me sobra tiempo?

### ⚡ Paso 3: IMPLEMENTAR la Solución

**Tiempo estimado: Variable según reto**

1. **Comienza con lo básico**:

   - HTML primero
   - CSS después
   - JavaScript al final

2. **Prueba frecuentemente**:

   - Guarda cada cambio (Ctrl+S)
   - Refresca el navegador
   - Verifica que funciona antes de continuar

3. **Una cosa a la vez**:
   - No intentes hacer todo junto
   - Haz una funcionalidad, pruébala, luego la siguiente

### 🧪 Paso 4: PROBAR y DEPURAR

**Tiempo estimado: 15-30 minutos**

1. **Prueba diferentes casos**:

   - Funcionalidad normal
   - Casos extremos
   - ¿Qué pasa si hago clic rápido?

2. **Si algo no funciona**:
   - Abre DevTools (F12)
   - Revisa la consola por errores
   - Usa `console.log()` para debuggear

### 📤 Paso 5: DOCUMENTAR y SUBIR

**Tiempo estimado: 5-10 minutos**

1. **Limpia tu código**:

   - Elimina console.logs innecesarios
   - Indenta correctamente
   - Agrega comentarios si es necesario

2. **Haz commit**:
   ```bash
   git add .
   git commit -m "✅ Completo reto-X: descripción de lo que hice"
   git push origin main
   ```

---

## 📁 Estructura de Archivos

Cada reto sigue esta estructura:

```
reto-X-nombre/
├── README.md          # Instrucciones del reto
├── index.html         # Archivo principal HTML
├── style.css          # Estilos CSS
└── script.js          # JavaScript (si es necesario)
```

### 📄 Descripción de Archivos

- **README.md**: Lee SIEMPRE primero. Contiene instrucciones específicas
- **index.html**: Archivo principal. Ábrelo con Live Server
- **style.css**: Todos los estilos van aquí
- **script.js**: Lógica de JavaScript (si el reto lo requiere)

---

## 🛠️ Flujo de Trabajo Recomendado

### 1. Preparar el Entorno

```bash
# Navegar al reto
cd 01.Retos/reto-1-estructura-perdida

# Abrir VS Code
code .

# Abrir Live Server
# Clic derecho en index.html → "Open with Live Server"
```

### 2. Ventanas Organizadas

- **VS Code**: Lado izquierdo
- **Navegador**: Lado derecho
- **DevTools**: Panel inferior del navegador

### 3. Cycle de Desarrollo

1. Leer README
2. Modificar código
3. Guardar (Ctrl+S)
4. Ver resultado en navegador
5. Repetir hasta completar

---

## 🎨 Buenas Prácticas

### HTML

```html
<!-- ✅ Bueno: Semántico y claro -->
<button id="cambiar-color" class="btn-principal">Cambiar Color</button>

<!-- ❌ Malo: No descriptivo -->
<div onclick="cambiar()">Botón</div>
```

### CSS

```css
/* ✅ Bueno: Nombres descriptivos */
.btn-principal {
  background-color: #007bff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

/* ❌ Malo: Nombres genéricos */
.azul {
  background-color: blue;
}
```

### JavaScript

```javascript
// ✅ Bueno: Función clara con buen nombre
function cambiarColorFondo() {
  document.body.style.backgroundColor = "lightblue";
}

// ❌ Malo: Código confuso
function x() {
  document.body.style.backgroundColor = "lightblue";
}
```

---

## 🐛 Debugging: Cómo Encontrar Errores

### 1. Usa las DevTools

```javascript
// F12 para abrir DevTools
// Ve a "Console" para ver errores

// Usa console.log para debuggear:
function cambiarColor() {
  console.log("Función ejecutada"); // Verificar que se ejecute
  const color = "red";
  console.log("Color seleccionado:", color); // Ver valores
  document.body.style.backgroundColor = color;
}
```

### 2. Errores Comunes

**JavaScript no funciona:**

```javascript
// ❌ Error común: Olvidar conectar el evento
function cambiarColor() {
  // Código aquí
}

// ✅ Solución: Conectar al HTML
document.getElementById("boton").addEventListener("click", cambiarColor);
```

**CSS no se aplica:**

```css
/* ❌ Error: Selector incorrecto */
#mi-boton {
  color: red;
}

/* ✅ Solución: Verificar que el HTML tenga id="mi-boton" */
```

### 3. Checklist de Debugging

- [ ] ¿Hay errores en la consola?
- [ ] ¿Los IDs y clases coinciden entre HTML, CSS y JS?
- [ ] ¿Guardé todos los archivos?
- [ ] ¿El script.js está vinculado al HTML?

---

## ⏱️ Gestión del Tiempo

### Reto Básico (1-2 horas)

- 15 min: Entender problema
- 20 min: Planificar
- 60-90 min: Implementar
- 15 min: Probar y debuggear

### Reto Intermedio (2-3 horas)

- 20 min: Entender problema
- 30 min: Planificar
- 90-120 min: Implementar
- 30 min: Probar y debuggear

### 🚨 Si Te Atrasas

1. **Pausa 10 minutos** - Camina, respira
2. **Lee el problema de nuevo** - ¿Entendiste bien?
3. **Simplifica** - ¿Puedes hacer una versión más simple?
4. **Busca ayuda**:
   - Google el error específico
   - Consulta MDN Web Docs
   - Pregunta en clase
   - Crea un issue en tu repositorio

---

## 📈 Niveles de Cumplimiento

### 🥉 Nivel Básico

- El reto funciona según las especificaciones mínimas
- Cumple con todos los requisitos del README

### 🥈 Nivel Intermedio

- Funcionalidad básica + mejoras en el diseño
- Código limpio y bien organizado
- Manejo de casos edge

### 🥇 Nivel Avanzado

- Funcionalidad extra creativa
- Código optimizado y comentado
- Responsive design
- Animaciones o efectos adicionales

**Recuerda**: Es mejor completar el nivel básico que quedarse atascado intentando el avanzado.

---

## 🎯 Mindset de Éxito

### ✅ Mentalidad Correcta

- **"No sé cómo hacerlo... AÚN"**
- **"Cada error me enseña algo"**
- **"Voy paso a paso"**
- **"Pido ayuda cuando la necesito"**

### ❌ Mentalidad Limitante

- ~~"No soy bueno para esto"~~
- ~~"Es demasiado difícil"~~
- ~~"Otros lo hacen más rápido"~~
- ~~"Debería saberlo ya"~~

---

## 🎊 Celebra los Logros

### Pequeños Wins

- ✅ Primer HTML válido
- ✅ Primer CSS que funciona
- ✅ Primer JavaScript sin errores
- ✅ Primer reto completado

### Grandes Wins

- ✅ Reto resuelto sin ayuda
- ✅ Código que funciona a la primera
- ✅ Ayudar a un compañero
- ✅ Todos los retos completados

---

## 📚 Recursos Rápidos

- **HTML**: [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **Debugging**: [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

---

_¡Ahora tienes la metodología! Es hora de aplicarla. 🚀_

**Siguiente paso**: [Comandos Git Esenciales](./03-comandos-git.md)
