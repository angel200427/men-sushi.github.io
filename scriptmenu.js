document.addEventListener("DOMContentLoaded", function () {

  // ---- Botón "Ver tipos de rollos" ----
  const toggleButton = document.getElementById("toggleMenu");
  const menuContent = document.getElementById("menuContent");

  // Ocultar al inicio
  menuContent.style.display = "none";

  toggleButton.addEventListener("click", function () {
    if (menuContent.style.display === "none") {
      menuContent.style.display = "block";
      toggleButton.textContent = "Ocultar tipos de rollos";
    } else {
      menuContent.style.display = "none";
      toggleButton.textContent = "Ver tipos de rollos";
    }
  });

  // ---- Zoom imágenes ----
  window.toggleZoom = function (img) {
    img.classList.toggle("zoomed");
  };

  // ---- Promociones por día ----
  const diaSemana = new Date().getDay(); // 0 Domingo, 1 Lunes, ...
  const clasesPromos = {
    3: "promo-miercoles",
    4: "promo-jueves",
    5: "promo-viernes",
    6: "promo-sabado",
    0: "promo-domingo",
  };

  document.querySelectorAll(".grupo-promos").forEach((grupo) => {
    grupo.style.display = "none";
  });

  const claseHoy = clasesPromos[diaSemana];
  if (claseHoy) {
    const promosHoy = document.querySelector("." + claseHoy);
    if (promosHoy) promosHoy.style.display = "flex";
  } else {
    const promoSection = document.getElementById("promociones");
    if (promoSection) promoSection.style.display = "none";
  }
});
// ==== MODAL PARA ZOOM ====

document.addEventListener("DOMContentLoaded", () => {
  
  // Crear modal dinámicamente
  const modal = document.createElement("div");
  modal.id = "imgModal";

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  // Seleccionar todas las imágenes del menú
  const imagenes = document.querySelectorAll(".descripcion img");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "flex";
    });
  });

  // Cerrar modal al tocar afuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
const contenedor = document.querySelector(".slider-contenedor");
const slides = document.querySelectorAll(".slide");
const btnIzq = document.querySelector(".flecha.izquierda");
const btnDer = document.querySelector(".flecha.derecha");

let index = 0;

function actualizarSlider() {
  contenedor.style.transform = `translateX(-${index * 100}%)`;
}

btnDer.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  actualizarSlider();
});

btnIzq.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  actualizarSlider();
});