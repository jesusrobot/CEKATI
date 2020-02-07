// para mostrar o ocultar el menu

const menuButton = document.getElementById('menuButton');
const options = document.getElementById('options');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    options.classList.toggle('active');

});

// para mostrar el menu desplegable de los idiomas

const lengButton = document.getElementById('lengButton');
const lengOptions = document.getElementById('lengOptions');


document.querySelectorAll('#lengOptions > .leng-option').forEach(opcion => {
    console.log(opcion);
    
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        lengButton.innerHTML = e.currentTarget.innerHTML; 
        lengButton.classList.toggle('active');
        lengOptions.classList.toggle('active');
    });
});

lengButton.addEventListener('click', () => {
    lengButton.classList.toggle('active');
    lengOptions.classList.toggle('active');

});