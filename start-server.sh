#!/bin/bash

# Script para iniciar servidor local
# Requiere tener Python 3 instalado

echo "🚀 Iniciando servidor local en puerto 8000..."
echo "📂 Abriendo proyecto en: http://localhost:8000"
echo "⏹️  Presiona Ctrl+C para detener el servidor"
echo ""

python3 -m http.server 8000 --directory .
