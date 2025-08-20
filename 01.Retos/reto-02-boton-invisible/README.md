# 🧩 Reto 2: Botón invisible

## 🎯 Objetivo

Tu misión es aplicar estilos CSS para transformar un botón invisible en una elegante acción principal, inspirada en el diseño de Material UI. Debes hacer que el botón sea completamente funcional y visualmente atractivo.

---

## 🧪 Resultado esperado

Al completar este reto, tu botón debe lucir como un elemento de interfaz moderno y profesional:

**Características visuales:**

- **Color de fondo:** Azul Material (#1976d2)
- **Texto:** Blanco y legible
- **Forma:** Bordes redondeados con padding generoso
- **Interactividad:** Cambio de color al hacer hover
- **Sombra:** Efecto sutil que le da profundidad

**Representación visual:**

```
┌─────────────────┐
│     Enviar      │  ← Botón centrado, estilizado y visible
└─────────────────┘
```

---

## 🛠️ Archivos del proyecto

En este reto trabajarás con dos archivos:

- **`index.html`**: Ya contiene la estructura HTML completa con el botón. **No debes modificar este archivo**.
- **`style.css`**: Archivo donde debes escribir todos los estilos CSS necesarios para el botón.

---

## 📋 Requisitos específicos del botón

Tu botón debe cumplir con todos estos criterios de diseño:

- [ ] **Color de fondo:** Azul Material UI (`#1976d2`)
- [ ] **Color de texto:** Blanco para buen contraste
- [ ] **Bordes redondeados:** `border-radius: 8px` o superior
- [ ] **Padding generoso:** `12px 24px` para buena área de click
- [ ] **Sin borde:** `border: none` para diseño limpio
- [ ] **Sombra sutil:** `box-shadow` que agregue profundidad
- [ ] **Cursor interactivo:** `cursor: pointer` al hacer hover
- [ ] **Estado hover:** Color más oscuro (`#1565c0`) al pasar el mouse

---

## 🧠 Pista para empezar

Si necesitas una guía inicial, puedes usar esta estructura básica:

```css
button {
  /* Colores básicos */
  background-color: #1976d2;
  color: white;

  /* Espaciado y forma */
  padding: 12px 24px;
  border-radius: 8px;
  border: none;

  /* Efectos visuales */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

button:hover {
  background-color: #1565c0;
}
```

---

## ✅ Criterios de validación

Tu solución será exitosa cuando cumpla todos estos requisitos:

- [ ] **Diseño completo:** El botón tiene todos los estilos aplicados correctamente
- [ ] **Interactividad:** Funciona el efecto hover y el cursor cambia
- [ ] **Coherencia visual:** El estilo se ve moderno y profesional
- [ ] **Responsividad:** Se ve bien en diferentes tamaños de pantalla
- [ ] **Accesibilidad:** Mantiene buen contraste y usabilidad

---

## 🎨 Consejos adicionales

- Experimenta con diferentes valores de `box-shadow` para lograr la sombra perfecta
- Asegúrate de que el contraste entre el texto y el fondo sea suficiente
- Prueba el botón en diferentes navegadores para verificar compatibilidad
