import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, PersonSchema, WebSiteSchema } from "@/components/seo-schemas";
import Navigation from "@/components/navigation";
import LazyComponentsClient from "@/components/LazyComponentsClient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Edson Vinicius | Desenvolvedor Full Stack, IA e Consultor Tech",
    template: "%s | Edson Vinicius - Lunae Solutions"
  },
  description: "Desenvolvedor Full Stack especializado em transformação digital para pequenas empresas. Desenvolvimento web moderno, automação com IA e consultoria tecnológica personalizada. Solicite seu orçamento!",
  keywords: [
    "desenvolvedor full stack brasil",
    "desenvolvimento web pequenas empresas", 
    "automação inteligência artificial",
    "consultoria tecnológica freelancer",
    "react next.js typescript",
    "transformação digital negócios",
    "edson vinicius desenvolvedor",
    "lunae solutions"
  ],
  authors: [{ name: "Edson Vinicius", url: "https://lunaesolutions.dev" }],
  creator: "Edson Vinicius",
  publisher: "Lunae Solutions",
  metadataBase: new URL("https://lunaesolutions.dev"),
  alternates: {
    canonical: "https://lunaesolutions.dev"
  },
  verification: {
    google: "your-google-verification-code", // Substitua pelo código real
  },
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
  manifest: '/manifest.json',
  openGraph: {
    title: "Edson Vinicius | Desenvolvedor Full Stack & Consultor Tech",
    description: "🚀 Transformo ideias em soluções digitais inteligentes. Desenvolvimento web, automação com IA e consultoria tech para pequenas empresas.",
    url: "https://lunaesolutions.dev",
    siteName: "Edson Vinicius - Lunae Solutions",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: '/icon_1.webp',
        width: 1200,
        height: 630,
        alt: 'Edson Vinicius - Desenvolvedor Full Stack e Consultor Tech',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Vinicius | Desenvolvedor Full Stack & Consultor Tech", 
    description: "🚀 Transformo ideias em soluções digitais inteligentes para pequenas empresas. Desenvolvimento web, automação com IA e consultoria tech.",
    images: ['/icon_1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  other: {
    'theme-color': '#3b82f6',
    'color-scheme': 'light dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/icon_1.webp" 
          as="image" 
          type="image/webp"
        />
        <link 
          rel="dns-prefetch" 
          href="//fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        
        {/* Schema.org structured data */}
        <OrganizationSchema />
        <PersonSchema />
        <WebSiteSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <Navigation />
        <main className="pt-16 overflow-x-hidden">
          {children}
        </main>
        <LazyComponentsClient />
      </body>
    </html>
  );
}