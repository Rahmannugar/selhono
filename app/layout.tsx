import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Selhono",
  description: "Selhono interior designs",
  icons: {
    icon: [
      { url: "/images/selhono-main.png", sizes: "32x32" },
      { url: "/images/selhono-main.png", sizes: "64x64" },
      { url: "/images/selhono-main.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
