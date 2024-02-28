import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { ClerkProvider } from "@clerk/nextjs";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

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
    <ClerkProvider>
      <body lang="ko">
        <Header />
        <main>{children}</main>
      </body>
    </ClerkProvider>
  );
}
