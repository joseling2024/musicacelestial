// Obtén las secciones y los enlaces del menú
const musicaSection = document.getElementById('musicaSection');
const videosSection = document.getElementById('videosSection');
const versiculoSection = document.getElementById('versiculoSection');

const linkMusica = document.getElementById('linkMusica');
const linkVideos = document.getElementById('linkVideos');
const linkVersiculo = document.getElementById('linkVersiculo');

// Función para mostrar solo una sección
function mostrarSeccion(seccion) {
    musicaSection.style.display = 'none';
    videosSection.style.display = 'none';
    versiculoSection.style.display = 'none';

    seccion.style.display = 'block';
}

// Eventos de clic para mostrar cada sección
linkMusica.addEventListener('click', function() {
    mostrarSeccion(musicaSection);
});

linkVideos.addEventListener('click', function() {
    mostrarSeccion(videosSection);
});

linkVersiculo.addEventListener('click', function() {
    mostrarSeccion(versiculoSection);
});

// Mostrar la sección de Música por defecto al cargar la página
mostrarSeccion(musicaSection);
