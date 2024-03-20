"use client";

// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/components";
import { ModalAndDropdownProvider } from "./modalAndDropdownProvider";

import Head from "next/head";
import "@/sass/globals.scss";
import { useEffect } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "WarLibrary",
//   description: "War Library",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.querySelector('main')!.style.paddingTop = `${document.querySelector('header')!.offsetHeight}px`;
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={roboto.className}>
        <ModalAndDropdownProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ModalAndDropdownProvider>
      </body>
    </html>
  );
}
