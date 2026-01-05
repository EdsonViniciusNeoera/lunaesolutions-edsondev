"use client";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () => import("@/components/floating-whatsapp").then(mod => ({ default: mod.FloatingWhatsApp })),
  {
    ssr: false,
    loading: () => (
      <div className="fixed bottom-4 right-4 w-14 h-14 bg-green-500 rounded-full animate-pulse z-[9999]"></div>
    )
  }
);

const PWAInstallPrompt = dynamic(
  () => import("@/components/pwa-install-prompt").then(mod => ({ default: mod.PWAInstallPrompt })),
  { ssr: false }
);

const ServiceWorkerProvider = dynamic(
  () => import("@/components/service-worker-provider"),
  { ssr: false }
);

export default function LazyComponentsClient() {
  return (
    <>
      <FloatingWhatsApp />
      <PWAInstallPrompt />
      <ServiceWorkerProvider />
    </>
  );
}
