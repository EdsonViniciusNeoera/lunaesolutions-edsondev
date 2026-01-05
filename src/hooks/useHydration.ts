"use client";

import { useEffect, useState } from 'react';

// Hook para evitar problemas de hidratação com estado boolean
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}

// Hook para valores que só devem existir no cliente
export function useClientOnly<T>(clientValue: T, serverValue?: T): T | undefined {
  const isHydrated = useHydrated();
  
  if (!isHydrated) {
    return serverValue;
  }
  
  return clientValue;
}