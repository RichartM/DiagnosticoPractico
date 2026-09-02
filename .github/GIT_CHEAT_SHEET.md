# 🚀 Git Cheat Sheet - Comandos Rápidos

## Configuración Inicial (Primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

## Comandos Básicos de Día a Día

### Ver Estado
```bash
git status              # Ver qué cambió
git log --oneline -10   # Ver últimos 10 commits
```

### Agregar y Commitear
```bash
git add .                                    # Agregar todos los cambios
git add archivo.js                          # Agregar archivo específico
git commit -m "feat(scope): descripción"    # Hacer commit
```

### Enviar Cambios
```bash
git push origin main           # Enviar a rama main
git push origin feature/nombre # Enviar a rama feature
```

### Traer Cambios
```bash
git pull origin main           # Traer cambios de main
```

## Trabajar con Ramas (Branches)

```bash
git branch                              # Listar ramas locales
git branch -a                          # Listar todas las ramas
git checkout -b feature/mi-funcionalidad  # Crear rama nueva
git checkout main                       # Cambiar de rama
git branch -d feature/vieja             # Eliminar rama local
```

## Deshacer Cambios

```bash
git restore archivo.js                  # Deshacer cambios sin commit
git reset --soft HEAD~1                 # Deshacer último commit (mantiene cambios)
git reset --hard HEAD~1                 # Deshacer último commit (elimina cambios)
```

## Corregir Último Commit

```bash
# Si olvidaste agregar algo
git add archivo-olvidado.js
git commit --amend --no-edit

# Si quieres cambiar el mensaje
git commit --amend -m "nuevo mensaje"
```

## Para Este Proyecto Específico

### Estructura de Commits por Archivo

**Para HTML:**
```bash
git commit -m "feat(html): agregar sección de productos"
git commit -m "fix(html): corregir validación de formulario"
```

**Para CSS:**
```bash
git commit -m "style(styles): estilizar cards producto"
git commit -m "feat(styles): agregar media queries responsive"
```

**Para JavaScript:**
```bash
git commit -m "feat(scripts): implementar filtro de productos"
git commit -m "fix(scripts): corregir error en evento click"
```

**Para Bootstrap/Vendors:**
```bash
git commit -m "chore(bootstrap): actualizar versión"
```

**Para Documentación:**
```bash
git commit -m "docs: actualizar README con instrucciones"
```

## Verificar Trabajo

```bash
# Ver lo que va a subir
git diff --cached

# Ver commits sin subir
git log origin/main..HEAD --oneline

# Ver todo el historial
git log --oneline --graph --all
```

---

**Pro Tip:** Haz commits pequeños y frecuentes. Mejor 5 commits descriptivos que 1 commit enorme. ✨
