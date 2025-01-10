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
  description:
    "Selhono Designs is a company specializing in innovative interior designs, including bathroom, bedroom, and living room concepts.",

  twitter: {
    card: "summary_large_image",
    creator: "@NugarRahman",
  },
  openGraph: {
    type: "website",
    url: "https://selhonointeriors.vercel.app",
  },
  keywords: [
    "Selhono",
    "interior designs",
    "bathroom designs",
    "bedroom designs",
    "living room designs",
    "modern interiors",
    "home decor",
    "furniture designs",
  ],
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
