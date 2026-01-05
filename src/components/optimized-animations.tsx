"use client";

import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// Componente básico sem animações para usuários que preferem motion reduzido
const StaticComponent = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Animações otimizadas com better performance
export const FadeInUp = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.25, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.25, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.25, 0.25, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Botões otimizados
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const AnimatedButton = ({ children, onClick, variant = 'primary', className = "", disabled = false }: ButtonProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg focus:ring-blue-500",
    secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500"
  };
  
  if (shouldReduceMotion || disabled) {
    return (
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children}
      </button>
    );
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      transition={{ type: "tween", duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

// Card flutuante otimizado
export const FloatingCard = ({ children, className = "", ...props }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }
  
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "tween", duration: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger animations otimizadas
export const Stagger = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.25, 0.25, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};