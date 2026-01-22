console.log("Historial de movimientos cargado");

const lista = document.getElementById("listaMovimientos");
const filtro = document.getElementById("filtroMovimientos");


let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];


mostrarMovimientos("todos");


filtro.addEventListener("change", function () {
    mostrarMovimientos(this.value);
});



function mostrarMovimientos(tipoFiltro) {

   
    lista.innerHTML = "";

    
    let movimientosFiltrados = movimientos;

    if (tipoFiltro !== "todos") {
        movimientosFiltrados = movimientos.filter(m => m.tipo === tipoFiltro);
    }

    
    if (movimientosFiltrados.length === 0) {
        lista.innerHTML = `
            <li class="list-group-item text-center text-muted">
                No hay movimientos para mostrar
            </li>
        `;
        return;
    }

    
    movimientosFiltrados.forEach(movimiento => {

        const li = document.createElement("li");

        let texto = "";
        let clase = "list-group-item";

        if (movimiento.tipo === "deposito") {
            texto = `Depósito: +$${movimiento.monto}`;
            clase += " list-group-item-success";
        }

        if (movimiento.tipo === "transferencia") {
            texto = `Transferencia: -$${movimiento.monto}`;
            clase += " list-group-item-danger";
        }

        li.className = clase;
        li.textContent = `${texto} (${movimiento.fecha})`;

        lista.appendChild(li);
    });
}
