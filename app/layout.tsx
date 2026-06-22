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

const SITE_URL = "https://www.pelep.org";
const TITLE = "PELEP | Impulsando la resiliencia y economía de Puerto Rico";
const DESCRIPTION =
  "PELEP es un modelo de financiamiento que permite a propietarios y municipios modernizar su infraestructura energética y de resiliencia, movilizando capital privado.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: SITE_URL,
    siteName: "PELEP",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emblema de PELEP, Programa de Energía Limpia con Evaluación de Propiedades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
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
