# Guia de Uso - Animações com Framer Motion

Este guia explica como utilizar os componentes de animação criados para o projeto Lunae Solutions.

## Componentes Básicos

### FadeInUp
Animação de fade in com movimento vertical.

```tsx
import { FadeInUp } from "@/components/animations";

<FadeInUp delay={0.5} className="text-center">
  <h1>Título que aparece suavemente</h1>
</FadeInUp>
```

### AnimatedButton
Botão com animações de hover e tap.

```tsx
import { AnimatedButton } from "@/components/animations";

<AnimatedButton href="/contact" variant="primary">
  Clique aqui
</AnimatedButton>
```

### FloatingCard
Cartão com efeito de flutuação no hover.

```tsx
import { FloatingCard } from "@/components/animations";

<FloatingCard className="p-6 border rounded-lg" delay={0.2}>
  <h3>Título do cartão</h3>
  <p>Conteúdo do cartão</p>
</FloatingCard>
```

## Animações Escalonadas

### Stagger & StaggerItem
Para animar múltiplos elementos em sequência.

```tsx
import { Stagger, StaggerItem } from "@/components/animations";

<Stagger className="grid grid-cols-3 gap-4">
  <StaggerItem>
    <div>Item 1</div>
  </StaggerItem>
  <StaggerItem>
    <div>Item 2</div>
  </StaggerItem>
  <StaggerItem>
    <div>Item 3</div>
  </StaggerItem>
</Stagger>
```

## Animações de Hero

### AnimatedHero
Background com partículas animadas e gradientes.

```tsx
import { AnimatedHero } from "@/components/hero-animations";

<div className="relative">
  <AnimatedHero />
  <div className="relative z-10">
    {/* Seu conteúdo aqui */}
  </div>
</div>
```

### TypewriterText
Efeito de máquina de escrever.

```tsx
import { TypewriterText } from "@/components/hero-animations";

<h1>
  <TypewriterText text="Lunae Solutions" />
</h1>
```

### PulseButton
Botão com efeito de pulso e brilho.

```tsx
import { PulseButton } from "@/components/hero-animations";

<PulseButton href="/about">
  Saiba mais
</PulseButton>
```

## Animações de Scroll

### ParallaxSection
Efeito parallax baseado no scroll.

```tsx
import { ParallaxSection } from "@/components/scroll-animations";

<ParallaxSection className="py-20">
  <h2>Conteúdo com parallax</h2>
</ParallaxSection>
```

### ScrollReveal
Revela conteúdo conforme o usuário faz scroll.

```tsx
import { ScrollReveal } from "@/components/scroll-animations";

<ScrollReveal>
  <div>Este conteúdo aparece ao fazer scroll</div>
</ScrollReveal>
```

### MagneticButton
Botão que segue o movimento do mouse.

```tsx
import { MagneticButton } from "@/components/scroll-animations";

<MagneticButton>
  <button>Botão magnético</button>
</MagneticButton>
```

## Dicas de Performance

1. **Use `viewport={{ once: true }}`** para animações que devem executar apenas uma vez
2. **Defina delays apropriados** para criar sequências naturais
3. **Evite animar muitos elementos simultaneamente** para manter a performance
4. **Use `will-change: transform`** no CSS para elementos que serão animados frequentemente

## Personalização

Todos os componentes aceitam:
- `className` - Classes CSS customizadas
- `delay` - Atraso antes da animação iniciar
- `children` - Conteúdo a ser animado

### Exemplo de uso avançado:

```tsx
"use client";

import { motion } from "framer-motion";
import { FadeInUp, AnimatedButton } from "@/components/animations";

export default function CustomPage() {
  return (
    <div className="min-h-screen p-8">
      <FadeInUp delay={0.2}>
        <h1 className="text-4xl font-bold">Página Customizada</h1>
      </FadeInUp>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p>Conteúdo com animação personalizada</p>
      </motion.div>
      
      <AnimatedButton variant="primary">
        Botão Animado
      </AnimatedButton>
    </div>
  );
}
```