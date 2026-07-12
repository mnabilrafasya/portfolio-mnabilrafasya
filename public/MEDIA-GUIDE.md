# Cara menambahkan foto & video asli

Semua path media proyek sudah disiapkan di `src/data/projects.ts` dan
`src/data/profile.ts`. Selama file belum ada, situs akan otomatis
menampilkan placeholder bergaya (bukan ikon gambar rusak) — jadi aman
untuk deploy sekarang dan diisi bertahap nanti.

## Foto profil (About section)

1. Simpan foto di `public/images/about/photo.jpg` (rasio 4:5 paling pas).
2. Buka `src/data/profile.ts`, isi `photo: "/images/about/photo.jpg"`.

## Thumbnail & video proyek

Untuk setiap proyek di `src/data/projects.ts`:

- `previewImage` → screenshot utama, taruh di `public/images/projects/`.
- `previewVideo` (opsional) → klip pendek 5–10 detik, format `.mp4`,
  taruh di `public/videos/projects/`. Ini akan otomatis diputar saat
  thumbnail di-hover. Kalau field ini dikosongkan/dihapus, kartu cukup
  menampilkan thumbnail statis — tidak perlu video.

## Galeri / tampilan halaman lain

Field `gallery` pada tiap proyek menerima array `{ label, image, video? }`.
Ini dipakai sebagai slider di halaman detail proyek — cocok untuk:

- Beberapa halaman berbeda dari satu website (Login, Dashboard, dst).
- Beberapa visualisasi hasil dari satu model AI (confusion matrix,
  attention map, dst).

Tambah atau kurangi item di array ini sesuai proyekmu — slider akan
otomatis menyesuaikan jumlah dot indicator-nya. Kalau sebuah proyek tidak
punya tampilan lain, cukup hapus field `gallery` dari proyek itu, dan
halaman detail otomatis menampilkan satu thumbnail saja tanpa slider.

## Format yang disarankan

- Gambar: `.png`/`.jpg`, lebar ±1280px, rasio 16:10 untuk thumbnail.
- Video: `.mp4` (H.264), dikompres kecil (idealnya < 3MB), tanpa audio.
