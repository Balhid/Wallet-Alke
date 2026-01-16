console.log("Historial");

const lista = document.getElementById("listaMovimientos");


if (!lista) {
    console.error("No se encontró el UL");
}

const movimientosGuardados = localStorage.getItem("movimientos");


if (!movimientosGuardados) {
    lista.innerHTML = `
        <li class="list-group-item text-muted">
            No hay movimientos registrados
        </li>
    `;
} else {
    const movimientos = JSON.parse(movimientosGuardados);

    if (movimientos.length === 0) {
        lista.innerHTML = `
            <li class="list-group-item text-muted">
                No hay movimientos registrados
            </li>
        `;
    } else {
        movimientos.forEach(function (movimiento) {
            const li = document.createElement("li");
            li.classList.add("list-group-item");

            
            if (movimiento.startsWith("+")) {
                li.classList.add("list-group-item-success");
            } else {
                li.classList.add("list-group-item-danger");
            }

            li.textContent = movimiento;
            lista.appendChild(li);
        });
    }
}