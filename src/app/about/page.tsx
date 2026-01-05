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
      description: "Crio aplicações completas, do frontend ao backend, com tecnologias modernas e escaláveis."
    },
    {
      icon: PiRobotBold,
      color: "text-purple-600 dark:text-purple-400", 
      title: "Automação com IA",
      description: "Desenvolvo agentes inteligentes e soluções de automação para otimizar processos empresariais."
    },
    {
      icon: PiLightbulbBold,
      color: "text-yellow-600 dark:text-yellow-400",
      title: "Consultoria Tech",
      description: "Oriento negócios na escolha das melhores tecnologias e estratégias digitais."
    },
    {
      icon: PiTargetBold,
      color: "text-green-600 dark:text-green-400",
      title: "Foco em Pequenas Empresas",
      description: "Especializado em soluções acessíveis para negócios locais e pequenas empresas."
    },
    {
      icon: PiWrenchBold,
      color: "text-orange-600 dark:text-orange-400",
      title: "Suporte Personalizado",
      description: "Ofereço acompanhamento contínuo e suporte técnico personalizado."
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
            Sobre Mim
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Sou especialista em transformar negócios locais através de desenvolvimento full stack, automação com IA e consultoria tecnológica personalizada.
          </motion.p>

          <MagneticButton>
            <motion.a
              href="mailto:viniciuspereira76@hotmail.com?subject=Olá, gostaria de conversar sobre um projeto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Vamos conversar!
            </motion.a>
          </MagneticButton>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Por que trabalhar comigo?
            </h2>
          </motion.div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <StaggerItem key={index}>
                  <FloatingCard className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl h-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
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
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { number: 8, suffix: "+", label: "Apps e Games", icon: PiTargetBold },
              { number: 4, suffix: "+", label: "Web Apps", icon: PiCodeBold },
              { number: 6, suffix: "+", label: "Consultorias", icon: PiLightbulbBold },
              { number: 3, suffix: "+", label: "Automações com IA", icon: PiRobotBold },
              { number: 5, suffix: " anos", label: "Experiência", icon: PiClockBold }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="text-white"
                >
                  <div className="flex justify-center mb-2">
                    <IconComponent className="text-3xl opacity-80" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Vamos transformar sua ideia em realidade! Entre em contato e receba uma proposta personalizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton>
                <motion.a
                  href="mailto:viniciuspereira76@hotmail.com?subject=Solicitação de Orçamento"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Solicitar Orçamento
                </motion.a>
              </MagneticButton>
              
              <MagneticButton>
                <motion.a
                  href="https://wa.me/5581999904-5078?text=Olá! Vi seu site e gostaria de conversar sobre um projeto."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  WhatsApp
                </motion.a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}