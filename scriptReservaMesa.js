document.getElementById('formulario-whatsapp').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('name').value.trim();
    const evento = document.getElementById('event').value;
    const fecha = document.getElementById('date').value;
    const invitados = document.getElementById('guests').value;
  
    if (!nombre || !evento || !fecha || !invitados) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    const mensaje = `Hola Sushi Land! 👋%0A%0AQuiero hacer una *reserva* con los siguientes detalles:%0A%0A📛 Nombre: ${nombre}%0A🎉 Evento: ${evento}%0A📅 Fecha: ${fecha}%0A👥 Número de personas: ${invitados}%0A%0A¡Gracias!`;
  
    const telefono = '93978839941'; // sin el "+" inicial
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
  
    window.open(url, '_blank');
  });
  