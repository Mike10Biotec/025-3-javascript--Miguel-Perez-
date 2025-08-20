# 🔧 Comandos Git Esenciales

Esta guía contiene todos los comandos Git que necesitarás durante el curso, explicados de forma simple y con ejemplos prácticos.

## 🎯 ¿Por Qué Usar Git?

Git te permite:

- 📸 **Guardar "fotos" de tu código** (commits)
- 🔄 **Volver atrás si algo se rompe**
- 📊 **Ver el historial de cambios**
- ☁️ **Sincronizar con GitHub**
- 🏷️ **Etiquetar versiones importantes**

---

## 📚 Comandos por Categoría

### 🏁 Comandos Básicos (Usar Diariamente)

#### `git status`

Muestra el estado actual de tu repositorio.

```bash
git status
```

**Cuándo usar**: Antes de hacer commits, para ver qué archivos cambiaron.

**Ejemplo de salida**:

```
On branch main
Changes not staged for commit:
  modified:   index.html
  modified:   style.css

Untracked files:
  script.js
```

#### `git add`

Prepara archivos para el commit.

```bash
# Agregar archivo específico
git add index.html

# Agregar varios archivos
git add index.html style.css

# Agregar TODOS los archivos modificados
git add .
```

**Cuándo usar**: Después de hacer cambios, antes de hacer commit.

#### `git commit`

Guarda una "foto" de tu código con un mensaje.

```bash
# Commit con mensaje
git commit -m "✅ Completo reto-1: estructura HTML básica"

# Commit más detallado
git commit -m "🎨 Mejoro estilos del botón

- Cambio color de fondo a azul
- Agrego hover effect
- Redondeo las esquinas"
```

**Cuándo usar**: Cuando completes una funcionalidad o hagas un cambio importante.

#### `git push`

Sube tus cambios a GitHub.

```bash
# Subir cambios al repositorio principal
git push origin main
```

**Cuándo usar**: Después de hacer uno o varios commits.

### 🔍 Comandos de Información

#### `git log`

Muestra el historial de commits.

```bash
# Ver historial completo
git log

# Ver historial resumido (más limpio)
git log --oneline

# Ver últimos 5 commits
git log --oneline -5
```

#### `git diff`

Muestra qué cambios específicos hiciste.

```bash
# Ver cambios no confirmados
git diff

# Ver cambios en archivo específico
git diff index.html
```

### 🔄 Comandos de Sincronización

#### `git pull`

Descarga cambios desde GitHub.

```bash
git pull origin main
```

**Cuándo usar**: Raramente en este curso, pero útil si trabajas desde múltiples computadoras.

#### `git clone`

Descarga un repositorio completo.

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

**Cuándo usar**: Solo una vez, al inicio, para descargar tu repositorio.

---

## 🚀 Flujo de Trabajo Diario

Este es el flujo que usarás cada día:

### 1. 🔍 Ver qué cambié

```bash
git status
```

### 2. 📸 Preparar cambios

```bash
# Si quiero agregar todo:
git add .

# Si quiero ser selectivo:
git add index.html style.css
```

### 3. 💾 Guardar cambios con mensaje

```bash
git commit -m "✅ Descripción de lo que hice"
```

### 4. ☁️ Subir a GitHub

```bash
git push origin main
```

### 📋 Ejemplo Completo

```bash
# Después de trabajar en mi reto
git status                                    # Ver qué cambié
git add .                                     # Agregar todos los cambios
git commit -m "🎨 Completo reto-2: botón interactivo"  # Guardar con mensaje
git push origin main                          # Subir a GitHub
```

---

## 📝 Mejores Prácticas para Commits

### ✅ Buenos Mensajes de Commit

```bash
git commit -m "✅ Completo reto-1: estructura HTML"
git commit -m "🎨 Mejoro estilos del header"
git commit -m "🐛 Corrijo error en función de validación"
git commit -m "📱 Hago responsive el diseño"
git commit -m "✨ Agrego animación al botón"
git commit -m "📚 Actualizo documentación del reto-3"
```

### ❌ Malos Mensajes de Commit

```bash
git commit -m "cambios"
git commit -m "fix"
git commit -m "update"
git commit -m "asdf"
git commit -m "funciona"
```

### 🎨 Emojis para Commits (Opcional)

- ✅ `:white_check_mark:` - Reto completado
- 🎨 `:art:` - Mejoras de CSS/estilos
- ✨ `:sparkles:` - Nueva funcionalidad
- 🐛 `:bug:` - Corrección de errores
- 📱 `:iphone:` - Responsive design
- 📚 `:books:` - Documentación
- 🔧 `:wrench:` - Configuración
- 🚀 `:rocket:` - Performance

---

## 🔧 Configuración Inicial

### Configurar Identidad (Solo Una Vez)

```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@gmail.com"

# Verificar configuración:
git config --list
```

### Configurar Editor (Opcional)

