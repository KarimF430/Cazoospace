import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cazoospace.com"),
  title: {
    template: "%s | Cazoo Space",
    default: "Cazoo Space — Enterprise Execution Partner",
  },
  description:
    "We bridge enterprise technology, real estate, and on-the-ground marketing activation — the execution partner for property management companies, developers, and the brands that want to get inside their buildings.",
  keywords: [
    "enterprise marketing agency",
    "proptech activation",
    "property management marketing",
    "multifamily marketing",
    "real estate marketing",
    "portfolio scale rollouts",
    "face to face marketing",
    "B2B sales agency",
    "event marketing",
    "branding agency Calgary",
    "web design real estate",
    "social media proptech",
    "digital advertising real estate",
  ],
  authors: [{ name: "Cazoo Space" }],
  creator: "Cazoo Space",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cazoospace.com",
    siteName: "Cazoo Space",
    title: "Cazoo Space — Enterprise Execution Partner",
    description:
      "We bridge enterprise technology, real estate, and on-the-ground marketing activation.",
    images: [
      {
        url: "/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Cazoo Space — Enterprise Execution Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cazoo Space — Enterprise Execution Partner",
    description: "Enterprise execution partner for real estate and proptech.",
    images: ["/og/homepage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebasNeue.variable} ${spaceMono.variable}`}
    >
      <body className="font-body antialiased bg-white text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
