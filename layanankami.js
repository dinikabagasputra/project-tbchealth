function pilihProvinsi(){

    let provinsi=document.getElementById("provinsi").value;
    let kabupaten=document.getElementById("kabupaten");

    kabupaten.innerHTML="";

    if(provinsi=="jabar"){

        kabupaten.innerHTML=`
        <option value="">-- Pilih Kabupaten --</option>
        <option value="sukabumi">Kabupaten Sukabumi</option>
        <option value="bogor">Kabupaten Bogor</option>
        `;

    }

    if(provinsi=="jateng"){

        kabupaten.innerHTML=`
        <option value="">-- Pilih Kabupaten --</option>
        <option value="karanganyar">Kabupaten Karanganyar</option>
        <option value="boyolali">Kabupaten Boyolali</option>
        <option value="surakarta">Kota Surakarta</option>
        `;

    }

    if(provinsi=="jatim"){

        kabupaten.innerHTML=`
        <option value="">-- Pilih Kabupaten --</option>
        <option value="malang">Kabupaten Malang</option>
        <option value="madiun">Kabupaten Madiun</option>
        <option value="surabaya">Kota Surabaya</option>
        `;

    }

    if(provinsi=="dki"){

        kabupaten.innerHTML=`
        <option value="">-- Pilih Kabupaten --</option>
        <option value="jaksel">Jakarta Selatan</option>
        <option value="jaktim">Jakarta Timur</option>
        <option value="jakbar">Jakarta Barat</option>
        `;

    }
}

function pilihKabupaten(){

let kab=document.getElementById("kabupaten").value;

let kec=document.getElementById("kecamatan");

kec.innerHTML="";

if(kab=="sukabumi"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="cisaat">Cisaat</option>

<option value="sukaraja">Sukaraja</option>

<option value="cibadak">Cibadak</option>

`;

}

else if(kab=="bogor"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="cibinong">Cibinong</option>

<option value="citeureup">Citeureup</option>

`;

}

else if(kab=="karanganyar"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="gondangrejo">Kecamatan Gondangrejo</option>

<option value="kerjo">Kecamatan Kerjo</option>

<option value="mojogedang">Kecamatan Mojogedang</option>

`;

}

else if(kab=="boyolali"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="nogosari">Kecamatan Nogosari</option>

<option value="simo">Kecamatan Simo</option>

<option value="ngemplak">Kecamatan Ngemplak</option>
`;

}

else if(kab=="surakarta"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="mojosongo">Kecamatan Mojosongo</option>

<option value="jebres">Kecamatan Jebres</option>

<option value="laweyan">Kecamatan Laweyan</option>
`;

}

else if(kab=="malang"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="klojen">Kecamatan Klojen</option>

<option value="blimbing">Kecamatan Blimbing</option>

<option value="kedungkandang">Kecamatan Kedungkandang</option>
`;

}

else if(kab=="madiun"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="mangunharjo">Kecamatan Mangunharjo</option>

<option value="taman">Kecamatan Taman</option>

<option value="balerejo">Kecamatan Balerejo</option>
`;

}

else if(kab=="surabaya"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="asemrowo">Kecamatan Asemrowo</option>

<option value="benowo">Kecamatan benowo</option>

<option value="bubutan">Kecamatan bubutan</option>
`;

}

else if(kab=="jaksel"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="kebayoran">Kebayoran Baru</option>

<option value="pasarminggu">Pasar Minggu</option>

`;

}

else if(kab=="jaktim"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="cakung">Cakung</option>

<option value="matraman">Matraman</option>

`;

}

else if(kab=="jakbar"){

kec.innerHTML=`

<option value="">-- Pilih Kecamatan --</option>

<option value="kalideres">Kecamatan Kalideres</option>

<option value="cengkareng">Kecamatan Cengkareng</option>

`;

}


}

