/**
 * Función que se ejecuta cuando se hace clic en la imagen para cambiarla.
 */
const changeImageOnClick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
};

/**
 * Array que contiene las rutas de las imágenes.
 * @type {Array.<string>}
 */
const images = [
    './images/imagen1.png',
    './images/imagen2.jpg',
    './images/imagen3.png'
];

/**
 * Índice actual de la imagen mostrada.
 * @type {number}
 */
let currentIndex = 0;

/**
 * Elemento de imagen para mostrar las imágenes.
 * @type {HTMLImageElement}
 */
const imageElement = document.createElement('img');
imageElement.src = images[currentIndex];

/**
 * Agrega el elemento de imagen al contenedor de contenido.
 */
document.querySelector('.content').appendChild(imageElement);

/**
 * Evento click para cambiar la imagen al hacer clic en ella.
 */
imageElement.addEventListener('click', changeImageOnClick);