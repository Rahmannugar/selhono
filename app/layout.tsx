import type { Metadata } from "next";
import Script from "next/script";
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
  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `}
        </Script>
      </head>
      <body className="overflow-hidden">
        <FollowCursor />
        <Navbar />
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
