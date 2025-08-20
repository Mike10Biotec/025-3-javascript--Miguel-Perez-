# 🧩 Reto 4: Tarjeta con estilo

## 🎯 Objetivo

Construir una tarjeta de perfil moderna usando HTML y CSS. El diseño debe seguir una estética tipo Material UI, con bordes redondeados, sombra, y una disposición limpia de elementos.

---

## 🧪 Resultado esperado

Una tarjeta centrada en pantalla que muestre:

1. 🖼️ Una imagen de perfil circular
2. 👤 Un nombre (ej. "Ana Torres")
3. 📝 Una breve descripción (ej. "Desarrolladora en formación")

**Ejemplo visual:**

```
┌──────────────────────────────┐
│                              │
│        [ foto circular ]     │
│                              │
│         Ana Torres           │
│                              │
│   Desarrolladora en formación│
│                              │
└──────────────────────────────┘
```

---

## 🛠️ Archivos del proyecto

En este reto trabajarás con dos archivos:

- **`index.html`**: Estructura incompleta de la tarjeta que debes completar
- **`style.css`**: Contiene estilos base y espacio para añadir los tuyos

---

## 📋 Instrucciones paso a paso

### **Paso 1: Completar el HTML**

En `index.html`, dentro del `<div class="card">`, agrega:

- Una etiqueta `<img>` con una imagen (ejemplo: `https://picsum.photos/200/200`)
- Un `<h2>` con un nombre de tu elección
- Un `<p>` con una biografía breve

### **Paso 2: Estilizar con CSS**

En `style.css`, agrega estilos para:

- **La imagen**: Hazla circular y con tamaño uniforme
- **El texto**: Tipografía limpia con márgenes apropiados
- **La tarjeta**: El contenedor `.card` ya tiene estilos base

---

## 🧠 Pista para empezar

Si necesitas una guía inicial, aquí tienes algunos estilos clave:

```css
.card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.card h2 {
  margin: 16px 0 8px 0;
  color: #333;
  font-size: 24px;
}

.card p {
  margin: 0;
  color: #666;
  font-size: 16px;
  line-height: 1.4;
}
```

---

## ✅ Criterios de validación

Tu solución será exitosa cuando cumpla todos estos requisitos:

- [ ] **Estructura HTML:** La tarjeta contiene imagen, nombre y descripción
- [ ] **Diseño centrado:** La tarjeta está centrada en la pantalla
- [ ] **Imagen circular:** La foto de perfil tiene forma circular perfecta
- [ ] **Tipografía clara:** Texto legible con buenos márgenes y jerarquía
- [ ] **Responsive:** Se ve bien en pantallas medianas y grandes
- [ ] **Estilo Material:** Sigue los principios de diseño limpio y moderno

---

## 🎨 Consejos adicionales

- **Experimenta con imágenes:** Prueba diferentes URLs de imágenes para ver cómo se adaptan
- **Ajusta los márgenes:** Juega con el espaciado entre elementos para lograr balance visual
- **Prueba colores:** Usa colores que complementen el diseño general
- **Verifica responsividad:** Cambia el tamaño de la ventana para probar la adaptabilidad

---

## 🧩 Nivel de dificultad

**★★☆☆☆** - Intermedio básico

Este reto te ayudará a practicar:

- Estructura semántica de HTML
- Propiedades CSS para formas y espaciado
- Diseño centrado y responsive
- Jerarquía tipográfica
