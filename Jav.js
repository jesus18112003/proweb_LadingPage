console.log("El archivo JavaScript se cargó correctamente");

function scrollCarousel(direction) {
    console.log("Función scrollCarousel ejecutada"); // Para depuración
    const container = document.querySelector('.civilizaciones-wrapper');
    const scrollAmount = 320; // Ajusta según el ancho de las tarjetas
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}