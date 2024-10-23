import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
const font = Mulish({ subsets: ["latin"] });
import TikTokPixel from "./TikTokPixel";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "DashDot",
  description:
    "Best productivity tool with Pomodoro timer and task manager for students.",
  openGraph: {
    url: "https://www.dashdot.pro/logo.png/",
    title: "DashDot - Boost Your Productivity",
    description:
      "Best productivity tool with Pomodoro timer and task manager for students.",
    images: [
      {
        url: "https://www.dashdot.pro/logo.png",
        width: 800,
        height: 600,
        alt: "DashDot Logo",
      },
    ],
    siteName: "DashDot",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Osama__Yusuf",
    site: "@site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <PHProvider>
        <head>
          <link rel="icon" href="/logo.png" />
        </head>
        <body className={font.className}>
          <TikTokPixel />
          <PostHogPageView />
          <Analytics />
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
