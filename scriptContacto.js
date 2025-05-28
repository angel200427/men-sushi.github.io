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
   document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Número de WhatsApp (formato internacional sin + ni espacios)
    const numeroWhatsApp = "593978839941"; // Reemplaza con tu número

    // Construir mensaje
    const texto = `Hola, soy ${nombre} (%0AEmail: ${email})%0A%0A${mensaje}`;

    // Redirigir a WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });