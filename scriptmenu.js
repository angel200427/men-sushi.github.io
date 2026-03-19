document.addEventListener("DOMContentLoaded", function () {

  // =============================
  // 📅 FILTRAR POR DÍA
  // =============================

  const diaSemana = new Date().getDay();

  const clasesPromos = {
    2: "promo-martes",
    3: "promo-miercoles",
    4: "promo-jueves",
    5: "promo-viernes",
    6: "promo-sabado",
    0: "promo-domingo",
  };

  const claseHoy = clasesPromos[diaSemana];

  const todasSlides = document.querySelectorAll(".slide");
  let slidesActivas = [];

  todasSlides.forEach(slide => slide.style.display = "none");

  if (claseHoy) {
    slidesActivas = Array.from(document.querySelectorAll("." + claseHoy));

    slidesActivas.forEach(slide => {
      slide.style.display = "flex";
    });
  }

  // =============================
  // 🎞️ SLIDER REAL
  // =============================

  const contenedor = document.querySelector(".slider-contenedor");
  const btnIzq = document.querySelector(".flecha.izquierda");
  const btnDer = document.querySelector(".flecha.derecha");

  let index = 0;

  function actualizarSlider() {
    contenedor.style.transform = `translateX(-${index * 100}%)`;
  }

  btnDer.addEventListener("click", () => {
    if (slidesActivas.length === 0) return;

    index = (index + 1) % slidesActivas.length;
    actualizarSlider();
  });

  btnIzq.addEventListener("click", () => {
    if (slidesActivas.length === 0) return;

    index = (index - 1 + slidesActivas.length) % slidesActivas.length;
    actualizarSlider();
  });



  // =============================
  // 🔍 ZOOM AL HACER CLICK
  // =============================

  const modal = document.createElement("div");
  modal.id = "modalZoom";

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  document.querySelectorAll(".slide img").forEach(img => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });

});