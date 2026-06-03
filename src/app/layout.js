import { Cormorant_Garamond, Syne, Space_Mono } from "next/font/google";
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "LUMINA - Photographer Portfolio",
  description: "Wedding, portrait, event, fashion, and brand photography portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${syne.variable} ${spaceMono.variable} antialiased bg-ink text-paper font-fd selection:bg-gold selection:text-ink overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  );
}
