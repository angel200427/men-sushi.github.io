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
  qr.style.display = qr.style.display === "block" ? "none" : "block";
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
});

function cerrarModal() {
  document.getElementById("modalImagen").style.display = "none";
}
 // Modal para videos
 function ampliarVideo(video) {
  const modal = document.getElementById("videoModal");
  const videoAmpliado = document.getElementById("videoAmpliado");
  videoAmpliado.src = video.src;
  modal.style.display = "flex";
  videoAmpliado.play();
}

function cerrarVideoModal() {
  const modal = document.getElementById("videoModal");
  const videoAmpliado = document.getElementById("videoAmpliado");
  videoAmpliado.pause();
  videoAmpliado.currentTime = 0;
  modal.style.display = "none";
}
