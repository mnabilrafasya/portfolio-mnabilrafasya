# Portfolio — Nabil

Portfolio Next.js gabungan: visual style & tipografi dari `portfolio`, kelengkapan fitur
dari `portfolio-setup` (Skills, halaman detail proyek, thumbnail dengan video preview,
slider galeri), dibangun ulang dari nol di atas Next.js 16 + React 19 + Tailwind v4 +
Geist (self-hosted, tanpa dependensi ke Google Fonts saat build).

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

Sudah diverifikasi: `npm install`, `npm run build`, dan `npx eslint .` semuanya berjalan
tanpa error maupun warning.

## Struktur proyek

```
src/
  app/                    Halaman (App Router)
    page.tsx              Homepage (Hero, About, Skills, Featured Projects, Contact)
    projects/page.tsx      Halaman semua proyek (dengan filter kategori)
    projects/[slug]/       Halaman detail proyek (generateStaticParams, SSG penuh)
  components/
    layout/                Navbar, Footer
    sections/               Hero, About, Skills, FeaturedProjects, Contact
    projects/               ProjectCard, ProjectThumbnail, ProjectGallerySlider, MetricsGrid
    ui/                     Reveal (scroll animation), SectionLabel, BrandIcons
  data/
    profile.ts              Nama, email, link sosial, dll — edit di sini
    skills.ts                Kategori & daftar skill
    projects.ts               Data semua proyek
  lib/
    placeholder.ts           Generator placeholder thumbnail (SVG, tanpa file fisik)
    utils.ts                  Helper umum (cn, label/warna kategori)
  types/
    project.ts                Tipe data Project, GalleryItem, dll
public/
  MEDIA-GUIDE.md              Panduan menambahkan foto/video asli
```

## Menambahkan konten asli

1. **Profil & foto** → edit `src/data/profile.ts`. Foto profil ditaruh di
   `public/images/about/`, lalu isi field `photo`.
2. **Proyek** → edit `src/data/projects.ts`. Setiap proyek punya field media yang
   sengaja dikomentari (`// previewImage: "..."`) — uncomment dan sesuaikan path
   setelah file asli ditaruh di `public/images/projects/` atau
   `public/videos/projects/`. Detail lengkap ada di `public/MEDIA-GUIDE.md`.
3. Selama field media kosong, situs otomatis menampilkan placeholder bergaya —
   tidak akan pernah muncul ikon "gambar rusak".

## Catatan teknis

- **Animasi**: reveal-on-scroll memakai CSS transition + IntersectionObserver native
  (bukan tweening numerik dari Framer Motion) supaya tidak bergantung pada animation
  engine pihak ketiga untuk hal yang sebenarnya cukup ditangani CSS. Framer Motion
  tetap dipakai untuk interaksi (menu mobile, hover, dsb).
- **Hover-to-play video**: `ProjectThumbnail` otomatis memutar `previewVideo` saat
  di-hover (idealnya klip 5–10 detik), dan otomatis fallback ke thumbnail diam kalau
  video gagal dimuat — tidak perlu logic tambahan dari kamu.
- **Slider multi-halaman**: isi array `gallery` pada sebuah proyek untuk
  menampilkan beberapa "tampilan lain" (halaman web berbeda, atau visualisasi hasil
  AI) sebagai slider di halaman detail proyek itu.
