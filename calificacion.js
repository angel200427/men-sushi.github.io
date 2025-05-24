const form = document.getElementById('formularioCalificacion');
const respuestasDiv = document.getElementById('respuestasGuardadas');
const verBtn = document.getElementById('verRespuestas');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const comida = form.comida.value;
  const servicio = form.servicio.value;
  const comentarios = document.getElementById('comentarios').value;

  if (!comida || !servicio) {
    alert("Por favor selecciona una calificación para comida y servicio.");
    return;
  }

  const nuevaRespuesta = {
    comida,
    servicio,
    comentarios,
    fecha: new Date().toLocaleString()
  };

  const respuestas = JSON.parse(localStorage.getItem('calificaciones')) || [];
  respuestas.push(nuevaRespuesta);
  localStorage.setItem('calificaciones', JSON.stringify(respuestas));

  form.reset();
  alert("✅ ¡Gracias por tu calificación!");
});

verBtn.addEventListener('click', function() {
  const respuestas = JSON.parse(localStorage.getItem('calificaciones')) || [];
  if (respuestas.length === 0) {
    respuestasDiv.innerHTML = "<p>No hay respuestas aún.</p>";
    return;
  }

  respuestasDiv.innerHTML = "<h3>📋 Respuestas Guardadas:</h3>" + respuestas.map(r => `
    <div style="margin-bottom: 10px; padding: 10px; background: #f0f0f0; border-radius: 8px;">
      <strong>Fecha:</strong> ${r.fecha}<br>
      <strong>Comida:</strong> ${r.comida} ⭐<br>
      <strong>Servicio:</strong> ${r.servicio} ⭐<br>
      <strong>Comentarios:</strong> ${r.comentarios || "(Sin comentarios)"}
    </div>
  `).join('');
});
let clickCount = 0;
let clickTimer = null;

document.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 4) {
    const btn = document.getElementById('verRespuestas');
    if (btn.classList.contains('mostrar')) {
      // Si está visible, lo ocultamos
      btn.classList.remove('mostrar');
      setTimeout(() => {
        btn.style.display = 'none';
      }, 300);
    } else {
      // Si está oculto, lo mostramos
      btn.style.display = 'block';
      // Forzar reflow para que la animación funcione al agregar clase
      void btn.offsetWidth;
      btn.classList.add('mostrar');
    }
    clickCount = 0;
    clearTimeout(clickTimer);
    clickTimer = null;
    return;
  }

  // Reinicia contador si no llega a 3 clicks rápido
  if (clickTimer) clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 600); // 600 ms para triple click
});
