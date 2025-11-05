import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoastMyProfile - AI Dating Profile Analyzer",
  description: "Get brutally honest AI-powered feedback on your dating profile. No sugar-coating, just real advice to get more matches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6530RP9F72"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6530RP9F72');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}