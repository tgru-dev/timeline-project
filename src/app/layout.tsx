import type { Metadata } from "next";
import { Inter, Montserrat, Cormorant, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat"
});
const cormorant = Cormorant({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});
const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather"
});

export const metadata: Metadata = {
  title: "Leipziger Buchmesse - Freitag",
  description: "Entdecken Sie die Highlights und Veranstaltungen des Freitags auf der Leipziger Buchmesse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} ${montserrat.variable} ${cormorant.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
