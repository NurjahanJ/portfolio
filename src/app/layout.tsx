import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Montserrat, Dancing_Script, Playfair_Display, Lora } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ['500'],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Design Journal | Nurjahan Jhorna",
    template: "%s | Design Journal",
  },
  description: "Exploring the digital frontier through web development and design - Nurjahan Jhorna's portfolio",
  authors: [{ name: "Nurjahan Jhorna" }],
  keywords: ["web development", "frontend developer", "portfolio", "digital explorer", "UI/UX design"],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32" },
      { url: "/logo.png?v=2", type: "image/png" }
    ],
    apple: [
      { url: "/logo.png?v=2" }
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1128" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1128" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${ibmPlexMono.variable} ${dancingScript.variable} ${playfairDisplay.variable} ${lora.variable} font-lora antialiased`} style={{ fontFamily: 'var(--font-lora)' }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col bg-zinc-900 transition-colors duration-300">
            <MainNav />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
