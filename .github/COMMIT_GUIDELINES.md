# 📋 Guía de Commits - Workflow GitHub

## Convención de Commits (Conventional Commits)

Usamos la convención de commits estándar para mantener un historial limpio y profesional.

### Formato Base
```
<tipo>(<scope>): <descripción>

<cuerpo (opcional)>

<footer (opcional)>
```

---

## Tipos de Commits

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| **feat** | Nueva funcionalidad | `feat(navbar): agregar menú hamburguesa responsive` |
| **fix** | Corrección de bug | `fix(styles): corregir ancho de contenedor en mobile` |
| **docs** | Cambios en documentación | `docs: actualizar README con instrucciones` |
| **style** | Cambios de formato (sin lógica) | `style(css): formatear indentación` |
| **refactor** | Refactorizar código | `refactor(scripts): modularizar funciones` |
| **perf** | Mejoras de rendimiento | `perf(js): optimizar carga de imágenes` |
| **test** | Agregar/modificar tests | `test: crear tests para validación` |
| **chore** | Tareas de configuración | `chore: instalar dependencias` |
| **ci** | Cambios en CI/CD | `ci: configurar workflows` |

---

## Scope (Alcance)

Indica qué parte del proyecto afecta:
- `html` - Cambios en archivos HTML
- `styles` - Cambios en CSS
- `scripts` - Cambios en JavaScript
- `images` - Cambios en recursos
- `config` - Cambios en configuración
- `bootstrap` - Cambios en dependencias

---

## Reglas para la Descripción

✅ **Hacer:**
- Usar imperativo: "agregar", "corregir", "refactorizar"
- Mantener menos de 50 caracteres
- Ser específico y descriptivo
- Comenzar con minúscula

❌ **Evitar:**
- "actualizado", "agregado" (pasado)
- Descripciones vagas: "cambios", "fix varios"
- Puntos finales en la descripción

---

## Ejemplos de Commits Correctos

### Commit Simple (sin cuerpo)
```bash
git commit -m "feat(navbar): agregar navegación responsive con Bootstrap"
```

### Commit con Cuerpo (más detallado)
```bash
git commit -m "fix(styles): corregir espaciado en cards mobile

- Reducir padding en dispositivos pequeños
- Ajustar ancho máximo a 100%
- Mejorar legibilidad en pantallas <576px"
```

### Commit de Documentación
```bash
git commit -m "docs: agregar guía de commits y workflow"
```

### Commit de Refactorización
```bash
git commit -m "refactor(scripts): separar lógica en módulos

- Crear módulo para manejo de eventos
- Crear módulo para validaciones
- Mejorar mantenibilidad del código"
```

---

## Workflow Recomendado

### 1️⃣ Antes de empezar
```bash
git status                    # Ver estado actual
git pull origin main          # Traer cambios remotos
```

### 2️⃣ Hacer cambios
```bash
# Editar archivos en tu editor
# Crear nuevos archivos
# Modificar estilos o funcionalidad
```

### 3️⃣ Preparar cambios
```bash
git add .                     # Agregar todos los cambios
# O específicamente:
git add src/styles/style.css
git add src/scripts/main.js
```

### 4️⃣ Hacer commit
```bash
git commit -m "tipo(scope): descripción corta"
```

### 5️⃣ Enviar a GitHub
```bash
git push origin main          # O tu rama actual
```

---

## Ejemplo Completo de Flujo

```bash
# 1. Crear feature para navbar
git checkout -b feature/navbar-responsive

# 2. Hacer cambios...

# 3. Commits durante el desarrollo
git add src/index.html
git commit -m "feat(html): agregar estructura navbar"

git add src/styles/navbar.css
git commit -m "style(navbar): estilizar navegación desktop"

git add src/scripts/navbar.js
git commit -m "feat(navbar): implementar toggle hamburguesa"

# 4. Push a rama feature
git push origin feature/navbar-responsive

# 5. Desde GitHub, hacer Pull Request (PR) a main
# 6. Después de revisar, hacer merge

# 7. Volver a main
git checkout main
git pull origin main
```

---

## Convenciones Adicionales

### Para la rama principal (main/master)
- ✅ Commits limpios y descriptivos
- ✅ Squash commits similares si es necesario
- ❌ No hacer commits sin descripción
- ❌ No mezclar múltiples funcionalidades en un commit

### Para branches de feature
- ✅ Commits frecuentes y atómicos (un cambio por commit)
- ✅ Commits descriptivos para revisar fácilmente
- ✅ Push regular al repositorio

### Mensaje de Merge (Pull Request)
```
Merge branch 'feature/navbar-responsive' into main

Cambios principales:
- Agregar navegación responsive
- Implementar menú hamburguesa
- Estilos para mobile-first
```

---

## Verificar tu historial

```bash
# Ver últimos commits
git log --oneline -5

# Ver commits en formato bonito
git log --oneline --graph --all

# Ver cambios en un commit específico
git show <commit-hash>
```

---

## ⚠️ Cambios comunes en el proyecto

| Acción | Comando |
|--------|---------|
| Cambios en HTML | `git commit -m "feat(html): descripción del cambio"` |
| Cambios en estilos CSS | `git commit -m "style(styles): descripción"` |
| Cambios en funcionalidad JS | `git commit -m "feat(scripts): descripción"` |
| Agregar imagen | `git commit -m "feat(images): agregar <nombre>"` |
| Corregir bug | `git commit -m "fix(scope): descripción del fix"` |
| Documentación | `git commit -m "docs: descripción"` |

---

## Resumen Rápido

**Estructura mínima:**
```
<tipo>(<scope>): <descripción>
```

**Ejemplo mínimo:**
```bash
git commit -m "feat(navbar): agregar menú hamburguesa"
```

¡Listo! Ahora estás preparado para hacer commits profesionales. 🚀
