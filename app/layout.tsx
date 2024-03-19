import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/components";
import { ModalAndDropdownProvider } from "./modalAndDropdownProvider";

import "@/sass/globals.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
