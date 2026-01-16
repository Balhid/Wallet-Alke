console.log("Envío de Dinero - Versión con contactos");

const mensaje = document.getElementById("mensaje");


function cargarContactos() {
    const lista = document.getElementById("listaContactos");
    if (!lista) return;

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    
    lista.innerHTML = "";
    
    if (contactos.length === 0) {
        lista.innerHTML = '<li class="list-group-item text-muted text-center">No hay contactos aún</li>';
        return;
    }

    contactos.forEach((contacto, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
        li.style.cursor = "pointer";
        
        li.innerHTML = `
            <div>
                <strong>${contacto.nombre}</strong><br>
                <small class="text-muted">${contacto.alias} • ${contacto.banco}</small>
            </div>
        `;

        li.addEventListener("click", () => {
            document.getElementById("destinatario").value = contacto.nombre;
            const modal = new bootstrap.Modal(document.getElementById("enviarDineroModal"));
            modal.show();
        });

        lista.appendChild(li);
    });
}


document.getElementById("btnGuardarContacto")?.addEventListener("click", () => {
    const nombre = document.getElementById("nombreCompleto").value.trim();
    const cbu    = document.getElementById("cbu").value.trim();
    const alias  = document.getElementById("alias").value.trim();
    const banco  = document.getElementById("banco").value.trim();

    if (!nombre || !cbu || !alias || !banco) {
        alert("Completa todos los campos del contacto");
        return;
    }

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push({ nombre, cbu, alias, banco });
    localStorage.setItem("contactos", JSON.stringify(contactos));

    
    document.getElementById("nombreCompleto").value = "";
    document.getElementById("cbu").value = "";
    document.getElementById("alias").value = "";
    document.getElementById("banco").value = "";

    
    bootstrap.Modal.getInstance(document.getElementById("nuevoContactoModal")).hide();

    
    cargarContactos();

   
    $("#mensajeContacto")
    .text("Contacto Agregado Correctamente")
    .fadeIn()
    .delay(1500)
    .fadeOut();

$("#nuevoContactoModal").modal("hide");
});

document.getElementById("btnEnviar")?.addEventListener("click", function () {
    const destinatario = document.getElementById("destinatario").value.trim();
    const montoStr = document.getElementById("monto").value.trim();
    const monto = Number(montoStr);

    if (!destinatario || monto <= 0 || isNaN(monto)) {
        mensaje.innerHTML = `
            <div class="alert alert-danger text-center mx-4">
                Completa los datos correctamente
            </div>
        `;
        return;
    }

    let saldoActual = Number(localStorage.getItem("saldo")) || 0;

    if (monto > saldoActual) {
        mensaje.innerHTML = `
            <div class="alert alert-danger text-center mx-4">
                Saldo insuficiente
            </div>
        `;
        return;
    }

    
    let nuevoSaldo = saldoActual - monto;
    localStorage.setItem("saldo", nuevoSaldo);

    
    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];
    movimientos.push(`- $${monto} - Envío a ${destinatario}`);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    
    mensaje.innerHTML = `
        <div class="alert alert-success text-center mx-4">
            ¡Envío realizado con éxito! Redirigiendo...
        </div>
    `;

    $("#mensajeContacto")
    .text("Transferencia Realizada con Éxito")
    .fadeIn()
    .delay(1500)
    .fadeOut(function () {
        window.location.href = "menu.html";
    });

    setTimeout(() => {
        window.location.href = "menu.html";
    }, 1800);
});


document.addEventListener("DOMContentLoaded", () => {
    cargarContactos();
});


