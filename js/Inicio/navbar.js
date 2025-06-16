const navbar = document.querySelector('#navbar');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    navbar.classList.add("visible");
});

cerrar.addEventListener('click', ()=> {
    navbar.classList.remove("visible");
});

const iconoFlecha = document.querySelector('.dropdown i');

iconoFlecha.addEventListener('click', () => {

    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenu.classList.toggle('visible-dropdown');
});



const iconoFlechaRadio = document.querySelector('.nav__item.dropdown:last-child i');

iconoFlechaRadio.addEventListener('click', () => {
    const dropdownMenuRadio = document.querySelector('.nav__item.dropdown:last-child .dropdown-menu');
    dropdownMenuRadio.classList.toggle('visible-dropdown');
});
