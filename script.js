
const BREAKPOINT_DESKTOP = 1087;
const BREAKPOINT_TABLET = 768;
const menuNavegacao = document.getElementById('menu-navegacao');
const menuBurguer = document.getElementById('menu-burguer');

function mudouTamanho() {
  if (window.innerWidth >= BREAKPOINT_DESKTOP) {
    menuNavegacao.style.display = 'block';
    if (menuBurguer) menuBurguer.setAttribute('aria-expanded', 'true');
  } else {
    menuNavegacao.style.display = 'none';
    if (menuBurguer) menuBurguer.setAttribute('aria-expanded', 'false');
  }
}

function clickMenu() {
  if (menuNavegacao.style.display === 'block') {
    menuNavegacao.style.display = 'none';
    if (menuBurguer) menuBurguer.setAttribute('aria-expanded', 'false');
  } else {
    menuNavegacao.style.display = 'block';
    if (menuBurguer) menuBurguer.setAttribute('aria-expanded', 'true');
  }
}

const menuLinks = document.querySelectorAll('#menu-navegacao a[href^="#"]');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth < BREAKPOINT_DESKTOP) {
      setTimeout(() => {
        menuNavegacao.style.display = 'none';
        if (menuBurguer) menuBurguer.setAttribute('aria-expanded', 'false');
      }, 100);
    }
  });
});

if (menuBurguer) {
  menuBurguer.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      clickMenu();
    }
  });
}

function toggleDetails() {
  const todosDetails = document.querySelectorAll('details');
  const isTelaGrande = window.innerWidth >= BREAKPOINT_TABLET;

  todosDetails.forEach(details => {
    if (isTelaGrande) {
      details.setAttribute('open', 'true');
    } else {
      details.removeAttribute('open');
    }
  });
}

toggleDetails();

mudouTamanho();
window.addEventListener('resize', toggleDetails);
window.addEventListener('resize', mudouTamanho);