import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PiHouseBold, PiInfoBold, PiSuitcaseBold, PiEnvelopeBold, PiListBold } from "react-icons/pi";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // Otimização de carregamento de fonte
  preload: true,
});

export const metadata: Metadata = {
  title: "Edson Vinicius | Desenvolvedor Full Stack, IA e Consultor Tech",
  description: "Desenvolvedor Full Stack especializado em transformação digital para pequenas empresas. Desenvolvimento web, automação com IA e consultoria tecnológica personalizada.",
  keywords: ["desenvolvedor full stack", "desenvolvimento web", "inteligência artificial", "automação", "consultoria tech", "pequenas empresas", "negócios locais", "freelancer"],
  authors: [{ name: "Edson Vinicius" }],
  creator: "Edson Vinicius",
  publisher: "Edson Vinicius",
  metadataBase: new URL("https://lunaesolutions.com"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icon_1.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/icon_1.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: '/icon_1.webp', sizes: '180x180', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Edson Vinicius | Desenvolvedor Full Stack & Consultor Tech",
    description: "Desenvolvedor especializado em soluções digitais para pequenas empresas. Full Stack, IA e consultoria tech.",
    url: "https://lunaesolutions.dev",
    siteName: "Edson Vinicius - Lunae Solutions",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: '/icon_1.webp',
        width: 1200,
        height: 630,
        alt: 'Lunae Solutions Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Vinicius | Desenvolvedor Full Stack & Consultor Tech", 
    description: "Desenvolvo soluções digitais inteligentes para pequenas empresas com tecnologia de ponta.",
    images: ['/icon_1.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#3b82f6',
    'color-scheme': 'light dark',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center space-x-2">
                  <img src="/icon_1.webp" alt="Lunae Solutions" className="w-12 h-12" />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Edson Vinicius
                  </span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    <PiHouseBold className="mr-1" /> Início
                  </a>
                  <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    <PiInfoBold className="mr-1" /> Sobre
                  </a>
                  <a href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    <PiSuitcaseBold className="mr-1" /> Portfolio
                  </a>
                  <a href="mailto:viniciuspereira76@hotmail.com" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center">
                    <PiEnvelopeBold className="mr-1" /> Contato
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button className="text-gray-700 dark:text-gray-300 p-2">
                  <PiListBold className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}