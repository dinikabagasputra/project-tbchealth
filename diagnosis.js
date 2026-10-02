function hasilDiagnosa() {
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let jk = document.getElementById("jk").value;

  if (nama == "" || umur == "" || jk == "") {
    alert("Silakan lengkapi data pasien.");

    return;
  }

  let gejala = document.querySelectorAll(".gejala:checked");

  let jumlah = gejala.length;

  let hasil = "";
  let saran = "";
  let warna = "";

  if (jumlah <= 2) {
    hasil = "Kemungkinan TBC Rendah";
    warna = "green";

    saran =
      "Tetap menjaga kesehatan dan lakukan pemeriksaan jika gejala bertambah.";
  } else if (jumlah <= 5) {
    hasil = "Kemungkinan TBC Sedang";
    warna = "orange";

    saran = "Disarankan melakukan pemeriksaan ke Puskesmas atau Rumah Sakit.";
  } else {
    hasil = "Kemungkinan TBC Tinggi";
    warna = "red";

    saran =
      "Segera lakukan pemeriksaan dahak atau rontgen dada di fasilitas kesehatan.";
  }

  document.getElementById("hasil").innerHTML = `

<h2>🩺 Hasil Skrining</h2>

<hr>

<p><b>Nama Pasien :</b> ${nama}</p>

<p><b>Umur :</b> ${umur} Tahun</p>

<p><b>Jenis Kelamin :</b> ${jk}</p>

<p><b>Jumlah Gejala :</b> ${jumlah} / 10</p>

<h2 style="color:${warna};">
${hasil}
</h2>

<p>${saran}</p>

<hr>

<p style="color:#777;font-size:14px;">

<b>Disclaimer :</b><br>

Hasil ini merupakan skrining awal berdasarkan gejala yang dipilih dan
bukan diagnosis medis. Untuk memastikan kondisi kesehatan, lakukan
pemeriksaan di Puskesmas atau Rumah Sakit.

</p>

<button onclick="window.print()">

🖨 Cetak Hasil

</button>

`;
}

const gejala = document.querySelectorAll(".gejala");

gejala.forEach((item) => {
  item.addEventListener("change", updateProgress);
});

function updateProgress() {
  let jumlah = document.querySelectorAll(".gejala:checked").length;

  let persen = (jumlah / 10) * 100;

  document.getElementById("progressBar").style.width = persen + "%";

  document.getElementById("progressText").innerHTML =
    jumlah + " dari 10 gejala dipilih";
}
