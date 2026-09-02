# 📘 GUÍA COMPLETA DE COMMITS Y GIT WORKFLOW

## 📋 Tabla de Contenidos

1. [Estructura de Commits](#estructura-de-commits)
2. [Tipos de Commits](#tipos-de-commits)
3. [Flujo de Trabajo](#flujo-de-trabajo)
4. [Comandos Rápidos](#comandos-rápidos)
5. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## Estructura de Commits

### Formato Básico (OBLIGATORIO)
```
<tipo>(<scope>): <descripción>
```

### Partes:

1. **tipo**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`
2. **scope**: El área afectada: `html`, `styles`, `scripts`, `images`, `bootstrap`
3. **descripción**: Qué se cambió, en imperativo (máx 50 caracteres)

### Ejemplo Correcto:
```
feat(navbar): agregar menú hamburguesa responsive
```

---

## Tipos de Commits

| Tipo | Cuándo Usar | Ejemplo |
|------|-------------|---------|
| **feat** | Agregar funcionalidad nueva | `feat(scripts): agregar filtro de productos` |
| **fix** | Corregir un error/bug | `fix(styles): corregir ancho en mobile` |
| **docs** | Cambiar documentación | `docs: actualizar guía de instalación` |
| **style** | Formateo, sin cambiar lógica | `style(css): ajustar indentación` |
| **refactor** | Reescribir código, sin cambiar función | `refactor(js): modularizar validaciones` |
| **perf** | Mejorar rendimiento | `perf(images): optimizar carga lazy` |
| **test** | Agregar/modificar tests | `test: crear validación unitaria` |
| **chore** | Tareas de mantenimiento | `chore: actualizar Bootstrap` |
| **ci** | Cambios en CI/CD | `ci: configurar GitHub Actions` |

---

## Flujo de Trabajo

### Paso 1: Preparar Rama
```bash
git checkout main
git pull origin main
git checkout -b feature/mi-funcionalidad
```

### Paso 2: Hacer Cambios
- Editar archivos en VS Code
- Guardar cambios
- Probar localmente

### Paso 3: Commit por Cambio Lógico
```bash
git add archivo1.js archivo2.css
git commit -m "feat(scripts): agregar nueva funcionalidad"
```

### Paso 4: Repetir Paso 2-3
Varios commits pequeños es mejor que uno grande.

### Paso 5: Subir Cambios
```bash
git push origin feature/mi-funcionalidad
```

### Paso 6: Pull Request en GitHub
1. Ir a tu repositorio en GitHub
2. Haz clic en "Compare & pull request"
3. Describe cambios
4. Espera revisión
5. Merge cuando esté aprobado

### Paso 7: Volver a Main
```bash
git checkout main
git pull origin main
```

---

## Comandos Rápidos

### Ver Estado
```bash
git status              # Estado actual
git log --oneline -5    # Últimos 5 commits
git diff               # Ver cambios sin commit
```

### Agregar y Commitear
```bash
git add .              # Agregar todo
git add archivo.js     # Agregar específico
git commit -m "mensaje"
git push origin main
```

### Ramas
```bash
git branch                              # Listar ramas
git checkout -b feature/nombre          # Nueva rama
git checkout main                       # Cambiar rama
```

### Deshacer
```bash
git restore archivo.js                  # Deshacer cambios
git reset --soft HEAD~1                 # Deshacer commit (mantener cambios)
git commit --amend -m "nuevo mensaje"   # Corregir último commit
```

---

## Ejemplos Prácticos

### Agregar Nueva Funcionalidad

```bash
# 1. Crear rama
git checkout -b feature/navbar

# 2. Cambio HTML
git add src/index.html
git commit -m "feat(html): agregar estructura navbar"

# 3. Cambio CSS
git add src/styles/navbar.css
git commit -m "style(styles): estilizar navbar"

# 4. Cambio JavaScript
git add src/scripts/navbar.js
git commit -m "feat(scripts): implementar toggle hamburguesa"

# 5. Subir
git push origin feature/navbar
```

### Corregir Bug

```bash
git checkout -b fix/responsive-spacing
git add src/styles/responsive.css
git commit -m "fix(styles): corregir padding en cards mobile"
git push origin fix/responsive-spacing
```

### Actualizar Documentación

```bash
git add .github/README.md docs/ARCHITECTURE.md
git commit -m "docs: agregar arquitectura del proyecto"
git push origin main
```

---

## Nombres para Este Proyecto

### Por Componente:
```
feat(navbar): ...
feat(hero): ...
feat(products): ...
feat(cards): ...
feat(footer): ...
```

### Por Tipo de Cambio:
```
fix(navbar): corregir error en mobile
style(cards): ajustar estilos
refactor(scripts): modularizar código
docs: actualizar README
```

---

## ✅ Checklist Antes de Commit

- [ ] ¿El código está limpio y formateado?
- [ ] ¿Probé localmente y funciona?
- [ ] ¿El mensaje es claro y descriptivo?
- [ ] ¿Usé el formato correcto `tipo(scope): descripción`?
- [ ] ¿Es un cambio lógico o mezcla varios?

---

## 🎯 Regla de Oro

**Commits pequeños y descriptivos son mejor que commits grandes y vagos.**

Mejor esto:
```
feat(html): agregar navbar
style(styles): estilizar navbar
feat(scripts): agregar toggle hamburguesa
```

Que esto:
```
agregar navbar y funcionalidades
```

---

## 📚 Archivos de Referencia en `.github/`

- `COMMIT_GUIDELINES.md` - Guía completa de commits
- `GIT_CHEAT_SHEET.md` - Comandos rápidos
- `NAMING_CONVENTIONS.md` - Convenciones de nombres
- `COMMIT_EXAMPLES.md` - Ejemplos prácticos

---

**¡Ahora estás listo para hacer commits profesionales! 🚀**
