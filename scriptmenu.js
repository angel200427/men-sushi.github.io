 document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.getElementById("toggleMenu");
      const menuContent = document.getElementById("menuContent");

      // Ocultamos el menú al principio
      menuContent.classList.remove("visible");

      toggleButton.addEventListener("click", function () {
        menuContent.classList.toggle("visible");
        toggleButton.textContent = menuContent.classList.contains("visible")
          ? "Ocultar tipos de rollos"
          : "Ver tipos de rollos";
      });
    });
    function toggleZoom(img) {
    img.classList.toggle("zoomed");
  }
  document.addEventListener('DOMContentLoaded', function () {
    const diaSemana = new Date().getDay(); // 0=Domingo, 1=Lunes, ..., 6=Sábado

    const clasesPromos = {
      3: 'promo-miercoles',
      4: 'promo-jueves',
      5: 'promo-viernes',
      6: 'promo-sabado',
      0: 'promo-domingo'
    };

    // Ocultar todos los grupos de promociones primero
    document.querySelectorAll('.grupo-promos').forEach(grupo => {
      grupo.style.display = 'none';
    });

    // Mostrar solo las promociones del día actual
    const claseHoy = clasesPromos[diaSemana];
    if (claseHoy) {
      const promosHoy = document.querySelector('.' + claseHoy);
      if (promosHoy) {
        promosHoy.style.display = 'flex';
      }
    } else {
      // Si no es un día con promociones, ocultamos la sección completa
      document.getElementById('promociones').style.display = 'none';
    }
  });