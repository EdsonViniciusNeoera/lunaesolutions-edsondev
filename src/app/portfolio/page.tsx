"use client";

import { motion } from "framer-motion";
import { FadeInUp, FloatingCard, Stagger, StaggerItem, AnimatedButton } from "@/components/animations";
import { TypewriterText } from "@/components/hero-animations";
import { 
  PiStorefrontBold, 
  PiRobotBold, 
  PiCloudBold, 
  PiShoppingCartBold,
  PiChartLineBold,
  PiShieldCheckBold,
  PiRocketLaunchBold,
  PiHeartBold,
  PiCurrencyDollarBold,
  PiWrenchBold
} from "react-icons/pi";

export default function Portfolio() {
  const projects = [
    {
      title: "Sistema de Gestão Comercial",
      category: "Full Stack",
      description: "Plataforma completa para gestão de vendas, estoque e relatórios para pequenos comércios.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      icon: PiStorefrontBold,
      color: "text-blue-600 dark:text-blue-400",
      features: ["Dashboard intuitivo", "Gestão de estoque", "Relatórios automáticos", "Pagamentos online"]
    },
    {
      title: "Chatbot Inteligente para Restaurante", 
      category: "IA & Automação",
      description: "Agente de IA que automatiza pedidos via WhatsApp e gerencia reservas de mesa.",
      tech: ["OpenAI API", "Node.js", "WhatsApp API", "MongoDB"],
      icon: PiRobotBold,
      color: "text-purple-600 dark:text-purple-400",
      features: ["Pedidos automatizados", "Reservas inteligentes", "Cardápio dinâmico", "Suporte 24/7"]
    },
    {
      title: "Consultoria de Migração para Nuvem",
      category: "Consultoria Tech",
      description: "Migração completa de sistemas legados para AWS, reduzindo custos em 40%.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      icon: PiCloudBold,
      color: "text-cyan-600 dark:text-cyan-400",
      features: ["Análise de custos", "Migração segura", "Automação CI/CD", "Monitoramento"]
    },
    {
      title: "E-commerce para Loja Local",
      category: "Full Stack",
      description: "Loja virtual completa com integração de pagamentos e gestão de produtos.",
      tech: ["React", "Shopify API", "Stripe", "Tailwind"],
      icon: PiShoppingCartBold,
      color: "text-green-600 dark:text-green-400",
      features: ["Catálogo dinâmico", "Checkout seguro", "Painel admin", "Mobile-first"]
    },
    {
      title: "Automação de Marketing Digital",
      category: "IA & Automação",
      description: "Sistema que automatiza campanhas e analisa performance usando machine learning.",
      tech: ["Python", "TensorFlow", "Facebook API", "Redis"],
      icon: PiChartLineBold,
      color: "text-orange-600 dark:text-orange-400",
      features: ["Campanhas automáticas", "Análise preditiva", "ROI tracking", "A/B testing"]
    },
    {
      title: "Auditoria de Segurança Digital",
      category: "Consultoria Tech",
      description: "Avaliação completa de segurança e implementação de melhores práticas.",
      tech: ["Security Audit", "OWASP", "SSL/TLS", "Backup"],
      icon: PiShieldCheckBold,
      color: "text-red-600 dark:text-red-400",
      features: ["Auditoria completa", "Plano de ação", "Implementação", "Treinamento"]
    }
  ];

  const categories = ["Todos", "Full Stack", "IA & Automação", "Consultoria Tech"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <TypewriterText text="Nosso Portfolio" />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes, 
              transformando ideias em soluções digitais de sucesso.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <FadeInUp>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* Projects Grid */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <FloatingCard className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 h-full">
                  <div className="p-8">
                    <div className={`mb-4 text-center ${project.color}`}>
                      <project.icon className="text-6xl mx-auto" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Principais funcionalidades:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FloatingCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Resultados que Falam por Si
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "30+", label: "Projetos Entregues", icon: PiRocketLaunchBold },
              { number: "25+", label: "Clientes Satisfeitos", icon: PiHeartBold },
              { number: "40%", label: "Redução Média de Custos", icon: PiCurrencyDollarBold },
              { number: "24/7", label: "Suporte Técnico", icon: PiWrenchBold }
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
                <div className="text-4xl mb-2 flex justify-center">
                  <IconComponent />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pronto para o próximo projeto?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos discutir como podemos ajudar sua empresa 
              a alcançar seus objetivos digitais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Solicitar Orçamento
              </AnimatedButton>
              <AnimatedButton 
                href="/about"
                variant="secondary"
              >
                Conheça Nossa Equipe
              </AnimatedButton>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}