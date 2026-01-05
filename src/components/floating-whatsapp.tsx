"use client";

import { useState } from "react";
import { PiWhatsappLogoBold, PiXBold, PiChatBold } from "react-icons/pi";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const predefinedMessages = [
    {
      title: "Solicitar Orçamento",
      message: "Olá Edson! Gostaria de solicitar um orçamento para um projeto. Podemos conversar?"
    },
    {
      title: "Desenvolvimento Web",
      message: "Olá! Tenho interesse em desenvolver um website para minha empresa. Pode me ajudar?"
    },
    {
      title: "Landing Page",
      message: "Oi Edson! Preciso de uma landing page profissional. Qual seria o investimento?"
    },
    {
      title: "E-commerce",
      message: "Olá! Gostaria de criar uma loja virtual. Podemos discutir as opções?"
    },
    {
      title: "Suporte Técnico",
      message: "Olá Edson! Estou com um problema no meu sistema e preciso de suporte técnico."
    },
    {
      title: "Consultoria",
      message: "Oi! Gostaria de uma consultoria sobre tecnologia para meu negócio. Está disponível?"
    }
  ];

  const sendMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/5581999045078?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-[calc(100vw-2rem)]">
      {/* Messages Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Messages Container */}
          <div className="absolute bottom-20 right-0 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <PiChatBold className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold">Edson Vinicius</h3>
                    <p className="text-xs opacity-90">Desenvolvedor Full Stack</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <PiXBold />
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="p-2 max-h-96 overflow-y-auto">
              <div className="text-xs text-gray-500 dark:text-gray-400 p-3 text-center">
                Escolha uma opção para iniciar a conversa:
              </div>
              
              {predefinedMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(item.message)}
                  className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <div className="font-medium text-sm text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {item.message}
                  </div>
                </button>
              ))}
              
              {/* Custom Message */}
              <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                <button
                  onClick={() => sendMessage("Olá Edson!")}
                  className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="font-medium text-sm text-gray-800 dark:text-white">
                    Mensagem personalizada
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Iniciar conversa livre
                  </div>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-700/50">
              <div className="text-xs text-center text-gray-500 dark:text-gray-400">
                Online agora • Resposta rápida
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'rotate-180' : ''
        }`}
        title="Conversar no WhatsApp"
      >
        {isOpen ? (
          <PiXBold className="text-xl" />
        ) : (
          <PiWhatsappLogoBold className="text-xl group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Subtle glow effect when closed */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-green-500/30 rounded-full blur-sm" />
      )}
    </div>
  );
}

// Componente para status online
export function WhatsAppStatus() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
      <div className={`w-2 h-2 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
      {isOnline ? 'Online agora' : 'Responderá em breve'}
    </div>
  );
}