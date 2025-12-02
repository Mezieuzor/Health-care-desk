import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health Desk Clinic - All Natural Supplements",
  description:
    "Discover science-backed natural supplements for weight loss, nerve pain, skin care, and complete wellness. Clinically tested, all-natural ingredients.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
