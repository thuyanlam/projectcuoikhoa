function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username") .value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone") .value;
    var password = document.getElementById("password") .value;
    var user = {
        username : username,
        email : email ,
        phone : phone ,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng kí thành công");
    window.location.href="login.html"
}


function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if ( user == 0) {
        alert("vui lòng nhập username password")
    }
    else if ( username == data.username &&  email == data.email && password == data.password) {
        alert("đăng nhập thành công")
        window.location.href="index.html"
    }
    else{
        alert("Đăng nhập thất bại")
    }
}