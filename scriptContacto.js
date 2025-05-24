document.addEventListener("DOMContentLoaded", () => {
  console.log("🎌 Sushi Land contacto cargado");

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Gracias por tu mensaje. Te responderemos pronto.");
    form.reset();
  });
});
 function copiarTexto(id) {
    const texto = document.getElementById(id).textContent;
    navigator.clipboard.writeText(texto).then(() => {
      alert("Número copiado: " + texto);
    });
  }
  function mostrarLightbox(src) {
    document.getElementById('qr-ampliado').src = src;
    document.getElementById('lightbox').style.display = 'flex';
  }

  function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }