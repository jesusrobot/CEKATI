// para mostrar o ocultar el menu
const menuButton = document.getElementById('menuButton');
const options = document.getElementById('options');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    options.classList.toggle('active');

})