```bash
# Usar VS Code como editor por defecto
git config --global core.editor "code --wait"
```

---

## 🚨 Solución de Problemas

### Problema: "Nothing to commit, working tree clean"

**Significa**: No hay cambios para guardar.
**Solución**: Haz cambios en tus archivos primero, luego usa git add y git commit.

### Problema: "Please tell me who you are"

**Significa**: Git no sabe tu nombre/email.
**Solución**:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@gmail.com"
```

### Problema: "fatal: not a git repository"

**Significa**: No estás en una carpeta con Git.
**Solución**:

```bash
# Navega a tu repositorio:
cd ruta/a/tu/repositorio

# O inicializa Git si es necesario:
git init
```

### Problema: "Permission denied (publickey)"

**Significa**: Problema de autenticación con GitHub.
**Solución**: Usa HTTPS en lugar de SSH, o configura SSH keys.

### Problema: Olvidé hacer commit y quiero deshacer cambios

```bash
# Ver qué cambió:
git status

# Deshacer cambios en archivo específico:
git checkout -- index.html

# Deshacer TODOS los cambios no guardados:
git checkout -- .
```

### Problema: Quiero deshacer el último commit

```bash
# Deshacer commit pero mantener cambios:
git reset --soft HEAD~1

# Deshacer commit y cambios (¡CUIDADO!):
git reset --hard HEAD~1
```

---

## 📊 Estados de los Archivos en Git

```
📁 Working Directory  →  🎯 Staging Area  →  📸 Repository
   (modificados)          (git add)          (git commit)
```

### 📋 Posibles Estados

- **Untracked**: Archivo nuevo, Git no lo conoce
- **Modified**: Archivo existente con cambios
- **Staged**: Archivo preparado para commit
- **Committed**: Archivo guardado en Git

### 🔍 Verificar Estados

```bash
git status  # Ver estado general
git diff    # Ver cambios específicos
```

---

## 🎯 Comandos Avanzados (Opcional)

### Ver Historial Bonito

```bash
# Historial con gráfico
git log --oneline --graph --decorate

# Crear alias para comando largo:
git config --global alias.lg "log --oneline --graph --decorate"

# Ahora puedes usar:
git lg
```

### Buscar en el Historial

```bash
# Buscar commits que contengan palabra:
git log --grep="botón"

# Ver cambios en archivo específico:
git log -p index.html
```

### Comparar Versiones

```bash
# Comparar dos commits:
git diff commit1 commit2

# Ver un archivo en commit específico:
git show commit-hash:index.html
```

---

## 📚 Cheat Sheet Rápido

| Comando                   | Descripción                | Frecuencia  |
| ------------------------- | -------------------------- | ----------- |
| `git status`              | Ver estado actual          | 🟢 Diaria   |
| `git add .`               | Preparar todos los cambios | 🟢 Diaria   |
| `git commit -m "mensaje"` | Guardar cambios            | 🟢 Diaria   |
| `git push origin main`    | Subir a GitHub             | 🟢 Diaria   |
| `git log --oneline`       | Ver historial              | 🟡 Semanal  |
| `git diff`                | Ver cambios específicos    | 🟡 Semanal  |
| `git pull origin main`    | Descargar cambios          | 🔴 Rara vez |

---

## 🎓 Ejercicio Práctico

Practica estos comandos ahora mismo:

```bash
# 1. Ve el estado actual
git status

# 2. Crea un archivo de prueba
echo "Hola Git!" > prueba.txt

# 3. Ve el estado (debería aparecer como untracked)
git status

# 4. Agrega el archivo
git add prueba.txt

# 5. Ve el estado (debería aparecer como staged)
git status

# 6. Haz commit
git commit -m "📝 Agrego archivo de prueba"

# 7. Ve el historial
git log --oneline

# 8. Sube los cambios
git push origin main

# 9. Borra el archivo de prueba
rm prueba.txt
git add .
git commit -m "🗑️ Elimino archivo de prueba"
git push origin main
```

---

## 🆘 ¿Necesitas Ayuda?

### Recursos Online

- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Para cuando las cosas salen mal

### En Caso de Emergencia

1. **Respira** 😌
2. **No uses `git reset --hard`** a menos que sepas lo que haces
3. **Pregunta en clase** o crea un issue
4. **Google el error específico**
5. **En último caso**: descarga tu repo de nuevo y copia tus archivos manualmente

---

## 🎉 ¡Felicidades!

Ahora conoces Git lo suficiente para el curso. Recuerda:

- **Usa Git frecuentemente** - Mejor muchos commits pequeños que pocos grandes
- **Escribe buenos mensajes** - Tu yo del futuro te lo agradecerá
- **No tengas miedo** - Git está diseñado para proteger tu código
- **Practica** - Mientras más uses Git, más natural se vuelve

**Siguiente paso**: [Tips de Debugging](./04-debugging-tips.md)

---

_¡Git is your friend! 🤝_
