import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Bitter } from "next/font/google";

export const BitterFont = Bitter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: `%s | Online Course`,
    default: "Welcome | Online Course",
  },
  description:
    "Our online course offers an immersive learning experience designed to help individuals master web development skills, whether they are beginners or looking to advance their expertise. Learn from industry professionals through real-world projects and unlock career success in the tech industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`bg-slate-100 ${BitterFont.className}`}>
        <Header />
        <main className="max-w-7xl min-h-screen mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
