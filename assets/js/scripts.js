// toggle para boton de menu vista mobile
const mobileMenuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu-mobile');

function showMenuMobile() {
  mobileMenu.classList.toggle('active');
}

mobileMenuButton.addEventListener('click', showMenuMobile);

// reactividad de marquesina

document.addEventListener('DOMContentLoaded', function () {
  const marquesina = document.querySelector('.marquesina-contenido');
  const marquesinaItem = marquesina.querySelector('.marquesina-item');

  // Función para clonar y añadir elementos
  function clonarYAñadir() {
    const itemWidth = marquesinaItem.offsetWidth;
    const marquesinaWidth = marquesina.offsetWidth;

    // Calcular cuántos clones necesitamos para llenar la marquesina
    const clonesNecesarios = Math.ceil(marquesinaWidth / itemWidth) + 1;

    // Añadir clones
    for (let i = 0; i < clonesNecesarios; i++) {
      marquesina.appendChild(marquesinaItem.cloneNode(true));
    }

    // Iniciar la animación
    animarMarquesina();
  }

  // Función para animar la marquesina
  function animarMarquesina() {
    const primerItem = marquesina.firstElementChild;
    let desplazamiento = 0;

    function mover() {
      desplazamiento -= 2;
      marquesina.style.transform = `translateX(${desplazamiento}px)`;

      if (Math.abs(desplazamiento) >= primerItem.offsetWidth) {
        // Mover el primer elemento al final
        marquesina.appendChild(marquesina.firstElementChild);
        desplazamiento += primerItem.offsetWidth;
        marquesina.style.transform = `translateX(${desplazamiento}px)`;
      }

      requestAnimationFrame(mover);
    }

    requestAnimationFrame(mover);
  }

  // Iniciar el proceso
  clonarYAñadir();

  // Manejar cambios de tamaño de ventana
  window.addEventListener('resize', function () {
    // Limpiar contenido actual
    marquesina.innerHTML = '';
    // Restaurar el elemento original
    marquesina.appendChild(marquesinaItem);
    // Recalcular y añadir clones
    clonarYAñadir();
  });
});
