// -------------------- 1. Firebase Setup --------------------
const firebaseConfig = {
  apiKey: "AIzaSyCFZ71Aym1SpdBJA3Oqbpn2qztMiuktZjk",
  authDomain: "calificacionesrestaurante.firebaseapp.com",
  projectId: "calificacionesrestaurante",
  storageBucket: "calificacionesrestaurante.appspot.com",
  messagingSenderId: "53127419535",
  appId: "1:53127419535:web:0553ef44294aa2b98d02fa",
  measurementId: "G-CMBQXQY0VR"
};
// -------------------- 1. Firebase Configuración --------------------

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore?.() || firebase.firestore();



// -------------------- 2. Form Submission --------------------
const form = document.getElementById("formularioCalificacion");
const verBtn = document.getElementById("verRespuestas");
const respuestasDiv = document.getElementById("respuestasGuardadas");
const resumenDiv = document.getElementById("estrellasResumen"); // Asegúrate de tener este div en el HTML

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const comida = document.querySelector('input[name="comida"]:checked');
  const servicio = document.querySelector('input[name="servicio"]:checked');
  const comentarios = document.getElementById("comentarios").value.trim();

  if (!comida || !servicio) {
    alert("Por favor califica tanto la comida como el servicio.");
    return;
  }

  const nuevaRespuesta = {
    comida: comida.value,
    servicio: servicio.value,
    comentarios: comentarios,
    fecha: new Date().toISOString()
  };

  db.collection("calificaciones").add(nuevaRespuesta)
    .then(() => {
      alert("✅ ¡Gracias por tu calificación!");
      form.reset();
      mostrarEstrellasResumen(comida.value, servicio.value);
      verRespuestas(); // actualizar respuestas después de enviar
    })
    .catch((error) => {
      console.error("Error al guardar en Firebase:", error);
      alert("❌ Hubo un problema al enviar tu calificación.");
    });
});

// -------------------- 3. Mostrar resumen de estrellas arriba --------------------
function mostrarEstrellasResumen(comida, servicio) {
  const resumenDiv = document.getElementById("estrellasResumen");

  const getNivel = (valor) => {
    if (valor >= 4) return "nivel-alto";
    if (valor == 3) return "nivel-medio";
    return "nivel-bajo";
  };

  resumenDiv.innerHTML = `
    <h3>⭐ Tu Calificación Reciente:</h3>
    <p>🍣 Comida: <span class="estrella ${getNivel(comida)}">${'⭐'.repeat(comida)}</span></p>
    <p>🧑‍🍳 Servicio: <span class="estrella ${getNivel(servicio)}">${'⭐'.repeat(servicio)}</span></p>
    <hr>
  `;
}


// -------------------- 4. Ver Respuestas --------------------
function verRespuestas() {
  respuestasDiv.innerHTML = "<h2>📊 Respuestas Recibidas:</h2>";

  db.collection("calificaciones").orderBy("fecha", "desc").get().then((querySnapshot) => {
    if (querySnapshot.empty) {
      respuestasDiv.innerHTML += "<p>No hay respuestas aún.</p>";
      return;
    }

    let index = 1;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      respuestasDiv.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
          <strong>#${index++} - ${new Date(data.fecha).toLocaleString()}</strong><br>
          🍣 Comida: ${'⭐'.repeat(data.comida)}<br>
          🧑‍🍳 Servicio: ${'⭐'.repeat(data.servicio)}<br>
          💬 Comentarios: ${data.comentarios || "Sin comentarios"}<br>
          <button onclick="eliminarCalificacion('${doc.id}')">🗑 Eliminar</button>
        </div>
      `;
    });
  }).catch((error) => {
    console.error("Error al cargar respuestas:", error);
    respuestasDiv.innerHTML += "<p>Error al cargar respuestas.</p>";
  });
}

// -------------------- 5. Botón para ver respuestas --------------------
verBtn.addEventListener("click", verRespuestas);

// -------------------- 6. Eliminar calificación --------------------
function eliminarCalificacion(id) {
  if (confirm("¿Seguro que quieres eliminar esta calificación?")) {
    db.collection("calificaciones").doc(id).delete().then(() => {
      alert("✅ Calificación eliminada.");
      verRespuestas();
    }).catch((error) => {
      console.error("❌ Error al eliminar:", error);
      alert("Ocurrió un error al eliminar la calificación.");
    });
  }
}

// -------------------- 7. Botón Secreto: mostrar u ocultar con 4 clics --------------------
let clickCount = 0;
let clickTimer = null;

document.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 4) {
    if (verBtn.style.display === 'none' || verBtn.style.display === '') {
      verBtn.style.display = 'inline-block'; // Mostrar
    } else {
      verBtn.style.display = 'none'; // Ocultar
    }
    clickCount = 0;
    clearTimeout(clickTimer);
    return;
  }

  if (clickTimer) clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 600); // 600 ms entre clics
});
