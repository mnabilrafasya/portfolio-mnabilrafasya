export const profile = {
  name: "Muhammad Nabil Rafasya",
  role: "Informatics Engineering",
  location: "Palembang",
  tagline:
    "Computer Science undergraduate passionate about building software that solves real-world problems.",
  email: "mnabilrafasya03@gmail.com",
  github: "https://github.com/mnabilrafasya",
  linkedin: "https://www.linkedin.com/in/mnabilrafasya/",
  kaggle: "https://www.kaggle.com/muhammadnabilrafasya",
  cvFile: "/cv-nabil.pdf",
  university: "Sriwijaya University",
  status: "Active Student · Open to Internships",
  /** Letakkan foto profil asli di /public/images/about/photo.jpg lalu isi field ini.
   *  Selama kosong, kartu About akan menampilkan placeholder ikon — bukan gambar rusak. */
  photo: "/images/about/nabil1.jpeg",
  photos: ["/images/about/nabil1.jpeg", "/images/about/nabil2.jpeg", "/images/about/nabil3.jpeg"],
} as const;

export const heroTechStack = [
  "React.js",
  "Next.js",
  "Express.js",
  "MySQL",
  "PyTorch",
  "YOLOv8",
  "U-Net",
] as const;
