# 💡 Ejemplos Prácticos de Commits para Este Proyecto

## Ejemplo 1: Agregar Nueva Funcionalidad (navbar)

**Paso 1:** Crear rama
```bash
git checkout -b feature/navbar-responsive
```

**Paso 2:** Hacer cambios y commits

```bash
# Cambio 1: Agregar HTML
git add src/index.html
git commit -m "feat(html): agregar estructura navbar con Bootstrap"
```

```bash
# Cambio 2: Estilizar
git add src/styles/navbar.css
git commit -m "style(styles): crear estilos para navbar desktop y mobile"
```

```bash
# Cambio 3: Agregar interactividad
git add src/scripts/navbar.js
git commit -m "feat(scripts): implementar toggle hamburguesa para mobile"
```

**Resultado en historial:**
```
feat(scripts): implementar toggle hamburguesa para mobile
style(styles): crear estilos para navbar desktop y mobile
feat(html): agregar estructura navbar con Bootstrap
```

---

## Ejemplo 2: Corregir un Bug en Estilos

```bash
git checkout -b fix/mobile-spacing

# Editar archivo CSS
git add src/styles/responsive.css
git commit -m "fix(styles): corregir padding excesivo en cards mobile

- Reducir padding de 20px a 10px en pantallas <576px
- Ajustar margin-bottom para mejor espaciado
- Verificar en iPhone 12 y tablets"
```

---

## Ejemplo 3: Agregar Imágenes/Recursos

```bash
# Agregar imagen
git add src/images/product-1.jpg
git commit -m "feat(images): agregar foto de producto 1

Enlace de referencia: https://unsplash.com/photos/xxxx"
```

---

## Ejemplo 4: Refactorizar Código JavaScript

```bash
git checkout -b refactor/modular-scripts

# Crear módulo para eventos
git add src/scripts/events.js
git commit -m "refactor(scripts): extraer lógica de eventos en módulo

- Crear módulo events.js
- Centralizar event listeners
- Mejorar mantenibilidad"

# Crear módulo para utilidades
git add src/scripts/utils.js
git commit -m "refactor(scripts): crear módulo de utilidades

- Crear utils.js con funciones reutilizables
- Funciones: getElement(), addClass(), removeClass()"
```

---

## Ejemplo 5: Actualizar Documentación

```bash
git add .github/README.md docs/ARCHITECTURE.md
git commit -m "docs: agregar guía de arquitectura y setup

- Documentar estructura de carpetas
- Agregar instrucciones de instalación
- Documentar patrones de diseño usados"
```

---

## Workflow Completo: De Inicio a Fin

```bash
# 1. Actualizar rama principal
git checkout main
git pull origin main

# 2. Crear rama para nueva feature
git checkout -b feature/product-filters

# 3. Hacer cambios HTML
# ... editar archivos ...
git add src/index.html
git commit -m "feat(html): agregar formulario de filtros en sidebar"

# 4. Hacer cambios CSS
# ... editar archivos ...
git add src/styles/filters.css
git commit -m "style(styles): estilizar sidebar con filtros"

# 5. Hacer cambios JavaScript
# ... editar archivos ...
git add src/scripts/filters.js
git commit -m "feat(scripts): implementar lógica de filtros

- Filtrar por precio
- Filtrar por categoría
- Aplicar múltiples filtros simultáneamente"

# 6. Actualizar documentación
# ... editar archivos ...
git add docs/FEATURES.md
git commit -m "docs: documentar nueva funcionalidad de filtros"

# 7. Subir rama
git push origin feature/product-filters

# 8. En GitHub: Crear Pull Request (PR)
# - Título: "Agregar filtros de productos"
# - Descripción: Listar cambios principales
# - Hacer merge cuando esté aprobado

# 9. Volver a main
git checkout main
git pull origin main
```

---

## Commits Malos vs Buenos

### ❌ MALO
```bash
git commit -m "cambios"
git commit -m "fix varios"
git commit -m "actualizaciones"
```

### ✅ BUENO
```bash
git commit -m "feat(scripts): agregar validación de email en formulario"
git commit -m "fix(styles): corregir altura de hero en mobile"
git commit -m "docs: actualizar instrucciones de instalación"
```

---

## Regla de Oro

**Un commit = Un cambio lógico**

No hagas commits que mezclen múltiples funcionalidades. Mejor varios commits pequeños que uno grande.

```bash
# ❌ Evitar
git commit -m "agregar navbar, filtros y validación"

# ✅ Hacer
git commit -m "feat(html): agregar estructura navbar"
git commit -m "feat(html): agregar formulario de filtros"
git commit -m "feat(scripts): agregar validación"
```

---

## Verificar tu Trabajo

Antes de hacer push, verifica:

```bash
# Ver commits sin subir
git log origin/main..HEAD --oneline

# Ver archivos modificados
git status

# Ver diferencias
git diff --stat
```

---

**Recuerda:** Los commits son tu historial de trabajo. Hazlos claros y descriptivos. 📚
