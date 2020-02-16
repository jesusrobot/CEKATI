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

// mostrar o ocultar la caja de busqueda
const searchButton = document.getElementById('searchButton');
const searchfield = document.getElementById('searchfield');

searchButton.addEventListener('click', () => {
    searchfield.classList.toggle('active');
});

// para mostrar o ocultar el menu
const userButton = document.getElementById('userButton');
const useroptions = document.getElementById('userOptions');
userButton.addEventListener('click', () => {
    userButton.classList.toggle('active');
    useroptions.classList.toggle('active');
});