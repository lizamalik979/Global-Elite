import type { Metadata } from "next";
import TravelPage from "../components/travelpage";

export const metadata: Metadata = {
  title: "Travel & Tourism — Global Elite",
  description:
    "International holiday packages, customized travel planning, visa assistance, corporate and student travel — Global Elite's Travel & Tourism division.",
};

export default function Travel() {
  return <TravelPage />;
}
