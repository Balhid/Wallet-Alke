console.log("Menú Conectado Exitosamente")

const saldoSpan = document.getElementById("saldo");
const saldo = localStorage.getItem("saldo");

saldoSpan.textContent = saldo;

const btnDepositar = document.getElementById("btnDepositar");
const btnEnviar = document.getElementById("btnEnviar");
const btnMovimientos = document.getElementById("btnMovimientos");
const mensaje = document.getElementById("mensaje");

btnDepositar.addEventListener("click", function () {

    mensaje.innerHTML = `
        <div class="alert alert-info text-center mx-4">
            Redirigiendo a Depósito...
        </div>
    `;

    setTimeout(function () {
        window.location.href = "deposit.html";
    }, 1500);
});

btnEnviar.addEventListener("click", function () {

    mensaje.innerHTML = `
        <div class="alert alert-info text-center mx-4">
            Redirigiendo a Enviar Dinero...
        </div>
    `;

    setTimeout(function () {
        window.location.href = "sendmoney.html";
    }, 1500);
});

btnMovimientos.addEventListener("click", function () {

    mensaje.innerHTML = `
        <div class="alert alert-info text-center mx-4">
            Redirigiendo a Últimos Movimientos...
        </div>
    `;

    setTimeout(function () {
        window.location.href = "transactions.html";
    }, 1500);
});

$("#btnDepositar").on("click", function () {
    $("#mensajeRedireccion")
        .text("Redirigiendo a Depósito...")
        .fadeIn(300)
        .delay(800)
        .fadeOut(300, function () {
            window.location.href = "deposit.html";
        });
});