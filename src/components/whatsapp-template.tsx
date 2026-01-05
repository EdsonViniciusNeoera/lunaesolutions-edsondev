"use client";

import { useState } from "react";
import { PiWhatsappLogoBold, PiCopyBold, PiCheckBold, PiUserBold, PiEnvelopeBold, PiPhoneBold } from "react-icons/pi";
import { AnimatedButton } from "@/components/animations";

interface WhatsAppTemplateProps {
  className?: string;
}

export function WhatsAppTemplate({ className = "" }: WhatsAppTemplateProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "Desenvolvimento de Website",
    descricao: ""
  });

  const servicos = [
    "Desenvolvimento de Website",
    "Landing Page",
    "E-commerce",
    "Sistema Web",
    "Automação com IA",
    "Consultoria Técnica",
    "Manutenção de Sistema",
    "Outro"
  ];

  const generateMessage = () => {
    const message = `Olá Edson!

Meu nome é *${formData.nome}* e gostaria de solicitar um orçamento para *${formData.servico}*.

*Detalhes do projeto:*
${formData.descricao || "Gostaria de mais informações sobre este serviço."}

*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}

Podemos conversar sobre as possibilidades e valores?

Desde já agradeço a atenção!`;

    return encodeURIComponent(message);
  };

  const handleSendWhatsApp = () => {
    if (!formData.nome || !formData.email) {
      alert("Por favor, preencha pelo menos seu nome e e-mail.");
      return;
    }

    const message = generateMessage();
    const whatsappUrl = `https://wa.me/5581999045078?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyMessage = () => {
    const message = decodeURIComponent(generateMessage());
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={`w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-3">
          <PiWhatsappLogoBold className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Solicitar Orçamento via WhatsApp
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Preencha os dados e envie uma mensagem personalizada
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <PiUserBold className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Seu nome *"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <PiEnvelopeBold className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Seu e-mail *"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <PiPhoneBold className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            placeholder="Seu telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({...formData, telefone: e.target.value})}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <select
          value={formData.servico}
          onChange={(e) => setFormData({...formData, servico: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {servicos.map((servico) => (
            <option key={servico} value={servico}>
              {servico}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Descreva seu projeto ou necessidade..."
          value={formData.descricao}
          onChange={(e) => setFormData({...formData, descricao: e.target.value})}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
        />

        <div className="flex gap-3">
          <AnimatedButton
            onClick={handleSendWhatsApp}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-3"
          >
            <PiWhatsappLogoBold />
            Enviar WhatsApp
          </AnimatedButton>
          
          <button
            type="button"
            onClick={copyMessage}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            title="Copiar mensagem"
          >
            {copied ? (
              <PiCheckBold className="text-green-500" />
            ) : (
              <PiCopyBold className="text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </form>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Resposta garantida em até 24 horas • Orçamento gratuito
        </p>
      </div>
    </div>
  );
}

// Componente de preview da mensagem (opcional)
export function WhatsAppMessagePreview({ formData }: { formData: any }) {
  const message = `Olá Edson!

Meu nome é *${formData.nome}* e gostaria de solicitar um orçamento para *${formData.servico}*.

*Detalhes do projeto:*
${formData.descricao || "Gostaria de mais informações sobre este serviço."}

*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}

Podemos conversar sobre as possibilidades e valores?

Desde já agradeço a atenção!`;

  return (
    <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 text-sm">
        Preview da mensagem:
      </h4>
      <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
        {message}
      </div>
    </div>
  );
}