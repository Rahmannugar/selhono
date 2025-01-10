import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
      <head>
        {/* Google Analytics script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-CREKBEE0R3`}
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CREKBEE0R3');
          `}
        </script>
      </head>
      <body className="overflow-x-hidden">
        <FollowCursor />
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
