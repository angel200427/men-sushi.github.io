// Mostrar u ocultar secciones según categoría
document.getElementById("categoria-selector").addEventListener("change", function () {
    document.querySelectorAll(".categoria-section").forEach(section => {
      section.style.display = "none";
    });
  
    const categoria = this.value;
    if (categoria) {
      document.getElementById(`personaliza-${categoria}`).style.display = "block";
    }
  });
  
  // Captura formularios y agrega al carrito
  const formularios = document.querySelectorAll("form");
  formularios.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      mostrarBotonFinalizar();
    });
  });
  
  // Mostrar botón "Finalizar Pedido"
  function mostrarBotonFinalizar() {
    document.getElementById("finalizar-pedido").style.display = "block";
  }
  
  // Función para recolectar datos y enviar a WhatsApp
  function finalizarPedido() {
    let mensaje = "*🛍️ Pedido a domicilio - Sushi Land*%0A";
  
    // Sushi
    const rollo = document.getElementById("rollo").value;
    if (rollo) mensaje += `\n🍣 *Rollo:* ${rollo}`;
  
    const ingredientes = [...document.querySelectorAll("input[name='ingredientes']:checked")].map(i => i.value);
    if (ingredientes.length > 0) mensaje += `\n🔹 *Ingredientes:* ${ingredientes.join(", ")}`;
  
    const cobertura = document.querySelector("input[name='cobertura']:checked");
    if (cobertura) mensaje += `\n✨ *Cobertura:* ${cobertura.value}`;
  
    const salsa = document.querySelector("input[name='salsa']:checked");
    if (salsa) mensaje += `\n🧂 *Salsa:* ${salsa.value}`;
  
    // Ramen
    const tipoRamen = document.getElementById("tipo-ramen");
    if (tipoRamen && tipoRamen.value) mensaje += `\n🍜 *Ramen:* ${tipoRamen.value}`;
  
    const salsaRamen = document.querySelector("input[name='salsa-ramen']:checked");
    if (salsaRamen) mensaje += `\n🧂 *Salsa Ramen:* ${salsaRamen.value}`;
  
    // Postres
    const postres = [...document.querySelectorAll("input[name='postres']:checked")].map(p => p.value);
    if (postres.length > 0) mensaje += `\n🍰 *Postres:* ${postres.join(", ")}`;
  
    // Bebidas
    const bebidas = [...document.querySelectorAll("input[name='bebidas']:checked")].map(b => b.value);
    if (bebidas.length > 0) mensaje += `\n🥤 *Bebidas:* ${bebidas.join(", ")}`;
  
    mensaje += `\n\n📍 *Dirección:* (Por favor edita con tu dirección)`;
  
    // Abrir WhatsApp
    const numeroWhatsApp = "593978839941"; // sin +
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }
  