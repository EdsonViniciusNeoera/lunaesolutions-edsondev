"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiHouseBold, PiInfoBold, PiSuitcaseBold, PiEnvelopeBold, PiListBold, PiXBold } from "react-icons/pi";
import { useHydration } from '@/hooks/useHydration';

interface NavProps {
  className?: string;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Constantes
const SCROLL_THRESHOLD = 20;
const MOBILE_BREAKPOINT = 768;
const CONTACT_EMAIL = "viniciuspereira76@hotmail.com";
const LOGO_PATH = "/icon_1.webp";
const BRAND_NAME = "Edson Vinicius";

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Início", icon: PiHouseBold },
  { href: "/about/", label: "Sobre", icon: PiInfoBold },
  { href: "/portfolio/", label: "Portfolio", icon: PiSuitcaseBold },
];

// Funções utilitárias
const toggleBodyScroll = (disable: boolean): void => {
  document.body.style.overflow = disable ? 'hidden' : '';
};

const Navigation = ({ className = "" }: NavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHydrated = useHydration();

  // Monitor scroll para efeito de navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenir scroll quando menu mobile está aberto
  useEffect(() => {
    toggleBodyScroll(isMobileMenuOpen);
    return () => toggleBodyScroll(false);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Evita problemas de hidratação renderizando estado neutro inicialmente
  if (!isHydrated) {
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 group">
                <img 
                  src={LOGO_PATH}
                  alt="Lunae Solutions" 
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  loading="eager"
                  width="48"
                  height="48"
                />
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {BRAND_NAME}
                </span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 lg:space-x-8">
                {NAV_ITEMS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      <IconComponent className="mr-1.5 text-base" />
                      {item.label}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  );
                })}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <PiEnvelopeBold className="mr-1.5" />
                  Contato
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors duration-200"
                aria-label="Menu"
              >
                <PiListBold className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
      } border-b border-gray-200/50 dark:border-gray-800/50 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="flex items-center space-x-2 group"
                onClick={handleLinkClick}
              >
                <img 
                  src={LOGO_PATH}
                  alt="Lunae Solutions" 
                  className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-105"
                  loading="eager"
                  width="48"
                  height="48"
                />
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {BRAND_NAME}
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 lg:space-x-8">
                {NAV_ITEMS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      <IconComponent className="mr-1.5 text-base" />
                      {item.label}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </a>
                  );
                })}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <PiEnvelopeBold className="mr-1.5" />
                  Contato
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <PiXBold className="h-6 w-6" />
                ) : (
                  <PiListBold className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {NAV_ITEMS.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                    >
                      <IconComponent className="text-xl" />
                      <span className="text-lg font-medium">{item.label}</span>
                    </motion.a>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.1 }}
                  className="pt-4"
                >
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    onClick={handleLinkClick}
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <PiEnvelopeBold className="text-xl" />
                    <span className="text-lg">Entrar em Contato</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;