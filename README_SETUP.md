# 🎯 Proyecto Responsivo - Diagnóstico Práctico

## 📋 Descripción

Proyecto web con 3 vistas responsivas:
- **Desktop (>992px)**: Grid de 3 columnas
- **Tablet (768px-991px)**: Grid de 2 columnas  
- **Mobile (<768px)**: Vista en lista

Implementa Bootstrap 5 instalado localmente (sin internet) y patrones de diseño.

---

## 🚀 Cómo Ejecutar

### Opción 1: Usar Script de Inicio (Recomendado)

```bash
cd proyecto
./start-server.sh
```

Luego abre en tu navegador: **http://localhost:8000**

### Opción 2: Iniciar Servidor Manualmente

```bash
cd proyecto
python3 -m http.server 8000
```

Luego abre: **http://localhost:8000**

### ⚠️ Importante: NO abrir directamente
No abras el archivo `index.html` directamente (file://) porque los recursos no se cargarán correctamente. Debes usar un servidor local.

---

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html                 # Página principal
├── start-server.sh           # Script para iniciar servidor
├── package.json              # Dependencias
├── src/
│   ├── img/                  # Imágenes del proyecto
│   │   ├── audi.jpeg
│   │   └── audifonos.webp
│   ├── styles/
│   │   ├── main.css          # Estilos principales
│   │   └── responsive.css    # Media queries
│   └── scripts/
│       ├── data.js           # Datos de productos (Patrón: Data Repository)
│       ├── renderer.js       # Renderizador de componentes (Patrón: Renderer)
│       └── main.js           # Lógica principal (Patrón: Application Controller)
├── vendors/
│   └── bootstrap/            # Bootstrap 5 (instalado localmente)
│       ├── bootstrap.min.css
│       └── bootstrap.bundle.min.js
├── .github/                  # Guías de Git y commits
│   ├── WORKFLOW_GUIDE.md     # Guía principal de commits
│   ├── COMMIT_GUIDELINES.md
│   ├── GIT_CHEAT_SHEET.md
│   ├── NAMING_CONVENTIONS.md
│   └── COMMIT_EXAMPLES.md
└── docs/                     # Documentación

```

---

## 🎨 Características

✅ **Responsive Design**: 3 breakpoints diferentes  
✅ **Bootstrap Local**: Sin dependencias de internet  
✅ **Patrones de Diseño**: Repository, Renderer, Controller  
✅ **Código Modularizado**: Separación de concerns  
✅ **Documentado**: Comentarios JSDoc en todos los archivos  
✅ **Versionado**: Git flow con commits descriptivos  

---

## 🔧 Tecnologías

- **HTML5**: Semántico y accesible
- **CSS3**: Flexbox, Grid, Media Queries
- **JavaScript Vanilla**: Sin dependencias externas
- **Bootstrap 5**: Framework CSS responsive
- **Git**: Control de versiones

---

## 📝 Guía de Commits

Lee la documentación en `.github/` para entender cómo hacer commits profesionales:

```bash
# Estructura
git commit -m "tipo(scope): descripción"

# Ejemplos
git commit -m "feat(html): agregar nueva sección"
git commit -m "fix(styles): corregir responsive en mobile"
git commit -m "docs: actualizar README"
```

Consulta estos archivos:
- [WORKFLOW_GUIDE.md](./.github/WORKFLOW_GUIDE.md) ← **Empieza aquí**
- [COMMIT_GUIDELINES.md](./.github/COMMIT_GUIDELINES.md)
- [GIT_CHEAT_SHEET.md](./.github/GIT_CHEAT_SHEET.md)

---

## 🧠 Patrones de Diseño Implementados

### 1. **Data Repository** (`data.js`)
Centraliza los datos de productos en un lugar único.

```javascript
const PRODUCTS_DATA = [...]
function getProducts() { ... }
function getProductById(id) { ... }
```

### 2. **Renderer/Presenter** (`renderer.js`)
Encapsula la lógica de renderizado en una clase.

```javascript
class ProductRenderer {
    createDesktopCard(product) { ... }
    renderDesktopView() { ... }
}
```

### 3. **Application Controller** (`main.js`)
Controla el flujo general de la aplicación.

```javascript
class App {
    constructor() { ... }
    init() { ... }
    setupResponsiveHandler() { ... }
}
```

---

## 🐛 Debugging

Abre la consola del navegador (**F12**) para ver:
- ✓ Logs de inicialización
- 📱 Vista actual detectada
- ℹ️ Información de la aplicación

```javascript
// La app se expone globalmente para debug
window.app.getAppInfo()
```

---

## 📱 Prueba las Vistas

1. **Desktop**: Abre en navegador completo (>992px)
2. **Tablet**: Reduce ancho a 768px-991px
3. **Mobile**: Reduce ancho a <768px o abre en móvil

Usa **F12 → Toggle device toolbar** para simular dispositivos.

---

## 📚 Recursos

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Patrones de Diseño JS](https://www.patterns.dev/)

---

## 👨‍💻 Autor

Ricardo Medina - Desarrollo Móvil Integral  
Universidad - Diagnóstico Práctico

---

## 📄 Licencia

Este proyecto es para propósitos educativos.

---

**¡Listo! Ahora ejecuta `./start-server.sh` y abre http://localhost:8000** 🚀
