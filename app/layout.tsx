import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hammad Tufail | Data Science, AI & ML Specialist",
  description: "Portfolio of Hammad Tufail - FAST NUCES Graduate, Computer Scientist specializing in Data Science, Artificial Intelligence, and Machine Learning",
  keywords: ["Data Science", "Artificial Intelligence", "Machine Learning", "FAST NUCES", "Computer Science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

