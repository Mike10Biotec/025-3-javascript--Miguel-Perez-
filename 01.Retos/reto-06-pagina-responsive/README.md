# 📱 Reto 6: Página responsive

## 🎯 Objetivo

Corregir el diseño para que funcione adecuadamente en pantallas móviles utilizando `media queries` y ajustes de estilo responsivos.

---

## 🔍 ¿Qué está pasando?

La página se ve bien en escritorio, pero en móvil presenta varios problemas:

- ❌ Los elementos del header se enciman o salen de la vista
- ❌ Los enlaces de navegación no se adaptan correctamente
- ❌ La tarjeta puede no tener márgenes adecuados
- ❌ El contenido se ve comprimido e ilegible

---

## 🧪 Resultado esperado

Al completar este reto, tu página debe verse perfecta en ambos tamaños de pantalla:

**En escritorio (>600px):**

- Header con navegación horizontal
- Elementos bien espaciados
- Diseño amplio y cómodo

**En móvil (≤600px):**

- Header apilado verticalmente
- Enlaces de navegación uno debajo del otro
- Contenido legible y bien espaciado
- Diseño optimizado para touch

---

## 🛠️ Archivos del proyecto

En este reto trabajarás principalmente con:

- **`index.html`**: Estructura HTML completa. **No debes modificar este archivo**.
- **`style.css`**: Contiene estilos base para escritorio. **Aquí agregarás tus media queries**.

---

## 📋 Instrucciones paso a paso

### **Paso 1: Crear la media query**

Añade una media query para pantallas de máximo 600px de ancho:

```css
@media (max-width: 600px) {
  /* Aquí irán tus estilos móviles */
}
```

### **Paso 2: Ajustar el header**

Dentro de la media query, haz que los elementos del header se acomoden verticalmente:

```css
@media (max-width: 600px) {
  header {
    flex-direction: column;
    text-align: center;
    padding: 16px;
  }
}
```

### **Paso 3: Modificar la navegación**

Cambia el `display` de los enlaces del `nav` para que se muestren en bloques:

```css
@media (max-width: 600px) {
  nav a {
    display: block;
    margin: 8px 0;
    padding: 12px;
  }
}
```

### **Paso 4: Optimizar el contenido**

Asegúrate de que la tarjeta tenga márgenes y padding adecuados para móvil.

---

## 🧠 Pista completa para empezar

Si necesitas una guía completa, aquí tienes un ejemplo de media query:

```css
@media (max-width: 600px) {
  /* Header responsive */
  header {
    flex-direction: column;
    text-align: center;
    padding: 16px;
    gap: 16px;
  }

  /* Navegación apilada */
  nav {
    width: 100%;
  }

  nav a {
    display: block;
    margin: 8px 0;
    padding: 12px;
    text-align: center;
  }

  /* Contenido principal */
  main {
    padding: 16px;
    margin: 16px auto;
  }

  /* Tarjeta optimizada */
  .card {
    margin: 16px;
    padding: 20px;
  }
}
```

---

## ✅ Criterios de validación

Tu solución será exitosa cuando cumpla todos estos requisitos:

- [ ] **Media query funcional:** Se aplican estilos específicos en pantallas ≤600px
- [ ] **Header responsive:** Los elementos se apilan verticalmente en móvil
- [ ] **Navegación optimizada:** Los enlaces se muestran uno debajo del otro
- [ ] **Contenido legible:** El texto y los elementos son fáciles de leer
- [ ] **Espaciado adecuado:** Hay suficiente padding y márgenes
- [ ] **Transición suave:** El diseño se adapta bien al cambiar el tamaño de ventana

---

## 🎨 Consejos adicionales

- **Usa las herramientas de desarrollador:** Activa el modo responsive para probar diferentes tamaños
- **Prueba en dispositivos reales:** Si es posible, revisa en un teléfono real
- **Considera el touch:** Los elementos clickeables deben ser suficientemente grandes (mínimo 44px)
- **Optimiza imágenes:** Asegúrate de que las imágenes se escalen correctamente

---

## 🧩 Nivel de dificultad

**★★☆☆☆** - Intermedio básico

Este reto te ayudará a practicar:

- Media queries y diseño responsive
- Flexbox para layouts adaptativos
- Principios de diseño móvil
- Optimización de experiencia de usuario
