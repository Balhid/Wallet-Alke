$('#btnIngresar').on('click', function() {
    $('#mensaje').html(`
        <div class="alert alert-success text-center fw-bold mx-6">
            BIENVENIDO, redirigiendo...
        </div>
    `).hide().fadeIn(); // Ejemplo de efecto visual

    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
});