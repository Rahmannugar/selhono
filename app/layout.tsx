import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FollowCursor from "./util/Cursor";

export const metadata: Metadata = {
  title: {
    default: "Selhono",
    template: "%s - Selhono",
  },
  description: "Welcome to Selhono Interior Designs",
  twitter: {
    card: "summary_large_image",
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
        <FollowCursor />
        <Navbar />
        {children}
        <div className="overflow-hidden xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
