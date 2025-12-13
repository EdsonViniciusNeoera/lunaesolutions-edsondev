"use client";

import { lazy, Suspense } from "react";

const AnimatedHero = lazy(() => 
  import("./hero-animations").then(mod => ({ default: mod.AnimatedHero }))
);

const HeroSkeleton = () => (
  <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

export const LazyAnimatedHero = () => {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <AnimatedHero />
    </Suspense>
  );
};