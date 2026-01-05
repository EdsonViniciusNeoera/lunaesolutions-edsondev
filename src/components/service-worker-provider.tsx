"use client";

import { useEffect } from 'react';
import { useServiceWorker } from '@/hooks/useServiceWorker';

export default function ServiceWorkerProvider() {
  useServiceWorker();
  
  useEffect(() => {
    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Preload important images
      const preloadImage = (src: string) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      };

      // Preload critical images
      preloadImage('/icon_1.webp');
      
      // Setup intersection observer for lazy loading
      if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
      }

      // Performance monitoring
      if ('performance' in window && 'PerformanceObserver' in window) {
        try {
          // Monitor Largest Contentful Paint
          const po = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
              }
              if (entry.entryType === 'first-input') {
                console.log('FID:', (entry as any).processingStart - entry.startTime);
              }
            }
          });

          po.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        } catch (e) {
          console.log('Performance monitoring not supported');
        }
      }
    }
  }, []);

  return null;
}