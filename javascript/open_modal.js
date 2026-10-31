/* ==========================================================================
   MODAL — ouverture et fermeture
   ========================================================================== */
 
/**
 * Ouvre la modal et affiche l'image cliquée en grand.
 * Cache la navbar pendant l'affichage.
 * @param {HTMLElement} element - Le .gallery__item cliqué
 */
function openModal(element) {
    const modal      = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const navbar     = document.querySelector('.navbar__');
 
    modalImage.src        = element.querySelector('img').src;
    modal.style.display   = 'flex';
    navbar.style.display  = 'none';
}
 
/**
 * Ferme la modal et réaffiche la navbar.
 */
function closeModal() {
    const modal  = document.querySelector('.modal');
    const navbar = document.querySelector('.navbar__');
 
    modal.style.display  = 'none';
    navbar.style.display = '';
}