function register(event){

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // cek username sudah ada
    let ada = users.find(user => user.username === username);

    if(ada){
        alert("Username sudah digunakan!");
        return;
    }

    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Akun berhasil dibuat!");

    window.location.href="login.html";

}