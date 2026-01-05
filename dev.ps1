# Lunae Solutions - Script de Desenvolvimento PowerShell
# =====================================================

function Show-Menu {
    Clear-Host
    Write-Host "🚀 Lunae Solutions - Scripts de Desenvolvimento" -ForegroundColor Cyan
    Write-Host "=============================================="  -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Escolha uma opção:" -ForegroundColor Yellow
    Write-Host "1. 🔧 Instalar dependências" -ForegroundColor Green
    Write-Host "2. 🚀 Iniciar desenvolvimento" -ForegroundColor Green  
    Write-Host "3. 🏗️  Build de produção" -ForegroundColor Green
    Write-Host "4. 📊 Analisar bundle" -ForegroundColor Green
    Write-Host "5. ✅ Verificar tipos" -ForegroundColor Green
    Write-Host "6. 📋 Lint do código" -ForegroundColor Green
    Write-Host "7. 🎯 Lighthouse audit" -ForegroundColor Green
    Write-Host "8. 🧪 Modo debug" -ForegroundColor Green
    Write-Host "9. 🔄 Limpar cache" -ForegroundColor Green
    Write-Host "0. ❌ Sair" -ForegroundColor Red
    Write-Host ""
}

function Install-Dependencies {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Blue
    npm install
}

function Start-Development {
    Write-Host "🚀 Iniciando servidor de desenvolvimento..." -ForegroundColor Blue
    npm run dev
}

function Build-Production {
    Write-Host "🏗️ Fazendo build de produção..." -ForegroundColor Blue
    npm run build
}

function Analyze-Bundle {
    Write-Host "📊 Analisando bundle..." -ForegroundColor Blue
    $env:ANALYZE = "true"
    npm run build
    $env:ANALYZE = $null
}

function Check-Types {
    Write-Host "✅ Verificando tipos TypeScript..." -ForegroundColor Blue
    npm run type-check
}

function Lint-Code {
    Write-Host "📋 Fazendo lint do código..." -ForegroundColor Blue
    npm run lint
}

function Run-Lighthouse {
    Write-Host "🎯 Executando Lighthouse audit..." -ForegroundColor Blue
    if (Get-Command lighthouse -ErrorAction SilentlyContinue) {
        lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
        Write-Host "📄 Relatório salvo em: ./lighthouse-report.html" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Lighthouse não encontrado. Instale com: npm install -g lighthouse" -ForegroundColor Yellow
    }
}

function Start-Debug {
    Write-Host "🧪 Iniciando modo debug..." -ForegroundColor Blue
    $env:DEBUG = "*"
    npm run dev
    $env:DEBUG = $null
}

function Clear-Cache {
    Write-Host "🔄 Limpando cache..." -ForegroundColor Blue
    if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
    if (Test-Path "node_modules/.cache") { Remove-Item -Recurse -Force "node_modules/.cache" }
    Write-Host "✅ Cache limpo!" -ForegroundColor Green
}

# Loop principal
do {
    Show-Menu
    $choice = Read-Host "Digite sua escolha [0-9]"
    
    switch ($choice) {
        "1" { Install-Dependencies }
        "2" { Start-Development }
        "3" { Build-Production }
        "4" { Analyze-Bundle }
        "5" { Check-Types }
        "6" { Lint-Code }
        "7" { Run-Lighthouse }
        "8" { Start-Debug }
        "9" { Clear-Cache }
        "0" { 
            Write-Host "👋 Até logo!" -ForegroundColor Cyan
            exit 
        }
        default { 
            Write-Host "⚠️  Opção inválida. Tente novamente." -ForegroundColor Red 
        }
    }
    
    if ($choice -ne "0") {
        Write-Host ""
        Read-Host "Pressione Enter para continuar..."
    }
} while ($choice -ne "0")