import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/app/components/Layout";
import { Ubuntu } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const ubuntu = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "TRKR - Train Better",
  description: "Get insights into how well you're training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