function pilihKecamatan(){

let kec=document.getElementById("kecamatan").value;

let hasil=document.getElementById("hasilPuskesmas");

if(kec=="cisaat"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Cisaat</b></p>

<p>Jl. Raya Cisaat No.25</p>

`;

}

else if(kec=="sukaraja"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Sukaraja</b></p>

<p>Jl. Raya Sukaraja No.12</p>

`;

}

else if(kec=="cibadak"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Cibadak</b></p>

<p>Jl. Siliwangi No.18</p>

`;

}

else if(kec=="cibinong"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Cibinong</b></p>

<p>Jl. Siliwangi No.18</p>

`;

}

else if(kec=="citeureup"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Citeureup</b></p>

<p>Jl. Siliwangi No.18</p>

`;

}

else if(kec=="gondangrejo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Gondangrejo</b></p>

<p>Jl. Solo - Purwodadi No.Km. 12, Tuban Kulon, Tuban, Kec. Gondangrejo, Kabupaten Karanganyar, Jawa Tengah 57773</p>

`;

}

else if(kec=="kerjo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Kerjo</b></p>

<p>Jl. Kerjokra, Kerjo, Sumberejo, Kec. Kerjo, Kabupaten Karanganyar, Jawa Tengah 57753</p>

`;

}

else if(kec=="mojogedang"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Mojogedang</b></p>

<p>Gaden, Kec. Mojogedang, Kabupaten Karanganyar, Jawa Tengah 57752</p>

`;

}

else if(kec=="nogosari"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Nogosari</b></p>

<p>Jl. Nogosari No.KM. 1, Dusun 1, Glonggong, Kec. Nogosari, Kabupaten Boyolali, Jawa Tengah 57378</p>

`;

}

else if(kec=="simo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Simo</b></p>

<p>HM6G+3CR, Jl. Singoprono Raya, Kebayanan 2, Pelem, Kec. Simo, Kabupaten Boyolali, Jawa Tengah 57377</p>

`;

}

else if(kec=="ngemplak"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Ngemplak</b></p>

<p>Garen, Pandeyan, Kec. Ngemplak, Kabupaten Boyolali, Jawa Tengah</p>

`;

}

else if(kec=="mojosongo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Mojosongo</b></p>

<p>Jl. Sibela Timur 4 No.1, Mojosongo, Kec. Jebres, Kota Surakarta, Jawa Tengah 57127</p>

`;

}

else if(kec=="jebres"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Jebres</b></p>

<p>Jl. Kartika 4 No.2, RT.03/RW.18, Jebres, Kec. Jebres, Kota Surakarta, Jawa Tengah 57126</p>

`;

}

else if(kec=="laweyan"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Laweyan</b></p>

<p>Jl. Sidoluhur No.29, Pajang, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57146</p>

`;

}

else if(kec=="klojen"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas Klojen</b></p>

<p>Jl. Simpang Arjuno No.17, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119</p>

`;

}

else if(kec=="blimbing"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas blimbing</b></p>

<p>Jl. Laksda Adi Sucipto No.315, Pandanwangi, Kec. Blimbing, Kota Malang, Jawa Timur 65126</p>

`;

}

else if(kec=="kedungkandang"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas kedungkandang</b></p>

<p>Jl. Ki Ageng Gribig No.142, Kedungkandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138</p>

`;

}

else if(kec=="mangunharjo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas mangunharjo</b></p>

<p>Jl. Gajah Mada No.124, Manguharjo, Kec. Manguharjo, Kota Madiun, Jawa Timur 63127</p>

`;

}

else if(kec=="taman"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas taman</b></p>

<p>9G3F+5FM, Jl. Serayu, Pandean, Kec. Taman, Kota Madiun, Jawa Timur 63133</p>

`;

}

else if(kec=="balerejo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas balerejo</b></p>

<p>Jl. Raya Madiun - Surabaya No.82, Kasreman, Balerejo, Kec. Balerejo, Kabupaten Madiun, Jawa Timur 63152</p>

`;

}

else if(kec=="asemrowo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas asemrowo</b></p>

<p>Jl. Asem Raya No.8, Asem Rowo, Kec. Asem Rowo, Surabaya, Jawa Timur 60182</p>

`;

}

else if(kec=="benowo"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas benowo</b></p>

<p>Jl. Raya Benowo, Benowo, Kec. Pakal, Surabaya, Jawa Timur 60195</p>

`;

}

else if(kec=="bubutan"){

hasil.innerHTML=`

<h3>🏥 Puskesmas Terdekat</h3>

<p><b>Puskesmas bubutan</b></p>

<p>Jl. Kalibutuh No.26, Tembok Dukuh, Kec. Bubutan, Surabaya, Jawa Timur 60252</p>

`;

}

else{

hasil.innerHTML="";

}

}

function pilihDokter() {

    let dokter = document.getElementById("dokter").value;
    let hasil = document.getElementById("hasilDokter");

    if (dokter == "1") {

        hasil.innerHTML = `
        <h2>👨‍⚕️ dr. Ahmad Fauzi</h2>

        <p><b>🏥 Puskesmas :</b> Puskesmas Sukaraja</p>

        <p><b>🩺 Spesialis :</b> Dokter Umum Penanganan TBC</p>

        <p><b>📅 Jadwal Praktik :</b></p>

        <ul>
            <li>Senin : 08.00 - 12.00</li>
            <li>Selasa : 08.00 - 12.00</li>
            <li>Rabu : 13.00 - 16.00</li>
            <li>Kamis : 08.00 - 12.00</li>
            <li>Jumat : 08.00 - 11.00</li>
        </ul>

        <p><b>📱 WhatsApp :</b> 081234567890</p>

        <a class="wa-btn"
        href="https://wa.me/6281234567890"
        target="_blank">
        Hubungi via WhatsApp
        </a>
        `;
    }

    else if (dokter == "2") {

        hasil.innerHTML = `
        <h2>👩‍⚕️ dr. Siti Rahma</h2>

        <p><b>🏥 Puskesmas :</b> Puskesmas Cibadak</p>

        <p><b>🩺 Spesialis :</b> Dokter Paru</p>

        <p><b>📅 Jadwal Praktik :</b></p>

        <ul>
            <li>Senin : 13.00 - 16.00</li>
            <li>Selasa : 13.00 - 16.00</li>
            <li>Kamis : 08.00 - 12.00</li>
            <li>Sabtu : 08.00 - 11.00</li>
        </ul>

        <p><b>📱 WhatsApp :</b> 081345678910</p>

        <a class="wa-btn"
        href="https://wa.me/6281345678910"
        target="_blank">
        Hubungi via WhatsApp
        </a>
        `;
    }

    else if (dokter == "3") {

        hasil.innerHTML = `
        <h2>👨‍⚕️ dr. Budi Santoso</h2>

        <p><b>🏥 Puskesmas :</b> Puskesmas Cisaat</p>

        <p><b>🩺 Spesialis :</b> Dokter Umum Penanganan TBC</p>

        <p><b>📅 Jadwal Praktik :</b></p>

        <ul>
            <li>Rabu : 08.00 - 12.00</li>
            <li>Kamis : 13.00 - 16.00</li>
            <li>Jumat : 08.00 - 11.00</li>
            <li>Sabtu : 08.00 - 12.00</li>
        </ul>

        <p><b>📱 WhatsApp :</b> 081198765432</p>

        <a class="wa-btn"
        href="https://wa.me/6281198765432"
        target="_blank">
        Hubungi via WhatsApp
        </a>
        `;
    }

    else {

        hasil.innerHTML = `
        <h3>Silakan pilih dokter terlebih dahulu.</h3>
        `;

    }

}