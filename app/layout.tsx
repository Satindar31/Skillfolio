import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillfolio",
  description: "The best free resume generator",
  viewport: "width=device-width,initial-scale=1",
  twitter: {
    creator: "@satindar31",
    site: "https://skillfolio-satindar31.vercel.app",
    title: "Skillfolio",
    description: "The best free resume generator",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Skillfolio",
    url: "https://skillfolio-satindar31.vercel.app",
    description: "The best free resume generator",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} text-white`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
