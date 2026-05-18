import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mall of America — Partner & Leasing Experience",
  description: "An immersive, cinematic, and interactive sales tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#000000]">
      <body
        className={`${outfit.variable} ${playfair.variable} font-outfit antialiased bg-[#000000] text-white selection:bg-[#C9A84C] selection:text-black cursor-default`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
