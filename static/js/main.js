document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicación Flask cargada correctamente.');

    // Mensaje interactivo al enviar el formulario de contacto
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por enviar tu mensaje! Nos pondremos en contacto contigo pronto.');
            form.reset();
        });
    }
});