document.addEventListener("DOMContentLoaded", function () {

  // =============================
  // 🔥 MOSTRAR PROMOS SEGÚN DÍA
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

  todasSlides.forEach(slide => {
    slide.style.display = "none";
  });

  if (claseHoy) {
    slidesActivas = document.querySelectorAll("." + claseHoy);
    slidesActivas.forEach(slide => {
      slide.style.display = "flex";
    });
  }

  // =============================
  // 🎞️ SLIDER CON BOTONES
  // =============================

  const contenedor = document.querySelector(".slider-contenedor");
  const btnIzq = document.querySelector(".flecha.izquierda");
  const btnDer = document.querySelector(".flecha.derecha");

  let index = 0;

  function actualizarSlider() {
    contenedor.style.transform = `translateX(-${index * 100}%)`;
  }

  btnDer.addEventListener("click", function () {
    if (slidesActivas.length === 0) return;

    index++;
    if (index >= slidesActivas.length) {
      index = 0;
    }

    actualizarSlider();
  });

  btnIzq.addEventListener("click", function () {
    if (slidesActivas.length === 0) return;

    index--;
    if (index < 0) {
      index = slidesActivas.length - 1;
    }

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