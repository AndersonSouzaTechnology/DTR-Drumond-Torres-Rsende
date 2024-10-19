
//MENU RESPONSIVO
// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav-bar");

// hamburger.addEventListener("click", () => nav.classList.toggle("active"));



//MENU RESPONSIVO
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => menu.classList.add('abrir-menu'));
menu.addEventListener('click', () => menu.classList.remove('abrir-menu'));
overlay.addEventListener('click', () => menu.classList.remove('abrir-menu'));




//CARROSSEL DE IMAGENS

let currentIndex = 1; // Começa no primeiro slide verdadeiro
let slideInterval;
const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function moveToNextSlide() {
  currentIndex++;

  // Transição suave entre os slides
  slides.style.transition = "transform 3s ease-in-out";
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Quando chegar no último slide real (duplicado do primeiro), volta ao primeiro sem animação
  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      slides.style.transition = "none"; // Remove a animação
      currentIndex = 1; // Volta para o primeiro slide real
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Tempo de 3s para sincronizar com a transição
  }
}

// Carrossel automático
function startAutoSlide() {
  slideInterval = setInterval(moveToNextSlide, 6000); // Troca de slide a cada 6 segundos
}

// Iniciar o carrossel
window.onload = function() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Define a posição inicial
  startAutoSlide();
};


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

