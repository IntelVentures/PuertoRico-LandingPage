import type { Metadata } from "next";
import { Montserrat, Open_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PELEP | Impulsando la resiliencia y economía de Puerto Rico",
  description:
    "PELEP es un modelo de financiamiento que permite a propietarios y municipios modernizar su infraestructura energética y de resiliencia, movilizando capital privado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${openSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
