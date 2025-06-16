function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "cootrasana@gmail.com" && password === "ejemplo123") {
        // Redirige a la página si el correo y la contraseña son correctos
        window.location.href = "../../html/login/login-load.html";
    } else {
        // Muestra una alerta si los datos no son correctos
        alert('Verifique bien los datos');
    }
}
