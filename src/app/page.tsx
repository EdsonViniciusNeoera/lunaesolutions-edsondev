"use client";

import { 
  FadeInUp, 
  FadeInLeft, 
  AnimatedButton, 
  FloatingCard, 
  Stagger, 
  StaggerItem 
} from "@/components/optimized-animations";
import { 
  TypewriterText, 
  PulseButton 
} from "@/components/hero-animations";
import { WhatsAppTemplate } from "@/components/whatsapp-template";
import { BreadcrumbSchema } from "@/components/seo-schemas";
import dynamic from 'next/dynamic';
import { 
  PiCodeBold, 
  PiRobotBold, 
  PiLightbulbBold, 
  PiTargetBold,
  PiHeartBold,
  PiCurrencyDollarBold,
  PiEnvelopeBold,
  PiWhatsappLogoBold,
  PiCheckCircleBold,
  PiClockBold
} from "react-icons/pi";

// Lazy load do hero pesado
const LazyAnimatedHero = dynamic(
  () => import('@/components/lazy-hero').then(mod => ({ default: mod.LazyAnimatedHero })),
  { 
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 animate-pulse" />
    )
  }
);

export default function Home() {
  const breadcrumbItems = [
    { name: "Início", url: "https://lunaesolutions.dev" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="relative page-container">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-16 hero-container">
          <LazyAnimatedHero />
          
          <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="text-center max-w-6xl mx-auto w-full">
              <FadeInUp>
                <div className="relative">
                  {/* Glow effect behind title */}
                  <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-blue-600/20 dark:via-purple-600/20 dark:to-cyan-600/20 dark:blur-3xl dark:scale-110"></div>
                  <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 sm:mb-8 break-words">
                    <TypewriterText text="Edson Vinicius" />
                  </h1>
                </div>
              </FadeInUp>
              
              <FadeInLeft delay={0.6}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed break-words px-2">
                  Transformo suas ideias em soluções digitais inteligentes. 
                  <br className="hidden sm:block" />
                  <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Desenvolvedor Full Stack • Automação com IA • Consultor Tech
                  </span>
                </p>
              </FadeInLeft>

              <FadeInUp delay={1.2}>
                <div className="flex gap-4 sm:gap-6 items-center justify-center flex-col sm:flex-row px-2">
                  <PulseButton 
                    onClick={() => scrollToSection('servicos')}
                    className="cursor-pointer w-full sm:w-auto"
                  >
                    Meus Serviços
                  </PulseButton>
                  <AnimatedButton 
                    onClick={() => scrollToSection('contato')}
                    variant="secondary"
                    className="cursor-pointer w-full sm:w-auto"
                  >
                    Solicitar Orçamento
                  </AnimatedButton>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto w-full">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meus Serviços
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Ofereço soluções completas para negócios locais e pequenas empresas que desejam crescer no mundo digital
            </p>
          </FadeInUp>

          <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
            <StaggerItem>
              <FloatingCard className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl h-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:shadow-2xl transition-all duration-300">
                <div className="text-blue-600 dark:text-blue-400 mb-6">
                  <PiCodeBold className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Desenvolvimento Full Stack
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Crio aplicações web completas, desde o frontend até o backend, 
                  utilizando tecnologias modernas como React, Next.js, Node.js e bancos de dados eficientes.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>• Websites institucionais</li>
                  <li>• E-commerce personalizado</li>
                  <li>• Sistemas de gestão</li>
                  <li>• APIs e integrações</li>
                </ul>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl h-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:shadow-2xl transition-all duration-300">
                <div className="text-purple-600 dark:text-purple-400 mb-6">
                  <PiRobotBold className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Automação e Agentes de IA
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Desenvolvo soluções inteligentes de automação e agentes de IA 
                  personalizados para otimizar processos e aumentar a produtividade do seu negócio.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>• Chatbots inteligentes</li>
                  <li>• Automação de processos</li>
                  <li>• Análise de dados com IA</li>
                  <li>• Assistentes virtuais</li>
                </ul>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl h-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:shadow-2xl transition-all duration-300">
                <div className="text-cyan-600 dark:text-cyan-400 mb-6">
                  <PiLightbulbBold className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">
                  Consultoria Tech
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Oriento sua empresa na transformação digital, ajudando na escolha 
                  das melhores tecnologias e estratégias para alcançar seus objetivos.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>• Auditoria tecnológica</li>
                  <li>• Planejamento estratégico</li>
                  <li>• Migração para nuvem</li>
                  <li>• Treinamento de equipes</li>
                </ul>
              </FloatingCard>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Por que trabalhar comigo?
            </h2>
          </FadeInUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400 flex items-center">
                  <PiTargetBold className="mr-2" /> Foco em Negócios Locais
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Entendo as necessidades específicas de pequenas empresas e negócios locais, 
                  oferecendo soluções personalizadas e acessíveis.
                </p>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400 flex items-center">
                  <PiCodeBold className="mr-2" /> Tecnologias Modernas
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilizamos as mais recentes tecnologias e melhores práticas do mercado 
                  para garantir soluções eficientes e escaláveis.
                </p>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400 flex items-center">
                  <PiHeartBold className="mr-2" /> Suporte Personalizado
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ofereço acompanhamento contínuo e suporte personalizado 
                  para garantir o sucesso dos seus projetos.
                </p>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center">
                  <PiCurrencyDollarBold className="mr-2" /> Preços Justos
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pratico preços competitivos e transparentes, 
                  com planos flexíveis que se adaptam ao seu orçamento.
                </p>
              </FloatingCard>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto w-full">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Entre em contato comigo e descubra como posso ajudar sua empresa a crescer no mundo digital
              </p>
            </div>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
            {/* Contact Info */}
            <FadeInLeft>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Outras formas de contato
                  </h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:viniciuspereira76@hotmail.com"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-white hover:scale-102"
                    >
                      <PiEnvelopeBold className="mr-3" /> viniciuspereira76@hotmail.com
                    </a>
                    
                    <a 
                      href="https://wa.me/5581999045078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-102"
                    >
                      <PiWhatsappLogoBold className="mr-3" /> WhatsApp Direto
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <PiClockBold className="mr-3 text-blue-500" />
                        <span>Resposta em até 24 horas</span>
                      </div>
                      <div className="flex items-center">
                        <PiCurrencyDollarBold className="mr-3 text-green-500" />
                        <span>Orçamento gratuito</span>
                      </div>
                      <div className="flex items-center">
                        <PiCheckCircleBold className="mr-3 text-purple-500" />
                        <span>Consultoria inicial sem compromisso</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
                  <div className="flex items-center mb-3">
                    <PiHeartBold className="mr-2 text-2xl" />
                    <h4 className="font-bold text-lg">Por que escolher meus serviços?</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Foco em pequenas e médias empresas</li>
                    <li>✅ Soluções personalizadas para seu negócio</li>
                    <li>✅ Suporte técnico continuado</li>
                    <li>✅ Preços justos e transparentes</li>
                    <li>✅ Entrega dentro do prazo</li>
                  </ul>
                </div>
              </div>
            </FadeInLeft>

            {/* WhatsApp Template */}
            <FadeInUp delay={0.5}>
              <WhatsAppTemplate className="sticky top-8" />
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center w-full">
          <FadeInUp>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Edson Vinicius
            </h3>
            <p className="text-gray-300 mb-4">
              Desenvolvedor Full Stack • Soluções digitais inteligentes para seu negócio
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Edson Vinicius - Lunae Solutions. Todos os direitos reservados.
            </p>
          </FadeInUp>
        </div>
      </footer>
      </div>
    </>
  );
}