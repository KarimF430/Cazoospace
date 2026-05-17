import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#C8102E",
  width: "device-width",
  initialScale: 1,
};

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

// Organization + WebSite JSON-LD for Google Knowledge Panel and sitelinks
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cazoospace.com/#organization",
      name: "Cazoo Space",
      url: "https://cazoospace.com",
      logo: {
        "@type": "ImageObject",
        url: "https://cazoospace.com/logo-1.png",
        width: 200,
        height: 48,
      },
      sameAs: [
        "https://www.linkedin.com/company/cazoospace",
        "https://www.instagram.com/cazoospace",
        "https://twitter.com/cazoospace",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@cazoospace.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://cazoospace.com/#website",
      url: "https://cazoospace.com",
      name: "Cazoo Space",
      publisher: {
        "@id": "https://cazoospace.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://cazoospace.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
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
      <head>
        {/* DNS Prefetch + Preconnect for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Organization + WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-[#1A1A1A]">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C8102E] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
