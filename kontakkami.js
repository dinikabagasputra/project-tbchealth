const formKontak = document.getElementById("formKontak");

if(formKontak){

formKontak.addEventListener("submit", function(e){

e.preventDefault();

const nama = document.getElementById("nama").value;

document.getElementById("notif").innerHTML =
"✅ Terima kasih <b>" + nama + "</b>, pesan Anda berhasil dikirim. Tim kami akan segera menghubungi Anda.";

formKontak.reset();

});

}