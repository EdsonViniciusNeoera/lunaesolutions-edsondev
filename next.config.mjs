/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚙️ Configuração para exportação estática
  output: 'export',
  
  // Desabilitar otimizações server-side
  trailingSlash: true,
  
  // Otimizações de performance compatíveis com exportação estática
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuração de imagens para exportação estática
  images: {
    unoptimized: true, // Obrigatório para export
  },

  // Otimizações experimentais compatíveis
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  // Configurações de build
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Desabilitar features incompatíveis com exportação estática
  // - headers() não funciona em hospedagem estática
  // - Use .htaccess para headers no Apache
};

export default nextConfig;