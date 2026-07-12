export type SkillColor = "violet" | "cyan" | "amber" | "emerald";

export interface SkillGroup {
  label: string;
  color: SkillColor;
  /** nama icon lucide-react, di-resolve di komponen */
  icon: "Brain" | "Code2" | "Database" | "Layers";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "Code2",
    label: "Full Stack Development",
    color: "cyan",
    items: [
      "React.js",
      "Next.js",
      "Express.js",
      "Node.js",
      "Laravel",
      "REST API",
      "TypeScript",
    ],
  },
  {
    icon: "Brain",
    label: "AI & Computer Vision",
    color: "violet",
    items: [
      "PyTorch",
      "Vision Transformer",
      "YOLOv8 Pose",
      "U-Net",
      "CNN",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
  },
  {
    icon: "Database",
    label: "Database",
    color: "amber",
    items: [
      "MySQL",
      "MariaDB",
      "SQL",
      "phpMyAdmin",
      "Query Optimization",
      "Database Design",
      "Sequelize ORM",
    ],
  },
  {
    icon: "Layers",
    label: "Tools & Platforms",
    color: "emerald",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Google Colab",
      "Kaggle",
      "Vercel",
      "Figma",
      "AnyDesk",
    ],
  },
];

export const colorMap: Record<SkillColor, string> = {
  violet: "text-cat-ai bg-cat-ai/10 border-cat-ai/20",
  cyan: "text-cat-web bg-cat-web/10 border-cat-web/20",
  amber: "text-cat-database bg-cat-database/10 border-cat-database/20",
  emerald: "text-cat-mobile bg-cat-mobile/10 border-cat-mobile/20",
};
