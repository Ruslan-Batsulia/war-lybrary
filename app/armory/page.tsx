import { Metadata } from "next";
import { ArmoryPage } from "@/components";

export const metadata: Metadata = {
  title: "Armory",
  description: "Armory Page",
};

export default function Armory() {
  return <ArmoryPage />;
}
