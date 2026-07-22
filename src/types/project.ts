export type ProjectCategory = "web" | "ai" | "mobile";

export interface ProjectLinks {
  github?: string;
  kaggle?: string;
  colab?: string;
  live?: string;
  demo?: string;
}

/** Satu metrik hasil (akurasi, IoU, Dice, dll) untuk ditampilkan rapi di halaman detail proyek AI/ML. */
export interface ProjectMetric {
  label: string;
  value: string;
}

/**
 * Satu item "tampilan lain" dari proyek — bisa berupa halaman web yang berbeda
 * (login, dashboard, dst) atau visualisasi hasil (confusion matrix, attention map).
 * Dipakai untuk slider di halaman detail proyek, dan opsional untuk preview-cycle
 * di kartu proyek saat di-hover.
 *
 * image WAJIB diisi (placeholder otomatis dipakai jika belum ada file asli).
 * video OPSIONAL — jika diisi, item ini akan memutar video saat di-hover.
 */
export interface GalleryItem {
  label: string;
  image?: string;
  video?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];

  /** Thumbnail utama di kartu. Boleh dikosongkan — ProjectThumbnail akan menampilkan
   *  placeholder bergaya secara langsung, tanpa pernah mencoba fetch file yang belum ada. */
  previewImage?: string;
  /** Video singkat (idealnya 5–10 detik) yang diputar otomatis saat thumbnail di-hover. */
  previewVideo?: string;
  /** Tampilan/halaman lain dari proyek ini — dirender sebagai slider di halaman detail. */
  gallery?: GalleryItem[];
  /** Metrik kuantitatif (khusus proyek AI/ML) — dirender sebagai grid angka di halaman detail. */
  metrics?: ProjectMetric[];

  links: ProjectLinks;
  featured: boolean;
  year: number;
}
