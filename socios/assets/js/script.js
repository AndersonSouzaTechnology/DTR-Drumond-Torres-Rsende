
//MENU RESPONSIVO
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => menu.classList.add('abrir-menu'));
menu.addEventListener('click', () => menu.classList.remove('abrir-menu'));
overlay.addEventListener('click', () => menu.classList.remove('abrir-menu'));



// LGPD
// Função para verificar se o usuário já aceitou ou recusou a política de privacidade
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('lgpd-popup');
    const acceptBtn = document.getElementById('accept-btn');
    const declineBtn = document.getElementById('decline-btn');

    // Verifica se o usuário já aceitou ou recusou cookies
    if (!localStorage.getItem('lgpdAccepted')) {
        popup.style.display = 'block';
    }

    // Quando o usuário clica em "Aceitar"
    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('lgpdAccepted', 'true');
        popup.style.display = 'none';
    });

    // Quando o usuário clica em "Recusar"
    declineBtn.addEventListener('click', function () {
        localStorage.setItem('lgpdAccepted', 'false');
        popup.style.display = 'none';
    });
});