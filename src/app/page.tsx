"use client";

import { 
  FadeInUp, 
  FadeInLeft, 
  AnimatedButton, 
  FloatingCard, 
  Stagger, 
  StaggerItem 
} from "@/components/animations";
import { 
  AnimatedHero, 
  TypewriterText, 
  PulseButton 
} from "@/components/hero-animations";
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

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16">
        <AnimatedHero />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
          <div className="text-center max-w-6xl mx-auto">
            <FadeInUp>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-8">
                <TypewriterText text="Lunae Solutions" />
              </h1>
            </FadeInUp>
            
            <FadeInLeft delay={0.8}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transformamos ideias em soluções digitais inteligentes. 
                <br />
                <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Desenvolvimento Full Stack • Automação com IA • Consultoria Tech
                </span>
              </p>
            </FadeInLeft>

            <FadeInUp delay={1.5}>
              <div className="flex gap-6 items-center justify-center flex-col sm:flex-row">
                <PulseButton 
                  onClick={() => scrollToSection('servicos')}
                  className="cursor-pointer"
                >
                  Nossos Serviços
                </PulseButton>
                <AnimatedButton 
                  onClick={() => scrollToSection('contato')}
                  variant="secondary"
                  className="cursor-pointer"
                >
                  Solicitar Orçamento
                </AnimatedButton>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Oferecemos soluções completas para negócios locais e pequenas empresas que desejam crescer no mundo digital
            </p>
          </FadeInUp>

          <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <FloatingCard className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl h-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:shadow-2xl transition-all duration-300">
                <div className="text-blue-600 dark:text-blue-400 mb-6">
                  <PiCodeBold className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Desenvolvimento Full Stack
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Criamos aplicações web completas, desde o frontend até o backend, 
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
              <FloatingCard className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl h-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:shadow-2xl transition-all duration-300" delay={0.1}>
                <div className="text-purple-600 dark:text-purple-400 mb-6">
                  <PiRobotBold className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Automação e Agentes de IA
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Desenvolvemos soluções inteligentes de automação e agentes de IA 
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
              <FloatingCard className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl h-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 hover:shadow-2xl transition-all duration-300" delay={0.2}>
                <div className="text-cyan-600 dark:text-cyan-400 mb-6">
                  <PiLightbulbBold className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">
                  Consultoria Tech
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Orientamos sua empresa na transformação digital, ajudando na escolha 
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
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Por que escolher a Lunae Solutions?
            </h2>
          </FadeInUp>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400 flex items-center">
                  <PiTargetBold className="mr-2" /> Foco em Negócios Locais
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Entendemos as necessidades específicas de pequenas empresas e negócios locais, 
                  oferecendo soluções personalizadas e acessíveis.
                </p>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80" delay={0.1}>
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
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80" delay={0.2}>
                <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400 flex items-center">
                  <PiHeartBold className="mr-2" /> Suporte Personalizado
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Oferecemos acompanhamento contínuo e suporte personalizado 
                  para garantir o sucesso dos seus projetos.
                </p>
              </FloatingCard>
            </StaggerItem>

            <StaggerItem>
              <FloatingCard className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80" delay={0.3}>
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center">
                  <PiCurrencyDollarBold className="mr-2" /> Preços Justos
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Praticamos preços competitivos e transparentes, 
                  com planos flexíveis que se adaptam ao seu orçamento.
                </p>
              </FloatingCard>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer no mundo digital
            </p>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <AnimatedButton 
                href="mailto:contato@lunaesolutions.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center"
              >
                <PiEnvelopeBold className="mr-2" /> contato@lunaesolutions.com
              </AnimatedButton>
              <AnimatedButton 
                href="https://wa.me/5511999999999"
                variant="secondary"
                className="flex items-center"
              >
                <PiWhatsappLogoBold className="mr-2" /> WhatsApp
              </AnimatedButton>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <p className="text-gray-500 dark:text-gray-400 flex flex-wrap justify-center items-center gap-4">
              <span className="flex items-center">
                <PiClockBold className="mr-1" /> Resposta em até 24 horas
              </span>
              <span className="flex items-center">
                <PiCurrencyDollarBold className="mr-1" /> Orçamento gratuito
              </span>
              <span className="flex items-center">
                <PiCheckCircleBold className="mr-1" /> Consultoria inicial sem compromisso
              </span>
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInUp>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lunae Solutions
            </h3>
            <p className="text-gray-300 mb-4">
              Soluções digitais inteligentes para negócios locais e pequenas empresas
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Lunae Solutions. Todos os direitos reservados.
            </p>
          </FadeInUp>
        </div>
      </footer>
    </div>
  );
}