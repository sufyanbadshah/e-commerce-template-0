import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the font weights you need
  display: "swap", // Ensures the text uses fallback fonts until Poppins loads
});

export const metadata: Metadata = {
  title: "UI-UX Hackathon",
  description: "Hackathon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
