console.log ("Conectado Correctamente")

const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("Formulario enviado");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email,password);
    
    const emailCorrecto = "test@test.com";
    const passwordCorrecta = "1234";

if (email === emailCorrecto && password === passwordCorrecta) {
     mensaje.innerHTML = `
            <div class="alert alert-success text-center fw-bold">
                Hola de nuevo! Redirigiendo...
            </div>
        `;
        if (!localStorage.getItem("saldo")) {
    localStorage.setItem("saldo", 100000);
    localStorage.setItem("movimientos", JSON.stringify([]));
}
    setTimeout(function () {
            window.location.href = "menu.html";
        }, 2000);
    
} 
else {
    mensaje.innerHTML = `
            <div class="alert alert-danger text-center fw-bold">
                Datos incorrectos
            </div>
        `;
}
});

