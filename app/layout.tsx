import Navbar from "@/components/shared/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Footer from "@/components/shared/footer";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mimosa | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
