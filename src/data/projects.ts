import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "complaint-monitoring",
    slug: "sistem-monitoring-pengaduan",
    title: "Sistem Monitoring Pengaduan",
    description:
      "A web-based complaint monitoring system developed during my internship at the National Land Agency (BPN) Palembang to digitalize complaint monitoring workflows, enabling citizens to track the status of land dispute complaints remotely using unique tracking codes.",
    longDescription:
      "Developed during my internship at the National Land Agency (BPN) Palembang to digitize the complaint monitoring process. Previously, citizens had to visit the office to check the progress of land dispute complaints. The system enables users to securely monitor complaint status online using a unique tracking code provided during complaint submission. Built with React.js, Express.js, and MySQL, featuring complaint tracking, status management, and an administrative dashboard. The system provides a public tracking portal and an administrative dashboard for managing complaint data using historical records during system validation.",
    category: "web",
    tags: [
      "React.js",
      "MySQL",
      "Express.js",
      "Tailwind CSS",
      "REST API",
      "Full Stack",
    ],
    previewImage:
      "/images/projects/complaint-monitoring/complaint-monitoring.png",
    previewVideo: "/videos/projects/complaint-monitoring.mp4",
    gallery: [
      {
        label: "Main Page",
        image: "/images/projects/complaint-monitoring/complaint-monitoring.png",
        video: "/videos/projects/complaint-monitoring.mp4",
      },
      {
        label: "Complaint Details",
        image: "/images/projects/complaint-monitoring/status-pengaduan.png",
      },
      {
        label: "Admin Login Page",
        image: "/images/projects/complaint-monitoring/login-pengaduan.png",
      },
      {
        label: "Staff Dashboard",
        image:
          "/images/projects/complaint-monitoring/admin-dashboard-pengaduan.png",
      },
      {
        label: "Add or Edit Complaint Form",
        image: "/images/projects/complaint-monitoring/form-pengaduan.png",
      },
    ],
    links: {
      github:
        "https://github.com/mnabilrafasya/Monitoring-Pengaduan-Warga-ke-Kantor-Pertanahan",
    },
    featured: true,
    year: 2026,
  },

  {
    id: "BEM KM FASILKOM UNSRI",
    slug: "bem-km-fasilkom-unsri",
    title: "BEM KM FASILKOM UNSRI",
    description:
      "Official website redevelopment project for BEM KM FASILKOM UNSRI, where I served as the Technical Lead (Project PIC) and Full Stack Developer, leading development activities and implementing core website features.",
    longDescription:
      "Led the redevelopment of the official BEM KM FASILKOM UNSRI website as the Technical Lead (Project PIC), coordinating project planning, development tasks, and technical implementation. Developed full-stack features using React.js, Express.js, and MySQL, including organizational profile pages, department and division information, and the member management. Built an administrative dashboard that enables administrators to manage member profiles, departments, divisions, and published content through CRUD operations, improving organizational information management and communication.",
    category: "web",
    tags: [
      "React.js",
      "MySQL",
      "Express.js",
      "Tailwind CSS",
      "Full Stack",
      "Project Management",
    ],
    previewImage:
      "/images/projects/bem-km-fasilkom-unsri/dashboard-bem-fasilkom.png",
    previewVideo: "/videos/projects/bem-fasilkom-unsri.mp4",
    gallery: [
      {
        label: "Main Page",
        image:
          "/images/projects/bem-km-fasilkom-unsri/dashboard-bem-fasilkom.png",
        video: "/videos/projects/bem-fasilkom-unsri.mp4",
      },
      {
        label: "Admin Login Page",
        image: "/images/projects/bem-km-fasilkom-unsri/login-bem.png",
      },
      {
        label: "Admin Dashboard",
        image: "/images/projects/bem-km-fasilkom-unsri/admin-dashboard-bem.png",
        video: "/videos/projects/admin-dashboard-bem.mp4",
      },
    ],
    links: {
      github: "https://github.com/mnabilrafasya/Web-BEM-KM-Fasilkom-UNSRI",
    },
    featured: true,
    year: 2025,
  },

  {
    id: "Pose Detection with YOLOv8",
    slug: "pose-detection-yolov8",
    title: "Pose Detection with YOLOv8",
    description:
      "Real-time human pose estimation web application using YOLOv8 Pose, Streamlit, and WebRTC to detect body keypoints and classify standing, sitting, squatting, and lying postures from live camera input on desktop and mobile browsers.",
    longDescription:
      "Developed a real-time computer vision web application using YOLOv8 Pose, OpenCV, Streamlit, and streamlit-webrtc for live human pose analysis. The system detects human body keypoints from camera input and applies rule-based posture classification to recognize four body postures: standing, sitting, squatting, and lying down. Real-time skeleton visualization and pose prediction are displayed interactively through a browser-based interface, allowing the application to be accessed from both desktop and mobile devices without requiring native installation.",
    category: "ai",
    tags: ["YOLOv8 Pose", "Computer Vision", "OpenCV", "Streamlit", "WebRTC"],
    previewImage: "/images/projects/pose-detection/standing.png",
    previewVideo: "/videos/projects/yolov8-pose-demo.mp4",
    gallery: [
      {
        label: "Standing Pose",
        image: "/images/projects/pose-detection/standing.png",
        video: "/videos/projects/yolov8-pose-demo.mp4",
      },
      {
        label: "Sitting Pose",
        image: "/images/projects/pose-detection/sitting.png",
      },
      {
        label: "Squatting Pose",
        image: "/images/projects/pose-detection/squatting.png",
      },
      {
        label: "Lying Pose",
        image: "/images/projects/pose-detection/lying.png",
      },
    ],
    metrics: [
      { label: "Classes", value: "4" },
      { label: "Input", value: "Live Webcam" },
      { label: "Model", value: "YOLOv8 Pose" },
      { label: "Framework", value: "Streamlit" },
      { label: "Platforms", value: "Desktop & Mobile" },
    ],
    links: {
      github: "https://github.com/mnabilrafasya/DETEKSI-POSE-WITH-YOLO",
    },
    featured: true,
    year: 2025,
  },

  {
    id: "Indo Currency",
    slug: "indo-currency",
    title: "Indo Currency",
    description:
      "Mobile personal finance application that helps users manage multiple bank and e-wallet accounts, track daily transactions, monitor spending, and generate financial reports.",
    longDescription:
      "Indo Currency is a mobile application designed to help users manage their finances by tracking transactions across various bank and e-wallet accounts. The app provides features such as expense tracking, budget management, and generating financial reports. Built with React Native for cross-platform compatibility and MySQL for robust data management, Indo Currency aims to simplify personal finance management for its users.",
    category: "mobile",
    tags: ["React Native", "Express.js", "MySQL", "Expo", "Mobile Development"],
    previewImage: "/images/projects/indo-currency/indo-currency.png",
    previewVideo: "/videos/projects/indo-currency.mp4",
    gallery: [
      {
        label: "Main Page",
        image: "/images/projects/indo-currency/indo-currency.png",
        video: "/videos/projects/indo-currency.mp4",
      },
      {
        label: "Account Login Page",
        image: "/images/projects/indo-currency/login-indocurrency.png",
      },
    ],
    links: {
      github: "https://github.com/mnabilrafasya/IndoCurrency",
    },
    featured: true,
    year: 2025,
  },

  {
    id: "Sinergi Fest",
    slug: "sinergi-fest",
    title: "Sinergi Fest",
    description:
      "Backend development for the SINERGI FEST event website, where I focused on authentication, participant registration, and competition management APIs.",
    longDescription:
      "Contributed as a Backend Developer for the SINERGI FEST event management website developed using CodeIgniter and MySQL. Responsible for implementing authentication, participant registration, competition management APIs, and backend business logic while supporting system monitoring and ensuring application stability during registration periods.",
    category: "web",
    tags: ["CodeIgniter", "MySQL", "PHP", "REST API", "Backend Development"],
    previewImage: "/images/projects/sinergi-fest/sinergi-fest.png",
    previewVideo: "/videos/projects/sinergi-fest.mp4",
    gallery: [
      {
        label: "Main Page",
        image: "/images/projects/sinergi-fest/sinergi-fest.png",
        video: "/videos/projects/sinergi-fest.mp4",
      },
      {
        label: "Competition Page",
        image: "/images/projects/sinergi-fest/lomba-sinergi.png",
      },
      {
        label: "Account Login Page",
        image: "/images/projects/sinergi-fest/login-sinergi-fest.png",
      },
      {
        label: "Personal Data and Competition Page",
        image: "/images/projects/sinergi-fest/data-diri-sinergi.png",
      },
    ],
    links: {
      github: "https://github.com/mnabilrafasya/Sinergi-Fest-2025",
    },
    featured: true,
    year: 2025,
  },

  {
    id: "Ai vs Real Face Classifier",
    slug: "ai-vs-real-face-classifier",
    title: "AI vs Real Face Classifier",
    description:
      "Image classification project using Vision Transformer (ViT-Base/16) to distinguish AI-generated and real human face images through transfer learning, with performance compared against ResNet-50 and EfficientNet-B0 baselines.",
    longDescription:
      "Developed an image classification model to distinguish AI-generated and authentic human face images using transfer learning with Vision Transformer (ViT-Base/16) pretrained on ImageNet-21k. The experiment utilized a 15,000-image subset of the 140K Real and Fake Faces Dataset, consisting of 7,500 real and 7,500 AI-generated face images. The model was implemented in PyTorch and compared against ResNet-50 and EfficientNet-B0 baselines. Performance was evaluated using Accuracy, Precision, Recall, F1-Score, and AUC-ROC, while attention map visualization and robustness analysis were conducted to improve interpretability and evaluate model stability under various image degradations.",
    category: "ai",
    tags: [
      "PyTorch",
      "Vision Transformer",
      "Transfer Learning",
      "Image Classification",
      "Computer Vision",
      "timm",
    ],
    previewImage: "/images/projects/ai-vs-real-face/eda_sampel.png",
    gallery: [
      {
        label: "Dataset Sample",
        image: "/images/projects/ai-vs-real-face/eda_sampel.png",
      },
      {
        label: "Dataset Distribution",
        image: "/images/projects/ai-vs-real-face/eda_distribusi.png",
      },
      {
        label: "ViT-B16 Training Curves",
        image: "/images/projects/ai-vs-real-face/training_curves.png",
      },
      {
        label: "Confusion Matrix",
        image: "/images/projects/ai-vs-real-face/confusion_matrix.png",
      },
      {
        label: "ViT-B16 vs CNN Baselines",
        image: "/images/projects/ai-vs-real-face/baseline_comparison.png",
      },
      {
        label: "Vit-B16 Robustness Analysis",
        image: "/images/projects/ai-vs-real-face/robustness_analysis.png",
      },
    ],
    metrics: [
      { label: "Dataset", value: "15,000 Images" },
      { label: "Classes", value: "2" },
      { label: "Accuracy", value: "98.73%" },
      { label: "Precision", value: "99.26%" },
      { label: "Recall", value: "98.20%" },
      { label: "F1-Score", value: "98.73%" },
      { label: "AUC-ROC", value: "99.86%" },
    ],
    links: {
      kaggle:
        "https://www.kaggle.com/code/muhammadnabilrafasya/real-or-fake-faces-with-vit",
    },
    featured: true,
    year: 2025,
  },

  {
    id: "4-2-3-1 Football Website",
    slug: "4-2-3-1-football-website",
    title: "4-2-3-1 Football Website",
    description:
      "Football information platform providing UEFA Champions League news, match schedules, results, and team standings, supported by an administrative dashboard for content management.",
    longDescription:
      "Developed a full-stack football information website using React (Vite), Express.js, and MySQL. The platform provides the latest UEFA Champions League news, match schedules and results, and league standings through a responsive user interface. Built an administrative dashboard that allows administrators to manage news articles, match data, and team standings through CRUD operations, simplifying content management and keeping information up to date.",
    category: "web",
    tags: [
      "React.js",
      "MySQL",
      "Express.js",
      "Tailwind CSS",
      "Full Stack",
      "REST API",
    ],
    previewImage: "/images/projects/4-2-3-1/4231.png",
    previewVideo: "/videos/projects/4231.mp4",
    gallery: [
      {
        label: "Main Page",
        image: "/images/projects/4-2-3-1/4231.png",
        video: "/videos/projects/4231.mp4",
      },
      {
        label: "Admin Matches",
        image: "/images/projects/4-2-3-1/admin_matches.png",
      },
      {
        label: "Admin News",
        image: "/images/projects/4-2-3-1/admin_news.png",
      },
      {
        label: "Admin Standings",
        image: "/images/projects/4-2-3-1/admin_standings.png",
      },
    ],
    links: {
      github: "https://github.com/mnabilrafasya/RPL",
    },
    featured: false,
    year: 2025,
  },

  {
    id: "ILKOM NEWS",
    slug: "ilkom-news",
    title: "ILKOM NEWS",
    description:
      "News management module developed for the official BEM KM FASILKOM UNSRI website, providing administrators with an efficient platform to publish and manage faculty-related news.",
    longDescription:
      "Developed the Ilkom News module as part of the BEM KM FASILKOM UNSRI digital platform. Built using React.js, Express.js, and MySQL, the module allows administrators to create, edit, delete, and publish faculty news articles through an administrative dashboard while providing students with a responsive news portal for accessing the latest organizational and academic information.",
    category: "web",
    tags: ["React.js", "MySQL", "Express.js", "Tailwind CSS"],
    previewImage: "/images/projects/ilkom-news/ilkom_news.png",
    previewVideo: "/videos/projects/ilkom_news.mp4",
    gallery: [
      {
        label: "Main Page",
        image: "/images/projects/ilkom-news/ilkom_news.png",
        video: "/videos/projects/ilkom_news.mp4",
      },
      {
        label: "Admin Data News",
        image: "/images/projects/ilkom-news/admin_data_ilkomnews.png",
      },
      {
        label: "Admin Form News",
        image: "/images/projects/ilkom-news/admin_form_ilkomnews.png",
      },
    ],
    links: {
      github: "https://github.com/mnabilrafasya/Ilkom-News",
    },
    featured: false,
    year: 2025,
  },

  {
    id: "Fetal Head Ultrasound Segmentation",
    slug: "fetal-head-ultrasound-segmentation",
    title: "Fetal Head Ultrasound Segmentation",
    description:
      "Multiclass medical image segmentation using a U-Net architecture to identify anatomical structures in fetal head ultrasound images.",
    longDescription:
      "Developed a multiclass semantic segmentation model using U-Net in PyTorch to segment fetal head ultrasound images into four anatomical classes: Brain Parenchyma, Cavum Septum Pellucidum (CSP), Lateral Ventricle (LV), and Background. The model was trained on 999 image-mask pairs using a combined Cross Entropy + Dice Loss and optimized with the Adam optimizer and ReduceLROnPlateau learning rate scheduler. Performance was evaluated on an independent test set using Intersection over Union (IoU) and Dice Coefficient, while prediction overlays were generated to compare segmentation results with ground truth masks.",
    category: "ai",
    tags: [
      "PyTorch",
      "U-Net",
      "Medical Imaging",
      "Computer Vision",
      "Segmentation",
    ],
    previewImage: "/images/projects/fetal-head/predictions.png",
    gallery: [
      {
        label: "Predicted Mask",
        image: "/images/projects/fetal-head/predictions.png",
      },
      {
        label: "Training History",
        image: "/images/projects/fetal-head/training_history.png",
      },
      {
        label: "Overlay",
        image: "/images/projects/fetal-head/overlay.png",
      },
    ],
    metrics: [
      { label: "Dataset", value: "999 Pairs" },
      { label: "Classes", value: "4" },
      { label: "Test IoU", value: "0.604" },
      { label: "Dice Score", value: "0.636" },
      { label: "Epochs", value: "100" },
      { label: "Parameters", value: "31.0M" },
    ],
    links: {
      colab:
        "https://colab.research.google.com/drive/1amKLM-d7rlCSdFIQQF8dnvZK88Ss-UTS?usp=sharing",
    },
    featured: false,
    year: 2025,
  },

  {
    id: "Face Mask Detection using Feature-Based Neural Network",
    slug: "face-mask-detection-feature-based-neural-network",
    title: "Face Mask Detection using Feature-Based Neural Network",
    description:
      "Binary face mask classification model combining handcrafted image features (Color Histogram, HOG, and LBP) with a custom neural network implemented in PyTorch to distinguish masked and unmasked faces.",
    longDescription:
      "Developed a binary image classification model to distinguish With Mask and Without Mask face images using handcrafted feature extraction and a custom Multi-Layer Perceptron (MLP). Extracted Color Histogram, Histogram of Oriented Gradients (HOG), and Local Binary Pattern (LBP) features before training a neural network implemented in PyTorch. The model was optimized using the Adam optimizer with Cosine Annealing Learning Rate scheduling and evaluated using Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.",
    category: "ai",
    tags: [
      "PyTorch",
      "OpenCV",
      "HOG",
      "LBP",
      "Color Histogram",
      "NumPy",
      "Computer Vision",
    ],
    previewImage: "/images/projects/face-mask-detection/eda_sample.png",
    gallery: [
      {
        label: "Dataset Sample",
        image: "/images/projects/face-mask-detection/eda_sample.png",
      },
      {
        label: "Dataset Distribution",
        image: "/images/projects/face-mask-detection/eda_distribution.png",
      },
      {
        label: "Training History",
        image: "/images/projects/face-mask-detection/training_history.png",
      },
      {
        label: "Confusion Matrix",
        image: "/images/projects/face-mask-detection/confusion_matrix.png",
      },
      {
        label: "Prediction Examples",
        image: "/images/projects/face-mask-detection/prediction_examples.png",
      },
    ],
    metrics: [
      { label: "Classes", value: "2" },
      { label: "Parameters", value: "512K" },
      { label: "Train", value: "18,000" },
      { label: "Test", value: "992" },
      { label: "Accuracy", value: "98.49%" },
      { label: "Macro F1", value: "98.5%" },
      { label: "Best Val", value: "99.12%" },
    ],
    links: {
      colab:
        "https://colab.research.google.com/drive/14rBErbgYa2pFQ4pqk-fG0xA2gApGLbLd?usp=sharing",
    },
    featured: false,
    year: 2025,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectsByCategory = (cat: Project["category"]) =>
  projects.filter((p) => p.category === cat);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
