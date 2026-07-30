export interface SkillGroup {
  label: string;
  /** nome icon lucide-react, di-resolve di komponen */
  icon: "Brain" | "Code2" | "Database" | "Layers";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "Code2",
    label: "Full Stack Development",
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
