const buttons = document.querySelectorAll('.btt-bttnrepro');

// Añade un evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Alterna el estado activo del botón
        const isActive = button.getAttribute('data-active') === 'true';
        button.setAttribute('data-active', !isActive);
    });
});

const volumeProgressBar = document.querySelector('.volume-progres');
const timeProgres = document.querySelector('.time-progres');
const countProgres = document.querySelector('.countProgres');

// Añade un evento de clic a la barra de volumen
volumeProgressBar.addEventListener('click', function(event) {
    // Calcula la posición del clic en la barra de volumen
    const rect = volumeProgressBar.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const progressWidth = (clickPosition / rect.width) * 100;

    // Ajusta el ancho de la barra de progreso
    timeProgres.style.width = `${progressWidth}%`;

    // Ajusta la posición del punto blanco
    countProgres.style.left = `${progressWidth}%`;

    // Aquí puedes manejar el nivel de volumen según sea necesario
    // Por ejemplo, usando un elemento de audio o una función para controlar el volumen.
});