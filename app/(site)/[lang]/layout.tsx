import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import Footer from "@/components/site/home/footer";
import Header from "@/components/site/home/header";

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
        <NextIntlClientProvider messages={messages}>
          <Theme>
            <main className="min-h-screen flex flex-col">
              <Header />
              {children}
              <Footer />
            </main>
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
