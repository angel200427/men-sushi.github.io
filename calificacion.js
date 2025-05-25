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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// -------------------- 2. Form Submission --------------------
const form = document.getElementById("formularioCalificacion");
const verBtn = document.getElementById("verRespuestas");
const respuestasDiv = document.getElementById("respuestasGuardadas");

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
    })
    .catch((error) => {
      console.error("Error al guardar en Firebase:", error);
      alert("❌ Hubo un problema al enviar tu calificación.");
    });
});

// -------------------- 3. Ver Respuestas --------------------
verBtn.addEventListener("click", function () {
  respuestasDiv.innerHTML = "<h2>📊 Respuestas Recibidas:</h2>";

  db.collection("calificaciones").get().then((querySnapshot) => {
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
          🍣 Comida: ${data.comida} ⭐<br>
          🧑‍🍳 Servicio: ${data.servicio} ⭐<br>
          💬 Comentarios: ${data.comentarios || "Sin comentarios"}
        </div>
      `;
    });
  }).catch((error) => {
    console.error("Error al cargar respuestas:", error);
    respuestasDiv.innerHTML += "<p>Error al cargar respuestas.</p>";
  });
});

// -------------------- 4. Botón Secreto: mostrar u ocultar con 4 clics --------------------
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
  }, 600); // Tiempo para detectar 4 clics rápidos
});
