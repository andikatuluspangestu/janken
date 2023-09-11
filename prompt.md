Selamat Siang, Buatkan sebuah aplikasi/game kertas batu gunting sederhana berbasis HTML, CSS, dan Javascript!

A. Ketentuan :
- Gunakan HTML, CSS, dan Javascript
- Menerapkan jQuery Effects
- Menerapkan jQuery Events
- Menerapkan jQuery DOM Manipulation

B. Struktur Folder :
.
├── assets
│   ├── img
│   │   ├── expressions
│   │   │   ├── happy.png
│   │   │   ├── omg.png
│   │   │   └── sad.png
│   │   └── items
│   │       ├── batu.png
│   │       ├── gunting.png
│   │       └── kertas.png
│   ├── script.js
│   └── style.css
├── index.html

C. Flow Aplikasi :

Halaman Pertama :
1. Terdapat title `Kertas Batu Gunting`
2. Terdapat button `Mulai Permainan` atau `Main Lagi` jika permainan sudah selesai.

Halaman Kedua :
1. Halaman awal akan hilang dan akan muncul 3 icon (kertas, batu, gunting)
2. Tambahkan keterangan `Pilih salah satu` diatas icon, dan `Kamu memilih <nama icon>` dibawah icon (nama icon disesuaikan dengan icon yang dipilih dengan menggunakan animasi jquery)
3. Setelah user klik salah satu icon, maka akan muncul keterangan `Kamu memilih <nama icon>`
4. Tambahkan konfirmasi `Apakah kamu yakin dengan pilihanmu?` dengan 2 pilihan yaitu `Ya` dan `Tidak`, jika user memilih `Ya` maka akan beralih ke halaman ketiga, jika user memilih `Tidak` maka akan kembali ke halaman kedua.

Halaman Ketiga :
1. Halaman kedua akan hilang dan akan muncul keterangan "Komputer sedang memilih..." dengan animasi loading selama 5 detik.

Halaman Keempat :
1. Halaman ketiga akan hilang
2. Tampilkan halaman sekarang muncul icon yang dipilih oleh pemain dan komputer dengan keterangan `Kamu memilih <nama icon> dan Komputer memilih <nama icon>`
3. Pada halaman ini, tambahkan keterangan `Permainan akan dimulai dalam 3,2,1..` dengan animasi jquery dan otomatis akan beralih ke halaman kelima

Halaman Kelima :
1. Halaman keempat akan hilang dan akan muncul keterangan `Hasilnya adalah <nama icon> vs <nama icon>`, dan tambahkan keterangan `Kamu <menang/kalah/seri>` disertai gambar emoji.


D. Struktur HTML 

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kertas Batu Gunting</title>
  <link rel="stylesheet" href="assets/style.css">
</head>

<body>

  <div class="container">

    <!-- Halaman Pertama -->
    <div class="start-page" id="start-page">
      <h1>Kertas Batu Gunting</h1>
      <button class="start-btn">Mulai Permainan</button>
      <small>
        atau tekan tombol <strong>CTRL + R</strong> untuk memulai
      </small>
    </div>

    <!-- Halaman Kedua -->
    <div class="user-select-choice" id="user-select-choice">
      <h2>Silahkan kamu memilih salah satu item.</h2>
      <div class="user-select-choice-items">
        <img src="assets/img/batu.png" alt="" class="user-select-choice-item" data-choice="batu">
        <img src="assets/img/gunting.png" alt="" class="user-select-choice-item" data-choice="gunting">
        <img src="assets/img/kertas.png" alt="" class="user-select-choice-item" data-choice="kertas">
      </div>
      <h3 style="display: none;">Kamu memilih : <img src="" alt="" class="user-selected-choice-item" data-choice=""></h3>
      <button class="user-confirm-select-choice-btn" style="display: none;" onclick="">Lanjut</button>
    </div>

    <!-- Halaman Ketiga -->
    <div class="computer-select-choice" id="computer-select-choice">
      <h2>Komputer sedang memilih...</h2>
    </div>

    <!-- Halaman Keempat -->
    <div class="preparing-battle-game" id="preparing-battle-game">
      <h2>Bersiaplah !!!</h2>
      <div class="preparing-battle-game-items">
        <div class="selected-item-choice" id="selected-item-choice">
          <h3>Kamu memilih : <img src="" alt="" class="user-selected-choice-item" data-choice=""></h3>
          <h1>VS</h1>
          <h3>Komputer memilih : <img src="" alt="" class="computer-selected-choice-item" data-choice=""></h3>
        </div>
      </div>
      <h5 id="countdown"></h5>
    </div>

    <!-- Halaman Kelima -->
    <div class="game-result" id="game-result">
      <h2>Hasil Permainan</h2>
      <div class="game-result-items">
        <!-- Emoji ( Sad, Happy, Omg ) -->
        <img src="" alt="" class="game-result-emoji" id="game-result-emoji">
        <h3 id="game-result-text"></h3>
        <p id="game-result-description"></p>
      </div>
      <button style="display: none;" class="play-again-btn" id="play-again-btn">Main Lagi</button>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="assets/script.js"></script>
</body>

</html>
```
