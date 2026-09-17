import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const storeName = process.env.NEXT_PUBLIC_STORE_NAME ?? "Liva Style Crafts";

export const metadata: Metadata = {
  title: `${storeName} — DIY Craft Kits & Personalized Gifts`,
  description:
    "DIY colouring & plaster craft kits, silicone moulds and personalised keychains, name plaques and gifts, made in Kerala.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
