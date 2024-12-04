import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Selhono",
  description: "Selhono interior designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
