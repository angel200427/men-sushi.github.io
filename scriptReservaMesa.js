document.getElementById('formulario-whatsapp').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('name').value;
  const evento = document.getElementById('event').value;
  const fecha = document.getElementById('date').value;
  const invitados = document.getElementById('guests').value;

  const mensaje = `¡Hola Sushi Land!%0AMe gustaría reservar una mesa con los siguientes datos:%0A%0A🧍 Nombre: ${nombre}%0A🎉 Evento: ${evento}%0A📅 Fecha: ${fecha}%0A👥 Invitados: ${invitados}%0A%0A¡Gracias! 🍣`;

  const telefono = '593978839941';
  const url = `https://wa.me/593${telefono}?text=${mensaje}`;

  window.open(url, '_blank');
});
