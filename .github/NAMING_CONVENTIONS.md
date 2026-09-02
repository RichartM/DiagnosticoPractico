# 📝 Convenciones de Nombres - Proyecto

## Variables JavaScript (camelCase)
```javascript
const userName = "Juan";
const productId = 123;
const isVisible = true;
const maxRetries = 5;
```

## Clases JavaScript (PascalCase)
```javascript
class ProductCard { }
class ShoppingCart { }
class NavbarToggle { }
```

## Constantes (UPPER_SNAKE_CASE)
```javascript
const API_BASE_URL = "https://api.example.com";
const MAX_ITEMS = 100;
const MOBILE_BREAKPOINT = 768;
```

## CSS Classes (kebab-case)
```css
.product-card { }
.navbar-toggle { }
.form-group { }
.btn-primary { }
```

## IDs HTML (kebab-case)
```html
<div id="navbar-container"></div>
<button id="mobile-menu-toggle"></button>
<section id="products-section"></section>
```

## Archivos (lowercase-con-guion)
```
main.js
navbar.js
product-card.js
styles.css
mobile-styles.css
```

## Carpetas
```
src/
  styles/
  scripts/
  images/
vendors/
  bootstrap/
docs/
.github/
```

## Convención por Tipo de Archivo

### Funciones Específicas
```javascript
// Event handlers: handle + Acción
function handleMenuToggle() { }
function handleProductClick() { }
function handleFormSubmit() { }

// Getters: get + Dato
function getProductData() { }
function getMenuItems() { }

// Setters: set + Dato
function setActiveClass() { }
function setProductList() { }

// Validadores: is/has + Condición
function isVisible() { }
function hasError() { }

// Inicializadores: init + Componente
function initNavbar() { }
function initProducts() { }
```

## Nombrado de Commits (Scopos Comunes)

```
feat(html)      - Cambios en HTML
feat(styles)    - Cambios en CSS
feat(scripts)   - Cambios en JavaScript
feat(images)    - Nuevas imágenes
fix(html)       - Correcciones en HTML
fix(styles)     - Correcciones en CSS
fix(scripts)    - Correcciones en JavaScript
docs            - Documentación
```

---

**Mantén la consistencia en todo el proyecto.** ✨
