import ThemeSwitcher from "@/components/theme-switcher";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";

import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll scheme-light-dark not-dark:scheme-light dark:scheme-dark`}
    >
      <body
        className={`min-w-[320px] bg-white leading-[1.5] text-gray-950 underline-offset-2 antialiased dark:bg-black`}
      >
        <ThemeProvider attribute="class">
          <div className="relative isolate flex min-h-dvh flex-col">
            {children}
          </div>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
