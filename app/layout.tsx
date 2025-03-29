import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Sison | CV",
  description: "Alex Sison Portfolio Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        <ThemeWrapper>
          <Navbar />
          {children}
          <footer className="sticky bottom-0 items-center md:flex justify-center bg-gray-800/5 pt-8 hidden">
            <Footer />
          </footer>
        </ThemeWrapper>
      </body>
    </html>
  );
}
