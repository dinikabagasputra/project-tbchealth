function login(event){

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Login admin
    if(username === "admin" && password === "12345"){

        localStorage.setItem("username","admin");
        window.location.href = "dashboard.html";
        return;

    }

    // Login user yang daftar
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(u){
        return u.username === username &&
               u.password === password;
    });

    if(user){

        localStorage.setItem("username", user.username);

        window.location.href = "dashboard.html";

    }else{

        alert("Username atau Password salah!");

    }

}

if(document.getElementById("selamat")){

let user=localStorage.getItem("username");

document.getElementById("selamat").innerHTML=
"Halo, "+user+" 👋";

}

function logout() {

    localStorage.clear();

    alert("Logout berhasil");

    location.replace("login.html");

}