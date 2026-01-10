import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, PersonSchema, WebSiteSchema } from "@/components/seo-schemas";
import Navigation from "@/components/navigation";
import LazyComponentsClient from "@/components/LazyComponentsClient";

// Constantes
const SITE_URL = "https://lunaesolutions.dev";
const SITE_NAME = "Edson Vinicius - Lunae Solutions";
const AUTHOR_NAME = "Edson Vinicius";
const SITE_TITLE = "Edson Vinicius | Desenvolvedor Full Stack, IA e Consultor Tech";
const SITE_DESCRIPTION = "Desenvolvedor Full Stack especializado em transformação digital para pequenas empresas. Desenvolvimento web moderno, automação com IA e consultoria tecnológica personalizada. Solicite seu orçamento!";
const OG_IMAGE = "/icon_1.webp";
const PRIMARY_COLOR = "#3b82f6";
const DARK_COLOR = "#1e40af";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
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
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: "Lunae Solutions",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: OG_IMAGE, sizes: '32x32', type: 'image/webp' },
      { url: OG_IMAGE, sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: OG_IMAGE, sizes: '180x180', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Edson Vinicius | Desenvolvedor Full Stack & Consultor Tech",
    description: "🚀 Transformo ideias em soluções digitais inteligentes. Desenvolvimento web, automação com IA e consultoria tech para pequenas empresas.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
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
    'theme-color': PRIMARY_COLOR,
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
    { media: '(prefers-color-scheme: light)', color: PRIMARY_COLOR },
    { media: '(prefers-color-scheme: dark)', color: DARK_COLOR }
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