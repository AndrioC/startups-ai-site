import { Theme } from "@radix-ui/themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { NextIntlClientProvider, useMessages } from "next-intl";

import GoogleAnalytics from "@/components/site/google-analytics";
import Footer from "@/components/site/home/footer";
import Header from "@/components/site/home/header";
import { Toaster } from "@/components/ui/sonner";

import "@radix-ui/themes/styles.css";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startups AI",
  description: "The path for leaders who want to connect with the world",
  icons: {
    icon: "/favicon.svg",
  },
};

const locales = ["en", "pt"];

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!locales.includes(lang)) {
    notFound();
  }

  const messages = useMessages();
  return (
    <html lang={lang}>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d3d178ed-3b46-4223-a614-e8f7f959fd8b"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Theme>
            <main className="min-h-screen flex flex-col">
              <Header />
              {children}
              <SpeedInsights />
              <Footer />
            </main>
            <Toaster position="bottom-center" />
          </Theme>
        </NextIntlClientProvider>
        {process.env.GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS} />
        ) : null}
      </body>
    </html>
  );
}
