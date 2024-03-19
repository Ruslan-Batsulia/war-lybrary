import { Metadata } from "next";
import { MissionsPage } from "@/components";

export const metadata: Metadata = {
  title: "Missions",
  description: "Missions Page",
};

export default function Missions() {
  return <MissionsPage />;
}
