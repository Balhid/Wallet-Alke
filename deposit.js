console.log("Ventana Depósito")
const form = document.getElementById("depositarForm");

$("#depositarForm").on("submit", function (e) { 
    
    e.preventDefault();

    const monto = Number($("#monto").val());

        if (monto <= 0 || isNaN(monto)) {
        
            $("#mensajeDeposito")
            .text("Ingrese un monto válido")
            .removeClass("text-success")
            .addClass("text-danger")
            .fadeIn()
            .delay(1500)
            .fadeOut();
        return;
    }


        let saldo = Number(localStorage.getItem("saldo")) || 0;
        saldo += monto;
        localStorage.setItem("saldo", saldo);


    
   let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.push(`+ Depósito $${monto}`);

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
    
    
    $("#mensajeDeposito")
            .text("Depósito Realizado con Éxito")
            .removeClass("text-danger")
            .addClass("text-success")
            .fadeIn()
            .delay(1500)
            .fadeOut(function () {
                
                window.location.href = "menu.html";
            });
    });