import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/layout/Layout";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shofy - Multipurpose eCommerce website",
  description: "Test application for education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 1000,
              style: {
                background: "#000000",
                color: "#fff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
