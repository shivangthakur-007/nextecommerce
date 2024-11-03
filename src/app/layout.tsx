import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Flomazon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-700">
        <Navbar />
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
