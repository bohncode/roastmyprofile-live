import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
