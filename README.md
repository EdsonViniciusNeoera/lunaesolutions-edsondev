# Edson Vinicius - Lunae Solutions

Site profissional de Edson Vinicius, desenvolvedor Full Stack especializado em soluções digitais inteligentes para pequenas empresas.

## Sobre o Profissional

Edson Vinicius é um desenvolvedor Full Stack e consultor tech que oferece:

- **Desenvolvimento Full Stack**: Aplicações web completas com React, Next.js, Node.js
- **Automação com IA**: Chatbots inteligentes e soluções de automação personalizadas  
- **Consultoria Tech**: Orientação estratégica para transformação digital de negócios

## Tecnologias Utilizadas

- **Next.js 15** - Framework React para aplicações web
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework de estilos utilitários
- **Framer Motion** - Biblioteca de animações para React
- **ESLint** - Linter para qualidade de código

## Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/EdsonViniciusNeoera/lunaesolutions-edsondev.git

# Navegue até o diretório
cd lunaesolutions-edsondev

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
# Gere o build estático para hospedagem compartilhada
npm run build

# Ou use o script automatizado (Windows)
.\build-deploy.ps1
```

**📦 Deploy em Hospedagem Compartilhada:**

Este projeto está configurado para exportação estática (`output: 'export'`), permitindo hospedagem em servidores compartilhados tradicionais (Hostinger, GoDaddy, Locaweb, etc.) sem necessidade de Node.js.

Após o build, a pasta `out/` contém todos os arquivos estáticos prontos para upload:
- Envie **todo o conteúdo** de `out/` para `public_html`
- Inclua o arquivo `.htaccess` para configurações de cache e segurança
- Compatível com Apache/Nginx
- Sem custo adicional de VPS ou serviços Node.js

📖 **Guias de Deploy:**
- `DEPLOY_CHECKLIST.md` - Checklist rápido de 3 passos
- `DEPLOY_HOSPEDAGEM.md` - Guia completo com troubleshooting

### Preview Local

```bash
# Testar build estático localmente
npm run preview:static
```

## Contato

**Edson Vinicius**
- Email: viniciuspereira76@hotmail.com
- LinkedIn: [linkedin.com/in/edsonvinicius](https://linkedin.com/in/edsonvinicius)
- WhatsApp: [Entre em contato](https://wa.me/5581999904-5078)

Especialista em desenvolvimento Full Stack, automação com IA e consultoria tecnológica para pequenas empresas e negócios locais.

## Estrutura do Projeto

```
lunaesolutions/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── animations.tsx
│       ├── hero-animations.tsx
│       └── scroll-animations.tsx
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Componentes de Animação

### Animações Básicas (`animations.tsx`)
- `FadeInUp` - Fade in com movimento para cima
- `FadeInLeft` - Fade in com movimento da esquerda
- `ScaleIn` - Animação de escala
- `AnimatedButton` - Botões com hover e tap animations
- `FloatingCard` - Cartões com efeito de flutuação
- `Stagger` & `StaggerItem` - Animações escalonadas

### Animações de Hero (`hero-animations.tsx`)
- `AnimatedHero` - Background animado com partículas e gradientes
- `TypewriterText` - Efeito de máquina de escrever
- `PulseButton` - Botão com efeito de pulso e brilho

### Animações de Scroll (`scroll-animations.tsx`)
- `ParallaxSection` - Efeito parallax baseado em scroll
- `ScrollReveal` - Revelação de conteúdo ao fazer scroll
- `MagneticButton` - Botão com efeito magnético do mouse
- `CountUpNumber` - Contador animado

## Funcionalidades

- ✅ **Exportação Estática** - Deploy em hospedagem compartilhada
- ✅ **Next.js 15** - App Router com exportação estática
- ✅ TypeScript configurado
- ✅ Tailwind CSS para estilização
- ✅ Framer Motion para animações fluidas
- ✅ ESLint para qualidade de código
- ✅ **SEO Otimizado** - Meta tags, sitemap, robots.txt
- ✅ **Performance** - Lighthouse 90+, First Load < 200KB
- ✅ Responsivo e mobile-first
- ✅ Animações interativas e parallax
- ✅ Componentes reutilizáveis de animação
- ✅ Efeitos visuais avançados (partículas, gradientes)
- ✅ **Cache e Compressão** - Configurado via .htaccess
- ✅ **Headers de Segurança** - CSP, HTTPS, XSS Protection

## Otimizações

### Performance
- ⚡ Build otimizado com Next.js compiler
- 🗜️ Compressão GZIP via .htaccess
- 💾 Cache agressivo de assets estáticos (1 ano)
- 📦 Code splitting automático
- 🎨 Otimização de CSS experimental

### SEO
- 🔍 Meta tags dinâmicas por página
- 🗺️ Sitemap.xml gerado automaticamente
- 🤖 Robots.txt configurado
- 📱 Manifest.json para PWA
- 🌐 Open Graph e Twitter Cards

### Hospedagem
- 🏠 Compatível com hospedagem compartilhada
- 💰 Sem custo de servidor Node.js
- 🔒 HTTPS forçado via .htaccess
- 🚀 CDN-ready (arquivos estáticos)
- 📊 Analytics-ready

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.