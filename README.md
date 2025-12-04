# IRTS Frontend - E-commerce Web App

Frontend ini dibuat menggunakan **React** untuk browser, sebagai bagian dari tugas FullStack Developer Test IRTS. Frontend ini berkomunikasi dengan backend API (REST API) untuk fitur e-commerce seperti katalog produk, detail produk, autentikasi customer, dan dashboard admin.

---

## 🔧 Teknologi & Tools
- **React** (v18+)
- **React Router Dom** (untuk routing)
- **Axios** (untuk HTTP request ke backend)
- **TailwindCSS** (opsional untuk styling)
- **JWT Token** (untuk autentikasi)
- Node.js & npm/yarn (untuk environment)

---

## 📂 Struktur Project

```

irts-frontend/
│
├─ public/           # File statis (index.html, favicon, dsb)
├─ src/
│  ├─ api/           # File konfigurasi API (axios instance)
│  ├─ components/    # Komponen reusable (Navbar, Card, Button, dsb)
│  ├─ pages/         # Halaman utama
│  │   ├─ Home.jsx
│  │   ├─ ProductList.jsx
│  │   ├─ ProductDetail.jsx
│  │   ├─ Login.jsx
│  │   ├─ Register.jsx
│  │   ├─ AdminDashboard.jsx
│  │   └─ CustomerDashboard.jsx
│  ├─ context/       # Context untuk auth, user state
│  ├─ hooks/         # Custom hooks (opsional)
│  ├─ App.jsx        # Root component
│  └─ index.js       # Entry point React
├─ package.json
└─ README.md

````

---

## 🚀 Instalasi & Menjalankan

1. **Clone repository**
```bash
git clone <link-repo-frontend>
cd irts-frontend
````

2. **Install dependencies**

```bash
npm install
# atau
yarn install
```

3. **Konfigurasi environment**
   Buat file `.env` di root project:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

> Sesuaikan URL dengan backend lo. Jika backend pakai port lain, ubah di sini.

4. **Jalankan frontend**

```bash
npm start
# atau
yarn start
```

Frontend akan berjalan di `http://localhost:3000`

---

## 🔑 Fitur yang Sudah Implement

1. **Product List Page (Catalog List)**

   * Menampilkan daftar produk dari backend API.
2. **Product Detail Page**

   * Menampilkan detail satu produk.
3. **Navigation Bar**

   * Navigasi ke Home, Catalog, Login/Register, Admin Dashboard.
4. **Customer Authentication**

   * Register & Login menggunakan JWT token.
   * Token disimpan di localStorage dan digunakan untuk request API.
5. **Admin Dashboard**

   * CRUD untuk produk dan akun customer (dengan API backend).

---

## ⚡ Cara Menguji

1. Jalankan backend API terlebih dahulu (sesuai instruksi backend).
2. Jalankan frontend (lihat langkah di atas).
3. Buka browser `http://localhost:3000`
4. Coba akses halaman:

   * `/` : Home / Catalog
   * `/product/:id` : Detail produk
   * `/login` & `/register` : Autentikasi customer
   * `/admin` : Admin dashboard (pastikan login sebagai admin)

---

## 🔄 Catatan

* Pastikan backend API sudah jalan sebelum membuka frontend.
* Jika menggunakan JWT, pastikan token dikirim di header `Authorization: Bearer <token>`.
* Styling menggunakan TailwindCSS, bisa diubah sesuai desain.

---

