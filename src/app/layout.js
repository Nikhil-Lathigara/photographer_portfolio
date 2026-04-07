import { Cormorant_Garamond, Syne, Space_Mono } from "next/font/google";
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"]
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
  style: ["normal", "italic"]
});

export const metadata = {
  title: "LUMINA — Visual Artist Portfolio",
  description: "Visual Artist & Photographer — Est. 2014",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${syne.variable} ${spaceMono.variable} antialiased bg-ink text-paper font-fd selection:bg-gold selection:text-ink overflow-x-hidden`}
      >
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  );
}
