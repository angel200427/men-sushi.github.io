document.addEventListener("DOMContentLoaded", () => {
  console.log("🎌 Sushi Land contacto cargado");

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Gracias por tu mensaje. Te responderemos pronto.");
    form.reset();
  });
});
