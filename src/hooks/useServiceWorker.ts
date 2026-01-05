"use client";

import React, { useEffect } from 'react';

export function useServiceWorker() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registrado com sucesso:', registration.scope);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Novo conteúdo disponível
                  if (confirm('Nova versão disponível! Atualizar página?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch(error => {
          console.error('Erro ao registrar SW:', error);
        });

      // Handle messages from service worker
      navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'CACHE_UPDATED') {
          console.log('Cache atualizado:', event.data.url);
        }
      });

      // Handle controller changes
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Controller do SW mudou');
      });
    }
  }, []);

  // Function to check if app is running standalone (PWA)
  const isPWA = () => {
    return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  };

  // Function to prompt user to install PWA
  const promptInstall = async () => {
    if (typeof window !== 'undefined' && 'beforeinstallprompt' in window) {
      // @ts-ignore - beforeinstallprompt is not in types yet
      const deferredPrompt = window.deferredPrompt;
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        console.log('PWA install prompt result:', result);
        // @ts-ignore
        window.deferredPrompt = null;
        return result.outcome === 'accepted';
      }
    }
    return false;
  };

  return {
    isPWA: typeof window !== 'undefined' ? isPWA() : false,
    promptInstall
  };
}