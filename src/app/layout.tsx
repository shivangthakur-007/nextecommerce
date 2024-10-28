import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
      </body>
    </html>
  );
}
