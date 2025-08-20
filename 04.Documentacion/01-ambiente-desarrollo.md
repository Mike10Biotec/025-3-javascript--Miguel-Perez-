# 🛠️ Configuración del Ambiente de Desarrollo

Esta guía te llevará paso a paso para configurar tu ambiente de desarrollo completo para el curso de JavaScript.

## 📋 Checklist Rápido

Antes de empezar, asegúrate de tener:

- [ ] Computadora con al menos 4GB RAM
- [ ] Conexión a internet estable
- [ ] Cuenta en GitHub
- [ ] 2-3 horas libres para la configuración inicial

## 🎯 Herramientas que Instalaremos

1. **Node.js** - Para ejecutar JavaScript
2. **Git** - Control de versiones
3. **Visual Studio Code** - Editor de código
4. **Extensiones de VS Code** - Para mejorar productividad
5. **Terminal moderna** - Interfaz de comandos

---

## 🖥️ Paso 1: Instalar Node.js

Node.js nos permite ejecutar JavaScript fuera del navegador.

### Windows

1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión **LTS** (Long Term Support)
3. Ejecuta el instalador `.msi`
4. **Importante**: En el instalador, asegúrate de marcar "Add to PATH"
5. Sigue el asistente con las opciones por defecto
6. Reinicia tu computadora

### macOS

```bash
# Opción 1: Descarga manual
# Ve a https://nodejs.org/ y descarga la versión LTS

# Opción 2: Con Homebrew (recomendado)
# Primero instala Homebrew si no lo tienes:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Luego instala Node.js:
brew install node
```

### Linux (Ubuntu/Debian)

```bash
# Opción 1: Desde repositorios oficiales
sudo apt update
sudo apt install nodejs npm

# Opción 2: Versión más reciente con NodeSource
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### ✅ Verificar Instalación

Abre tu terminal y ejecuta:

```bash
node --version
npm --version
```

Deberías ver algo como:

```
v20.11.0
10.2.4
```

Si ves los números de versión, ¡perfecto! Si no, revisa la sección de [solución de problemas](#-solución-de-problemas).

---

## 🔧 Paso 2: Instalar y Configurar Git

Git es esencial para el control de versiones y trabajar con GitHub.

### Windows

1. Ve a [git-scm.com](https://git-scm.com/)
2. Descarga "Git for Windows"
3. Ejecuta el instalador
4. **Configuraciones importantes**:
   - ✅ "Git from the command line and also from 3rd-party software"
   - ✅ "Use Windows' default console window"
   - ✅ Las demás opciones por defecto están bien

### macOS

```bash
# Git suele venir preinstalado, verificar:
git --version

# Si no está, instalar con Homebrew:
brew install git
```

### Linux

```bash
sudo apt update
sudo apt install git
```

### 🔑 Configurar Git

**Esto es MUY importante - hazlo con tu información real:**

Cuando crees tu repositorio, Git necesita saber quién eres para registrar tus cambios correctamente. Por lo tanto, configura tu nombre y correo electrónico con el que te registraste en GitHub:

```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@gmail.com"

# Verificar configuración:
git config --list
```

---

## 💻 Paso 3: Instalar Visual Studio Code

VS Code será nuestro editor principal.

### Todas las Plataformas

1. Ve a [code.visualstudio.com](https://code.visualstudio.com/)
2. Descarga la versión para tu sistema
3. Instala con las opciones por defecto
4. **Windows**: Asegúrate de marcar "Add to PATH"

### 🔌 Extensiones Esenciales

Abre VS Code y presiona `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac) para abrir el marketplace de extensiones.

Instala estas extensiones (busca por nombre exacto):

#### Obligatorias

- **Live Server** - brettkistner.vscode-live-server
- **Prettier - Code formatter** - esbenp.prettier-vscode
- **Auto Rename Tag** - formulahendry.auto-rename-tag

#### Recomendadas

- **JavaScript (ES6) code snippets** - xabikos.javascriptsnippets
- **HTML CSS Support** - ecmel.vscode-html-css
- **Bracket Pair Colorizer 2** - coenraads.bracket-pair-colorizer-2
- **indent-rainbow** - oderwat.indent-rainbow

### ⚙️ Configuración de VS Code

Presiona `Ctrl+,` (Windows/Linux) o `Cmd+,` (Mac) para abrir configuraciones.

Busca y configura:

- **Format On Save**: ✅ Activado
- **Auto Save**: `afterDelay`
- **Font Size**: 14-16 (según tu preferencia)

