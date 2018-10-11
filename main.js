var signInSubmit = document.getElementById("signInSubmit");

signinReq.addEventListener("click", validateSignIn);

function validateSignIn() {
    var form = document.getElementById("admin-login");
    var email = form.email.value;
    var password = form.password.value;
    if (!email == "charlie.brown@gmail.com" || !password == "admin"){
        return
    }
    else {
        window.location.href = "adminpage.html";
    }
}