# 🔧 Guía de Git Workflow

## Configuración Inicial

```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
git config --global core.editor "nano"  # o vim, code, etc.
```

## 📌 Ramas Principales

- **main/master**: Código en producción (estable)
- **develop**: Rama de desarrollo
- **feature/nombre**: Nuevas características
- **bugfix/nombre**: Correcciones de bugs
- **hotfix/nombre**: Parches urgentes en producción

## 🚀 Flujo de Trabajo Recomendado

### 1. Crear una rama feature
```bash
git checkout -b feature/agregar-carrito
```

### 2. Hacer cambios y commits
```bash
# Ver estado
git status

# Agregar cambios (all o archivos específicos)
git add .
# o
git add src/scripts/main.js

# Hacer commit con mensaje descriptivo
git commit -m "feat: agregar funcionalidad de carrito de compras"
```

### 3. Ver historial
```bash
# Log simple
git log --oneline

# Log con rama
git log --oneline --all --graph

# Ver cambios específicos
git show HEAD
```

### 4. Fusionar cambios
```bash
# Cambiar a main
git checkout main

# Traer cambios de feature
git merge feature/agregar-carrito

# Eliminar rama (opcional)
git branch -d feature/agregar-carrito
```

## 📝 Tipos de Commits (Conventional Commits)

```
feat:      Nueva característica (Semver minor)
fix:       Corrección de bug (Semver patch)
docs:      Cambios en documentación
style:     Cambios de formato, comillas, espacios (sin lógica)
refactor:  Refactorización sin cambiar funcionalidad
perf:      Mejoras de rendimiento
test:      Agregar o actualizar tests
chore:     Cambios en build, deps, config
ci:        Cambios en CI/CD
```

### Ejemplos de commits buenos:
```bash
git commit -m "feat: agregar búsqueda de productos"
git commit -m "fix: corregir responsive en mobile"
git commit -m "style: mejorar espaciado de cards"
git commit -m "docs: actualizar README con instrucciones"
git commit -m "refactor: separar lógica de renderizado"
git commit -m "chore: actualizar dependencias de Bootstrap"
```

## ❌ Commits Malos (Evitar)
```bash
git commit -m "updated"
git commit -m "fix stuff"
git commit -m "cambios varios"
git commit -m "..."
```

## 🔄 Casos Comunes

### Deshacer último commit (sin perder cambios)
```bash
git reset --soft HEAD~1
```

### Deshacer último commit (perder cambios)
```bash
git reset --hard HEAD~1
```

### Ver cambios no staged
```bash
git diff
```

### Ver cambios staged
```bash
git diff --staged
```

### Actualizar rama con cambios de main
```bash
git fetch origin
git rebase origin/main
```

### Crear tag para versión
```bash
git tag v1.0.0
git push origin v1.0.0
```

## 📊 Visualizar branches
```bash
# Ver ramas locales
git branch

# Ver ramas remotas
git branch -r

# Ver todas
git branch -a
```

## 🔐 .gitignore

El archivo `.gitignore` ya está configurado para ignorar:
- node_modules/
- .env files
- Archivos del IDE (.vscode, .idea)
- Logs
- Archivos del SO (.DS_Store)

## 📤 Trabajar con remoto (GitHub/GitLab)

```bash
# Agregar remoto
git remote add origin https://github.com/usuario/proyecto.git

# Ver remoto configurado
git remote -v

# Subir a remoto
git push origin nombre-rama

# Traer cambios de remoto
git pull origin main
```

## 💡 Tips Profesionales

1. **Commits frecuentes**: Haz commits pequeños y frecuentes
2. **Mensajes claros**: Describe QUÉ y POR QUÉ, no CÓMO
3. **Revisa antes de commitear**: `git diff` antes de `git commit`
4. **Ramas limpias**: Una rama = una característica
5. **Actualiza regularmente**: `git pull` antes de empezar a trabajar
6. **Documenta en README**: Mantén la documentación actualizada

## 🆘 Cheat Sheet Rápido

```bash
# Clonar repo
git clone <url>

# Ver status
git status

# Ver cambios
git diff

# Agregar cambios
git add .

# Commitear
git commit -m "mensaje"

# Ver historial
git log --oneline --all --graph

# Cambiar rama
git checkout nombre-rama

# Crear rama
git checkout -b nombre-rama

# Fusionar
git merge nombre-rama

# Subir cambios
git push origin nombre-rama

# Traer cambios
git pull origin main

# Ver remoto
git remote -v
```

---

**Recuerda**: Buenos commits = Buen historial = Fácil colaboración 🚀
