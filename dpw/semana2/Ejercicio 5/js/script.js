let indiceImagen = 0;

function mostrarImagen(indice) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    if (indice >= imagenes.length) {
        indiceImagen = 0;
    } else if (indice < 0) {
        indiceImagen = imagenes.length - 1;
    }

    imagenes.forEach((img, index) => {
        img.classList.remove('activo');
        if (index === indiceImagen) {
            img.classList.add('activo');
        }
    });

    const desplazamiento = -indiceImagen * 100;
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${desplazamiento}%)`;
}

function cambiarImagen(direccion) {
    indiceImagen += direccion;
    mostrarImagen(indiceImagen);
}

// Inicializar el carrusel
mostrarImagen(indiceImagen);
