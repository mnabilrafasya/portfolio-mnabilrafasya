import { clsx, type ClassValue } from "clsx";
import { ProjectCategory } from "@/types/project";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const categoryLabel: Record<ProjectCategory, string> = {
  web: "Web App",
  ai: "AI / ML",
  mobile: "Mobile",
};
