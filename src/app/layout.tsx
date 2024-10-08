import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "*processed_",
  icons: [
    {
      url: "/favicons/favicon.ico",
      rel: "icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <Header />
          <div className="flex flex-col min-h-screen container mt-6">
            {children}
          </div>
          <Footer />
        </body>
      </ThemeProvider>
      <GoogleAnalytics gaId={process.env.GA_ID ?? ""} />
    </html>
  );
}
