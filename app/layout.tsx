import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "GameFan | Game Download Platform",
    template: "%s | GameFan",
  },

  description:
    "GameFan is a modern game download platform for PC, PlayStation, Xbox and Android games.",

  keywords: [
    "GameFan",
    "Download Games",
    "PC Games",
    "PlayStation Games",
    "Xbox Games",
    "Android Games",
    "Free Games",
    "Gaming",
  ],

  authors: [
    {
      name: "GameFan",
    },
  ],

  creator: "GameFan",

  openGraph: {
    title: "GameFan | Game Download Platform",
    description:
      "Explore and download your favorite PC, console and mobile games on GameFan.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}