// Fata ibice bya menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Igihe ukande kuri menu-toggle, ifungure/gufunga menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
