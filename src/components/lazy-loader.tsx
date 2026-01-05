"use client";

import { lazy, Suspense, ComponentType } from 'react';

// Componente de loading rápido e otimizado
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-4 min-h-[100px]">
    <div className="animate-pulse">
      <div className="w-8 h-8 bg-blue-600/20 rounded-full animate-bounce"></div>
    </div>
  </div>
);

// HOC para lazy loading com loading state otimizado
export function withLazyLoading<T = any>(
  importFunc: () => Promise<any>,
  fallback?: React.ComponentType
) {
  const LazyComponent = lazy(() => importFunc());
  
  return function LazyWrappedComponent(props: T) {
    const FallbackComponent = fallback || LoadingSpinner;
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...(props as any)} />
      </Suspense>
    );
  };
}

// Loading states específicos para diferentes tipos de componente
export const HeroSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 animate-pulse">
    <div className="container mx-auto px-4 pt-32">
      <div className="text-center space-y-6">
        <div className="h-12 sm:h-16 md:h-20 lg:h-24 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto max-w-4xl"></div>
        <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-600 rounded-lg mx-auto max-w-2xl"></div>
        <div className="flex gap-4 justify-center">
          <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="h-12 w-32 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export const CardSkeleton = () => (
  <div className="animate-pulse">
    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 space-y-4">
      <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/6"></div>
      </div>
      <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-full w-32"></div>
    </div>
  </div>
);

// Lazy load de componentes pesados
export const LazyFloatingWhatsApp = withLazyLoading(
  () => import('./floating-whatsapp').then(mod => ({ default: mod.FloatingWhatsApp })),
  () => <div className="fixed bottom-4 right-4 w-14 h-14 bg-green-500 rounded-full animate-pulse"></div>
);

export const LazyAnimations = withLazyLoading(
  () => import('./optimized-animations').then(mod => ({ default: mod.FadeInUp }))
);

// Intersection Observer Hook para lazy loading manual
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  { threshold = 0.1, rootMargin = '50px' }: IntersectionObserverInit = {}
) {
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
    if (!elementRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(elementRef.current);
    
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
  
  return isInView;
}

import React from 'react';