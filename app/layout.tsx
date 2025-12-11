import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Chatbot } from "@/components/main/chatbot";
import { I18nProvider } from "@/lib/i18n/context";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "bg-[#09090b] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <I18nProvider>
          <CustomCursor />
          <StarsCanvas />
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
