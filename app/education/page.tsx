import type { Metadata } from "next";
import EducationPage from "../components/educationpage";

export const metadata: Metadata = {
  title: "Education & Career Solutions — Global Elite",
  description:
    "Training, overseas education support and career services from Global Elite's Education & Career division.",
};

export default function Education() {
  return <EducationPage />;
}
