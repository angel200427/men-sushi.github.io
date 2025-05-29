function toggleOpciones() {
  const opciones = document.getElementById("opcionesCompartir");
  const qr = document.getElementById("qrImage");
  opciones.style.display = opciones.style.display === "flex" ? "none" : "flex";
  qr.style.display = "none"; // Oculta QR si estaba visible
}

function copiarLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("¡Link copiado!");
}

function toggleQR() {
  const qr = document.getElementById("qrImage");
  if (qr.style.display === "block") {
    qr.style.display = "none";
  } else {
    const currentUrl = encodeURIComponent(window.location.href);
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?data=${currentUrl}&size=150x150`;
    qr.style.display = "block";
  }
}

function compartirFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + url, "_blank");
}

function compartirWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const mensaje = encodeURIComponent("¡Hola! Aquí tienes el menú del restaurante 🍣👇\n") + url;
  window.open("https://wa.me/?text=" + mensaje, "_blank");
}

function descargarQR() {
  document.getElementById("linkDescargaQR").click();
}

// Al hacer clic en una imagen
document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".galeria-grid img");
  const modal = document.getElementById("modalImagen");
  const modalImg = document.getElementById("imgAmpliada");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Activar animaciones al hacer scroll (para .animado-video y .animado-tiktok)
  const animados = document.querySelectorAll('.animado-video, .animado-tiktok');
  const activarAnimaciones = () => {
    animados.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.style.opacity = 1;
      }
    });
  };

  window.addEventListener('scroll', activarAnimaciones);
  activarAnimaciones(); // Ejecutar al cargar
});

function cerrarModal() {
  document.getElementById("modalImagen").style.display = "none";
}

// Modal para videos
function ampliarVideo(video) {
  const modal = document.getElementById('videoModal');
  const videoAmpliado = document.getElementById('videoAmpliado');

  videoAmpliado.src = video.src;
  videoAmpliado.play();
  modal.style.display = 'flex';
}

function cerrarVideoModal() {
  const modal = document.getElementById('videoModal');
  const videoAmpliado = document.getElementById('videoAmpliado');

  videoAmpliado.pause();
  videoAmpliado.src = '';
  modal.style.display = 'none';
}
