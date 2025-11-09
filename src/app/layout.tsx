import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter, Lora } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
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


const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home | Nurjahan Jhorna",
    template: "%s | Nurjahan Jhorna",
  },
  description: "Exploring the digital frontier through web development and design - Nurjahan Jhorna's portfolio",
  authors: [{ name: "Nurjahan Jhorna" }],
  keywords: ["web development", "frontend developer", "portfolio", "digital explorer", "UI/UX design"],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/logo.png" }
    ],
    shortcut: "/logo.png",
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
      <body className={`${inter.variable} ${ibmPlexMono.variable} ${lora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col bg-zinc-900 transition-colors duration-300">
            <MainNav />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
