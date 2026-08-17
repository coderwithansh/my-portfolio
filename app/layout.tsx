import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navebar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Providers from "./providers";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ansh Portfolio | next.js 16",
  description: "Full Stack Developer Portfolio",
  verification: {
    google: "kN1W_AjEPptYWOfJFkqnmEQN98fqG7_8LcXznelX0GA",
  },
};
{/* <meta name="google-site-verification" content="kN1W_AjEPptYWOfJFkqnmEQN98fqG7_8LcXznelX0GA" /> */ }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased bg-white text-black dark:bg-[#0d0d1f] dark:text-white`}
      >
        <Providers>
        <ResponsiveNav />
          {children}
        <Footer />
        <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