---

## 🖥️ Paso 4: Terminal Moderna

Una buena terminal hace la diferencia.

### Windows

**Opción 1: Windows Terminal (Recomendada)**

1. Ve a Microsoft Store
2. Busca "Windows Terminal"
3. Instala y ábrela
4. Configúrala como terminal por defecto

**Opción 2: Cmder**

1. Ve a [cmder.app](https://cmder.app/)
2. Descarga la versión "Full"
3. Descomprime y ejecuta

### macOS

**Terminal nativa** es buena, pero puedes mejorarla:

```bash
# Instalar Oh My Zsh (opcional pero recomendado)
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

**Alternativa: Warp**

1. Ve a [warp.dev](https://warp.dev/)
2. Descarga e instala

**Alternativa: iTerm2**

1. Ve a [iterm2.com](https://iterm2.com/)
2. Descarga e instala

### Linux

La terminal nativa suele ser excelente, pero puedes probar:

- **Tilix**
- **Terminator**
- **GNOME Terminal** (ya incluida en Ubuntu)

---

## 🎮 Paso 5: Crear tu Repositorio

Ahora configuremos tu espacio de trabajo:

### 1. Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Clic en "New repository" (botón verde)
3. Configuración:
   - **Name**: `2025-3-javascript-[tu-nombre]`
   - **Description**: `Mi progreso en el curso de JavaScript Fundamentals`
   - ✅ **Public**
   - ✅ **Add a README file**
   - ✅ **Add .gitignore** → selecciona "Node"
   - Clic en "Create repository"

### 2. Clonar a tu Computadora

```bash
# Reemplaza 'tu-usuario' y 'tu-nombre' con tus datos reales
git clone https://github.com/tu-usuario/2025-3-javascript-tu-nombre.git

# Entrar al directorio
cd 2025-3-javascript-tu-nombre

# Abrir en VS Code
code .
```

### 3. Descargar Material del Curso

1. Ve a: https://github.com/Inadaptados/2025-3-Javascript
2. Clic en "Code" → "Download ZIP"
3. Descomprime el archivo
4. Copia **todas las carpetas y archivos** a tu repositorio clonado
5. Sube los cambios:

```bash
git add .
git commit -m "📚 Agrego material inicial del curso"
git push origin main
```

---

## ✅ Verificación Final

Ejecuta estos comandos para verificar que todo funciona:

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version

# Verificar que estás en tu repositorio
pwd
git remote -v

# Abrir VS Code desde terminal
code .
```

### 🎯 Test Rápido

1. En VS Code, crea un archivo `test.html`
2. Escribe: `html:5` y presiona Tab
3. Clic derecho → "Open with Live Server"
4. Debería abrirse en tu navegador

Si todo funciona, ¡estás listo! 🎉

---

## 🚨 Solución de Problemas

### Problema: "node no se reconoce como comando"

**Windows:**

1. Reinicia tu computadora
2. Si persiste:
   - Busca "Variables de entorno" en el menú inicio
   - Edita las variables de entorno del sistema
   - En "Path", agrega: `C:\Program Files\nodejs\`
   - Reinicia la terminal

**Mac/Linux:**

```bash
# Verifica el PATH
echo $PATH

# Si no aparece node, agrega a ~/.bashrc o ~/.zshrc:
export PATH="/usr/local/bin:$PATH"

# Recarga la configuración:
source ~/.bashrc  # o ~/.zshrc
```

### Problema: Live Server no aparece

1. Verifica que la extensión esté instalada
2. Reinicia VS Code
3. Si no funciona, desinstala y reinstala la extensión

### Problema: Git no funciona

```bash
# Verificar configuración
git config --list

# Si falta configuración:
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```

### Problema: Permisos en Mac/Linux

```bash
# Para npm:
sudo chown -R $(whoami) ~/.npm

# Para node_modules:
sudo chown -R $(whoami) node_modules/
```

---

## 🎊 ¡Felicidades!

Si llegaste hasta aquí y todos los tests pasaron, ¡tu ambiente está listo!

### 🏁 Siguientes Pasos

1. Lee la [Metodología para Resolver Retos](./02-como-resolver-retos.md)
2. Familiarízate con los [Comandos Git](./03-comandos-git.md)
3. ¡Comienza con el primer reto! 🚀

### 📞 ¿Necesitas Ayuda?

- Revisa la sección de solución de problemas
- Pregunta en clase
- Buscanos en el canal de Discord del curso

---

_¡Tu journey de programación comienza ahora! 💪_
