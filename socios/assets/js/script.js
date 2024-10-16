
//MENU RESPONSIVO
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => menu.classList.add('abrir-menu'));
menu.addEventListener('click', () => menu.classList.remove('abrir-menu'));
overlay.addEventListener('click', () => menu.classList.remove('abrir-menu'));




