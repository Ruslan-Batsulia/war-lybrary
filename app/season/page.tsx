import { Metadata } from "next";
import { SeasonPage } from "@/components";

export const metadata: Metadata = {
  title: "Season",
  description: "Season Page",
};

export default function Season() {
  return <SeasonPage />;
}
