
const BREAKPOINT_DESKTOP = 1087;
const BREAKPOINT_TABLET = 768;
const menuNavegacao = document.getElementById('menu-navegacao');

function mudouTamanho() {
  if (window.innerWidth >= BREAKPOINT_DESKTOP) {
    menuNavegacao.style.display = 'block';
  } else {
    menuNavegacao.style.display = 'none';
  }
}

function clickMenu() {
  if (menuNavegacao.style.display === 'block') {
    menuNavegacao.style.display = 'none';
  } else {
    menuNavegacao.style.display = 'block';
  }
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

window.addEventListener('resize', toggleDetails);