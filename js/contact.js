/**
 * Función que se ejecuta cuando el DOM ha sido cargado.
 */
const handleFormSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    handleFormSubmission();
};

/**
 * Función para manejar el envío del formulario y verificar los campos.
 */
const handleFormSubmission = () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    if (name.trim() !== '' && message.trim() !== '') {
        displayThankYouMessage(name);
        resetForm();
    } else {
        alert('Por favor, completa todos los campos.');
    }
};

/**
 * Función para mostrar un mensaje de agradecimiento.
 * @param {string} name - El nombre del remitente.
 */
const displayThankYouMessage = (name) => {
    alert(`¡Gracias por tu mensaje, ${name}!`);
};

/**
 * Función para resetear el formulario después del envío.
 */
const resetForm = () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.reset();
};

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmit);
});