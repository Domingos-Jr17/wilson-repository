import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/wam/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAM DESIGN Solution | by Wilson Macamo",
  description: "Designer gráfico especializado em criar conteúdos visuais estratégicos para marcas que querem crescer nas redes sociais. Social Media Design, Branding, Motion Graphics.",
  keywords: ["WAM Design", "Wilson Macamo", "design gráfico", "social media design", "branding", "motion graphics", "Moçambique", "freelancer designer"],
  authors: [{ name: "Wilson Macamo" }],
  icons: {
    icon: "/uploads/wam-design_logo.jpeg",
  },
  openGraph: {
    title: "WAM DESIGN Solution | by Wilson Macamo",
    description: "Transformando ideias em experiências visuais de alto impacto",
    url: "https://wamdesign.co.mz",
    siteName: "WAM DESIGN Solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAM DESIGN Solution | by Wilson Macamo",
    description: "Transformando ideias em experiências visuais de alto impacto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
