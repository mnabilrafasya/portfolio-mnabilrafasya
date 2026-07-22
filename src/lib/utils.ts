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

export const categoryColor: Record<ProjectCategory, string> = {
  web: "text-cat-web border-cat-web/30 bg-cat-web/10",
  ai: "text-cat-ai border-cat-ai/30 bg-cat-ai/10",
  mobile: "text-cat-mobile border-cat-mobile/30 bg-cat-mobile/10",
};
