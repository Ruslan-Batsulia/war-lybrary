import { Metadata } from "next";
import { HomePage } from "@/components";

export const metadata: Metadata = {
  title: "War Library",
  description: "War Library Page",
};

export default function Home() {
  return <HomePage />;
}
