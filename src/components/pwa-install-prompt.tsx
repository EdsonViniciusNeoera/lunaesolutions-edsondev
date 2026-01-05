"use client";

import React, { useEffect, useState } from 'react';
import { useServiceWorker } from '@/hooks/useServiceWorker';

export function PWAInstallPrompt() {
  const { isPWA, promptInstall } = useServiceWorker();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // @ts-ignore
      window.deferredPrompt = e;
      setShowPrompt(true);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstall = async () => {
    const installed = await promptInstall();
    if (installed) {
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (isPWA || !showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-20 sm:max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50 animate-slide-up">
      <div className="flex items-center space-x-3">
        <img 
          src="/icon_1.webp" 
          alt="App Icon" 
          className="w-10 h-10 rounded-lg flex-shrink-0"
          width="40"
          height="40"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
            Instalar App
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            Acesso rápido na tela inicial
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
            aria-label="Dispensar"
          >
            ×
          </button>
          <button
            onClick={handleInstall}
            className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Instalar
          </button>
        </div>
      </div>
    </div>
  );
}