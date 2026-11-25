import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MotionProvider from "@/components/providers/MotionProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Colegio Divino Maestro | Educación de Excelencia",
  description: "En el Colegio Divino Maestro formamos líderes con valores y una educación de calidad preparada para los retos del futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <MotionProvider>
          {children}
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
