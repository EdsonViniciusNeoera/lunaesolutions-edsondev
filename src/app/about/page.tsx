"use client";

import { motion } from "framer-motion";
import { ParallaxSection, ScrollReveal, MagneticButton } from "@/components/scroll-animations";
import { FloatingCard, Stagger, StaggerItem } from "@/components/animations";
import { 
  PiCodeBold, 
  PiRobotBold, 
  PiLightbulbBold, 
  PiTargetBold,
  PiWrenchBold,
  PiLightningBold,
  PiRocketLaunchBold,
  PiPaletteBold,
  PiDevicesBold,
  PiShieldBold,
  PiClockBold
} from "react-icons/pi";

export default function About() {
  const features = [
    {
      icon: PiCodeBold,
      color: "text-blue-600 dark:text-blue-400",
      title: "Desenvolvimento Full Stack",
      description: "Criamos aplicações completas, do frontend ao backend, com tecnologias modernas e escaláveis."
    },
    {
      icon: PiRobotBold,
      color: "text-purple-600 dark:text-purple-400", 
      title: "Automação com IA",
      description: "Desenvolvemos agentes inteligentes e soluções de automação para otimizar processos empresariais."
    },
    {
      icon: PiLightbulbBold,
      color: "text-yellow-600 dark:text-yellow-400",
      title: "Consultoria Tech",
      description: "Orientamos negócios na escolha das melhores tecnologias e estratégias digitais."
    },
    {
      icon: PiTargetBold,
      color: "text-green-600 dark:text-green-400",
      title: "Foco em Pequenas Empresas",
      description: "Especializados em soluções acessíveis para negócios locais e pequenas empresas."
    },
    {
      icon: PiWrenchBold,
      color: "text-orange-600 dark:text-orange-400",
      title: "Suporte Personalizado",
      description: "Oferecemos acompanhamento contínuo e suporte técnico personalizado."
    },
    {
      icon: PiLightningBold,
      color: "text-cyan-600 dark:text-cyan-400",
      title: "Resultados Rápidos",
      description: "Metodologias ágeis para entregas eficientes que geram valor desde o primeiro dia."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <ParallaxSection className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </ParallaxSection>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Sobre Nós
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Somos especialistas em transformar negócios locais através de desenvolvimento full stack, automação com IA e consultoria tecnológica personalizada.
          </motion.p>

          <MagneticButton>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Vamos conversar!
            </motion.button>
          </MagneticButton>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Por que escolher a Lunae Solutions?
            </h2>
          </ScrollReveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <StaggerItem key={index}>
                  <FloatingCard className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl h-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      className={`mb-4 ${feature.color}`}
                    >
                      <IconComponent className="text-4xl" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </FloatingCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: 50, suffix: "+", label: "Pequenas Empresas Atendidas", icon: PiTargetBold },
              { number: 30, suffix: "+", label: "Projetos Full Stack", icon: PiCodeBold },
              { number: 15, suffix: "+", label: "Automações com IA", icon: PiRobotBold },
              { number: 24, suffix: "/7", label: "Suporte Técnico", icon: PiClockBold }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-white"
                >
                  <div className="flex justify-center mb-2">
                    <IconComponent className="text-3xl opacity-80" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="text-4xl sm:text-5xl font-bold mb-2"
                  >
                    {stat.number}{stat.suffix}
                  </motion.div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Entre em contato conosco e descubra como nossas soluções podem impulsionar o crescimento da sua empresa.
            </p>
            
            <MagneticButton>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Voltar ao Início
              </motion.a>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}