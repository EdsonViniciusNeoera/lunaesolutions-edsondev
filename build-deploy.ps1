<#
.SYNOPSIS
    Script de Build e Preparação para Deploy Estático
.DESCRIPTION
    Realiza o build do Next.js e prepara os arquivos para deploy em hospedagem estática
.EXAMPLE
    .\build-deploy.ps1
.NOTES
    Autor: Edson Vinicius
    Versão: 1.0
#>

[CmdletBinding()]
param()

# Configurações
$ErrorActionPreference = "Stop"
$OUTPUT_DIR = "out"
$BUILD_DIR = ".next"
$HTACCESS_FILE = ".htaccess"
$SEPARATOR_LENGTH = 60

$REQUIRED_FILES = @(
    "index.html",
    ".htaccess",
    "robots.txt",
    "sitemap.xml",
    "manifest.json"
)

# Funções
function Write-Separator {
    Write-Host ("=" * $SEPARATOR_LENGTH) -ForegroundColor Gray
}

function Write-StepHeader {
    param([string]$Message)
    Write-Host "`n$Message" -ForegroundColor Yellow
}

function Write-Success {
    param([string]$Message)
    Write-Host "   ✓ $Message" -ForegroundColor Green
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "   ✗ $Message" -ForegroundColor Red
}

function Remove-BuildArtifacts {
    Write-StepHeader "🧹 Limpando builds anteriores..."
    
    $dirsToRemove = @($BUILD_DIR, $OUTPUT_DIR)
    
    foreach ($dir in $dirsToRemove) {
        if (Test-Path $dir) {
            Remove-Item -Path $dir -Recurse -Force -ErrorAction SilentlyContinue
            Write-Success "Pasta $dir removida"
        }
    }
}

function Invoke-BuildProcess {
    Write-StepHeader "📦 Executando build do Next.js..."
    
    try {
        npm run build
        
        if ($LASTEXITCODE -ne 0) {
            throw "Build falhou com código de erro: $LASTEXITCODE"
        }
    }
    catch {
        Write-Host "`n❌ Build falhou! Verifique os erros acima." -ForegroundColor Red
        exit 1
    }
}

function Copy-HtaccessFile {
    Write-StepHeader "📄 Copiando .htaccess para pasta $OUTPUT_DIR/..."
    
    if (Test-Path $HTACCESS_FILE) {
        Copy-Item -Path $HTACCESS_FILE -Destination "$OUTPUT_DIR/$HTACCESS_FILE" -Force
        Write-Success ".htaccess copiado com sucesso"
    }
    else {
        Write-Error-Custom ".htaccess não encontrado na raiz do projeto"
    }
}

function Get-DirectoryStats {
    param([string]$Path)
    
    $files = Get-ChildItem -Path $Path -Recurse -File
    $directories = Get-ChildItem -Path $Path -Recurse -Directory
    $totalSize = ($files | Measure-Object -Property Length -Sum).Sum / 1MB
    
    return @{
        FileCount = $files.Count
        DirectoryCount = $directories.Count
        TotalSizeMB = [math]::Round($totalSize, 2)
    }
}

function Test-BuildOutput {
    Write-StepHeader "📊 Verificando arquivos gerados..."
    
    if (-not (Test-Path $OUTPUT_DIR)) {
        Write-Host "   ❌ Pasta $OUTPUT_DIR/ não foi criada!" -ForegroundColor Red
        exit 1
    }
    
    $stats = Get-DirectoryStats -Path $OUTPUT_DIR
    
    Write-Success "Pasta $OUTPUT_DIR/ criada com sucesso"
    Write-Host "   📁 Total de arquivos: $($stats.FileCount)" -ForegroundColor Cyan
    Write-Host "   📂 Total de pastas: $($stats.DirectoryCount)" -ForegroundColor Cyan
    Write-Host "   💾 Tamanho total: $($stats.TotalSizeMB) MB" -ForegroundColor Cyan
}

function Test-RequiredFiles {
    Write-StepHeader "📋 Arquivos principais na pasta $OUTPUT_DIR/:"
    
    foreach ($file in $REQUIRED_FILES) {
        $filePath = Join-Path $OUTPUT_DIR $file
        if (Test-Path $filePath) {
            Write-Success $file
        }
        else {
            Write-Error-Custom "$file (não encontrado)"
        }
    }
    
    # Verificar pasta _next
    $nextDir = Join-Path $OUTPUT_DIR "_next"
    if (Test-Path $nextDir) {
        Write-Success "_next/ (assets do Next.js)"
    }
    else {
        Write-Error-Custom "_next/ não encontrada!"
    }
}

function Show-FinalSummary {
    Write-Host ""
    Write-Separator
    Write-Host "✅ BUILD CONCLUÍDO COM SUCESSO!" -ForegroundColor Green
    Write-Separator
    
    Write-Host "`n📤 Próximos passos:" -ForegroundColor Cyan
    Write-Host "   1. Acesse a pasta $OUTPUT_DIR/" -ForegroundColor White
    Write-Host "   2. Envie TODOS os arquivos para public_html via FTP" -ForegroundColor White
    Write-Host "   3. Certifique-se de que o .htaccess está na raiz" -ForegroundColor White
    Write-Host "   4. Teste o site: https://seudominio.com" -ForegroundColor White
    
    Write-Host "`n💡 Dica: Use FileZilla, WinSCP ou o Gerenciador de Arquivos da hospedagem" -ForegroundColor Yellow
    Write-Host "`n📖 Consulte DEPLOY_HOSPEDAGEM.md para mais detalhes`n" -ForegroundColor Gray
}

# Execução Principal
try {
    Write-Host "`n🚀 Iniciando processo de build para hospedagem estática..." -ForegroundColor Cyan
    Write-Separator
    
    Remove-BuildArtifacts
    Invoke-BuildProcess
    Copy-HtaccessFile
    Test-BuildOutput
    Test-RequiredFiles
    Show-FinalSummary
}
catch {
    Write-Host "`n❌ Erro durante o processo de build: $_" -ForegroundColor Red
    exit 1
}
