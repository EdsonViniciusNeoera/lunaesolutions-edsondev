"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useHydration } from '@/hooks/useHydration';

export const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    animationX: number;
    animationY: number;
    duration: number;
    delay: number;
  }>>([]);
  const [isClient, setIsClient] = useState(false);
  const isHydrated = useHydration();

  // Seeded random para consistência SSR/cliente
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    setIsClient(true);
    // Reduzir partículas para melhor performance
    const particleCount = window.innerWidth < 768 ? 8 : 12; // Menos partículas em mobile
    const newParticles = [...Array(particleCount)].map((_, i) => ({
      x: seededRandom(i * 123) * 100,
      y: seededRandom(i * 456) * 100,
      animationX: seededRandom(i * 789) * 100 - 50,
      animationY: seededRandom(i * 101) * 100 - 50,
      duration: seededRandom(i * 202) * 3 + 2,
      delay: seededRandom(i * 303) * 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    let animationId: number;
    const updateMousePosition = (e: MouseEvent) => {
      // Throttle mouse updates para melhor performance
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animationId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    // Só ativar em desktop para melhor performance
    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", updateMousePosition, { passive: true });
    }
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-[#0B0B0F] dark:to-[#12122A] w-full layout-stable">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-8 w-full h-full"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ contain: "layout style" }}
      />

      {/* Subtle dark mode gradient overlay */}
      <div className="absolute inset-0 dark:bg-gradient-radial dark:from-purple-900/5 dark:via-blue-900/3 dark:to-transparent w-full h-full"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isClient && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.min(particle.animationX, 30)],
              y: [0, Math.min(particle.animationY, 30)],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.max(10, Math.min(90, particle.x))}%`,
              top: `${Math.max(10, Math.min(90, particle.y))}%`,
              contain: "layout style",
            }}
          />
        ))}
      </div>

      {/* Interactive cursor follow - apenas desktop */}
      {isClient && window.innerWidth >= 768 && (
        <motion.div
          className="absolute pointer-events-none hidden md:block"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm" />
        </motion.div>
      )}
    </div>
  );
};

export const TypewriterText = ({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
}) => {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.3,
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const PulseButton = ({ 
  children, 
  className = "", 
  href,
  onClick 
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) => {
  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-700 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute top-0 left-0 w-full bg-gradient-to-r from-white via-white to-transparent opacity-20 h-full"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <span className="relative z-10 text-white font-semibold">
        {children}
      </span>
    </MotionComponent>
  );
};