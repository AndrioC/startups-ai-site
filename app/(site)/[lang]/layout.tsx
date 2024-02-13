import { Theme } from "@radix-ui/themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import GoogleAnalytics from "@/components/site/google-analytics";
import Footer from "@/components/site/home/footer";
import Header from "@/components/site/home/header";
import { Toaster } from "@/components/ui/sonner";

import QueryClientProvider from "./QueryClientProvider";

import "@radix-ui/themes/styles.css";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startups Global Link",
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
      <body className={inter.className}>
        <QueryClientProvider>
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
        </QueryClientProvider>
        {process.env.GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS} />
        ) : null}
      </body>
    </html>
  );
}
