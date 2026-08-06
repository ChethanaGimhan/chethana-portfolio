import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Nav from "./components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chethana Gimhan | Portfolio",
  description:
    "Portfolio of Chethana Gimhan, a Computer Science & Engineering undergraduate at the University of Moratuwa specializing in Cyber Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Dark is the default theme, baked in statically so there's no
      // runtime class mutation needed for most visitors.
      // suppressHydrationWarning covers the one case where the script
      // below removes it before hydration (a returning visitor who chose
      // light).
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Runs before hydration so a returning visitor who chose light
            mode doesn't see a flash of the dark theme first. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                if (localStorage.getItem("theme") === "light") {
                  document.documentElement.classList.remove("dark");
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <Nav />
        {children}
      </body>
    </html>
  );
}
