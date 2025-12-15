import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DogMarket - Premium Dog Products & Nutrition",
  description: "Discover premium dog products tailored to your furry friend's unique dietary needs and preferences.",
  keywords: "dog products, dog food, dog nutrition, pet supplies, dog dietary needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

