import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 강좌",
  description: "Damon Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/onbording">
      <html lang="ko">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
