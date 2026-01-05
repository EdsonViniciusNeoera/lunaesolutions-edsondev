"use client";

import { useEffect, useLayoutEffect } from 'react';

// Hook para evitar problemas de hidratação
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;