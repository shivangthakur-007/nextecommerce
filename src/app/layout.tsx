import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flomazon",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-700`}>
        <SessionProvider>
          <Navbar />
          <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
