"use client";
import dynamic from "next/dynamic";

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
      <PWAInstallPrompt />
      <ServiceWorkerProvider />
    </>
  );
}
