import Header from "@/components/header";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Metadata } from "next";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Oliver Dubois | Software Engineer",
  description: "Software Engineering student at UTS, building AI-driven platforms and production-ready applications.",
  metadataBase: new URL("https://oliverdubois.dev"),
  openGraph: {
    title: "Oliver Dubois | Software Engineer",
    description: "Software Engineering student at UTS, building AI-driven platforms and production-ready applications.",
    url: "https://oliverdubois.dev",
    siteName: "Oliver Dubois Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oliver Dubois - Software Engineer",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Dubois | Software Engineer",
    description: "Software Engineering student at UTS, building AI-driven platforms and production-ready applications.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} bg-transparent text-gray-950 relative pt-28 sm:pt-36 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <SmoothScroll />
          <ActiveSectionContextProvider>
            <AuroraBackground>
              <Header />
              {children}
              <Footer />
            </AuroraBackground>

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

