import { Metadata } from "next";
import { AchievementsPage } from "@/components";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Achievements Page",
};

export default function Achievements() {
  return <AchievementsPage />;
}
