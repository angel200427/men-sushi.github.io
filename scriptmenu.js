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