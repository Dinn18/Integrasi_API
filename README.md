# Proyek API Ulasan Film - Kelompok 9
## Anggota Kelompok
- Ahmad Maulidin (362458302146)
- Intan Rahma Safira (36245830)
- Adelia florenzety (36245830)

## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film
dari Studio Ghibli, dengan data film yang direferensikan dari Ghibli API publik.

## Cara Menjalankan Proyek
1. Clone repository ini: ‘git clone https://github.com/Dinn18/Integrasi_API.git ‘
2. Masuk ke direktori: ‘cd Integrasi_API‘
3. Install dependensi: ‘npm install‘
4. Jalankan server: ‘node server.js‘
Server akan berjalan di ‘http://localhost:3300‘.

## Daftar Endpoint
- ‘GET /status‘: Cek status API.
- ‘GET /reviews‘: Mengambil semua ulasan.
- ‘GET /reviews/:id‘: Mengambil ulasan spesifik.
- ‘POST /reviews‘: Membuat ulasan baru.
- ‘PUT /reviews/:id‘: Memperbarui ulasan.
- ‘DELETE /reviews/:id‘: Menghapus ulasan.
