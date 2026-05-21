import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navebar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import  ScrollToTop  from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ansh Portfolio | Next.js 16",
    template: "%s | Ansh Portfolio",
  },

  description: "Full Stack Developer Portfolio",

  keywords: [
    "Ansh Dewangan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "CG Web-developer",
    "webdev-ansh"
  ],

  authors: [
    {
      name: "Ansh Dewangan",
    },
  ],

  creator: "Ansh Dewangan",

  metadataBase: new URL("https://your-domain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ansh Portfolio | Next.js 16",
    description: "Full Stack Developer Portfolio",
    url: "https://your-domain.com",
    siteName: "Ansh Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ansh Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ansh Portfolio | Next.js 16",
    description: "Full Stack Developer Portfolio",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "kN1W_AjEPptYWOfJFkqnmEQN98fqG7_8LcXznelX0GA",
  },
};
{/* <meta name="google-site-verification" content="kN1W_AjEPptYWOfJFkqnmEQN98fqG7_8LcXznelX0GA" /> */}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
