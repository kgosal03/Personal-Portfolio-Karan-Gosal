import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karangosal.com"),
  title: {
    default: "Karan Gosal — Systems & Software Engineer",
    template: "%s | Karan Gosal",
  },
  description:
    "Software Engineer pursuing an M.S. in Computer Science at Georgia Tech specializing in Computing Systems. Interests include distributed systems, cloud infrastructure, AI systems, and real-time computing.",
  keywords: [
    "Karan Gosal",
    "Software Engineer",
    "Systems Engineer",
    "Georgia Tech",
    "Distributed Systems",
    "Cloud Infrastructure",
    "AI Infrastructure",
    "FreeRTOS",
    "Rivos",
    "Meta",
  ],
  authors: [{ name: "Karan Gosal", url: "https://github.com/kgosal03" }],
  creator: "Karan Gosal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karangosal.com",
    title: "Karan Gosal — Systems & Software Engineer",
    description:
      "Software Engineer pursuing an M.S. in Computer Science at Georgia Tech specializing in Computing Systems. ex-Meta/Rivos AI infrastructure intern.",
    siteName: "Karan Gosal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Gosal — Systems & Software Engineer",
    description:
      "Software Engineer pursuing an M.S. in Computer Science at Georgia Tech specializing in Computing Systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
