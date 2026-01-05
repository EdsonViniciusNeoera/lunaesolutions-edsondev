#!/bin/bash

echo "🚀 Lunae Solutions - Scripts de Desenvolvimento"
echo "=============================================="

# Função para mostrar menu
show_menu() {
    echo ""
    echo "Escolha uma opção:"
    echo "1. 🔧 Instalar dependências"
    echo "2. 🚀 Iniciar desenvolvimento"
    echo "3. 🏗️  Build de produção"
    echo "4. 📊 Analisar bundle"
    echo "5. ✅ Verificar tipos"
    echo "6. 📋 Lint do código"
    echo "7. 🎯 Lighthouse audit"
    echo "8. 🧪 Modo debug"
    echo "9. 🔄 Limpar cache"
    echo "0. ❌ Sair"
    echo ""
}

# Funções para cada opção
install_deps() {
    echo "📦 Instalando dependências..."
    npm install
}

dev_start() {
    echo "🚀 Iniciando servidor de desenvolvimento..."
    npm run dev
}

build_prod() {
    echo "🏗️ Fazendo build de produção..."
    npm run build
}

analyze_bundle() {
    echo "📊 Analisando bundle..."
    npm run analyze
}

type_check() {
    echo "✅ Verificando tipos TypeScript..."
    npm run type-check
}

lint_code() {
    echo "📋 Fazendo lint do código..."
    npm run lint
}

lighthouse_audit() {
    echo "🎯 Executando Lighthouse audit..."
    if command -v lighthouse &> /dev/null; then
        lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
        echo "📄 Relatório salvo em: ./lighthouse-report.html"
    else
        echo "⚠️  Lighthouse não encontrado. Instale com: npm install -g lighthouse"
    fi
}

debug_mode() {
    echo "🧪 Iniciando modo debug..."
    DEBUG=* npm run dev
}

clear_cache() {
    echo "🔄 Limpando cache..."
    rm -rf .next
    rm -rf node_modules/.cache
    echo "✅ Cache limpo!"
}

# Loop principal
while true; do
    show_menu
    read -p "Digite sua escolha [0-9]: " choice
    
    case $choice in
        1) install_deps ;;
        2) dev_start ;;
        3) build_prod ;;
        4) analyze_bundle ;;
        5) type_check ;;
        6) lint_code ;;
        7) lighthouse_audit ;;
        8) debug_mode ;;
        9) clear_cache ;;
        0) echo "👋 Até logo!"; exit 0 ;;
        *) echo "⚠️  Opção inválida. Tente novamente." ;;
    esac
    
    echo ""
    read -p "Pressione Enter para continuar..."
done