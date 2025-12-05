
  // --------- FIREBASE IMPORTS ---------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";  

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


  // --------- TU CONFIGURACIÓN FIREBASE ---------
  const firebaseConfig = {
    apiKey: "AIzaSyBM80EszC09YhQLH3_-XlKWD0NHs8CRXaA",
    authDomain: "reformas-asier.firebaseapp.com",
    projectId: "reformas-asier",
    storageBucket: "reformas-asier.firebasestorage.app",
    messagingSenderId: "39351671142",
    appId: "1:39351671142:web:9afdaf3b6b18131e41d0a7",
    measurementId: "G-1NGW9NHD69"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // --------- AUTENTICACIÓN PARA ADMIN ---------
import { 
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const auth = getAuth(app);

// Mostrar login si no está logueado
function mostrarLogin() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="loginAdmin" style="
      position:fixed; top:0; left:0; width:100%; height:100%;
      background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center;
    ">
      <div style="background:white; padding:20px; border-radius:8px; width:300px;">
        <h3>Iniciar sesión (admin)</h3>
        <input id="adminEmail" type="email" placeholder="Email" style="width:100%; margin-bottom:8px;">
        <input id="adminPass" type="password" placeholder="Contraseña" style="width:100%; margin-bottom:8px;">
        <button id="btnLogin" style="width:100%;">Entrar</button>
      </div>
    </div>
  `);

  document.getElementById("btnLogin").onclick = () => {
  const email = document.getElementById("adminEmail").value;
  const pass = document.getElementById("adminPass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      document.getElementById("loginAdmin").remove();
    })
    .catch((err) => {
      alert("Correo o contraseña incorrectos");
    });
};

}

// Botón logout
function mostrarLogout() {
  document.body.insertAdjacentHTML("afterbegin", `
    <button id="btnLogout" style="position:fixed; bottom:20px; right:20px;">
      Cerrar sesión
    </button>
  `);

  document.getElementById("btnLogout").onclick = () => signOut(auth);
}

// Detectar si el admin está logueado
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Admin logueado");
    cargarResenas();
    mostrarLogout();
  } else {
    console.log("No logueado");
        cargarResenas();
  }
});


  // --------- SISTEMA DE ESTRELLAS ---------
const stars = document.querySelectorAll ('.star');
const output = document.getElementById('ratingOutput');
const puntuacionInput = document.getElementById('puntuacion');


stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));

        // 🔥 ACTUALIZAR VALOR REAL QUE LEE guardarResena()
        puntuacionInput.value = rating;

        stars.forEach(s => {
            const value = parseInt(s.getAttribute('data-value'));
            if (value <= rating) {
                s.classList.add('filled');
            } else {
                s.classList.remove('filled');
            }
        });

    });
});


  // --------- GUARDAR RESEÑA ---------
  function guardarResena() {
  const texto = document.getElementById("resenaTexto").value.trim();
  const nombre = document.getElementById("nombreUsuario").value.trim();
  const puntuacion = parseInt(puntuacionInput.value);

  if (!texto) return alert("Escribe una reseña.");
  if (!puntuacion) return alert("Selecciona una puntuación.");

  addDoc(collection(db, "resenas"), {
    texto,
    nombre,
    puntuacion,
    fecha: new Date(),
    respuesta: "",
    respondido: false
  })
  .then(() => {
    document.getElementById("resenaTexto").value = "";
    puntuacionInput.value = 5;
    cargarResenas();
  })
  .catch(err => {
    alert("Error al guardar la reseña");
    console.error(err);
  });
}

  window.guardarResena = guardarResena;


  // --------- CARGAR RESEÑAS ---------
// ...existing code...
import { query, orderBy } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// --------- CARGAR RESEÑAS ---------
let reseñasGlobal = []; // Para almacenar todas las reseñas
let paginaActual = 0;   // Página actual (cada página = 5 reseñas)
const reseñasPorPagina = 5;

function cargarResenas() {
const cont = document.getElementById("listaResenas");
const promedioSpan = document.getElementById("promedioGeneral");
cont.innerHTML = ""; // Limpiar al inicio
paginaActual = 0;    // Reiniciar la paginación

const q = query(collection(db, "resenas"), orderBy("fecha", "desc"));

getDocs(q)
.then(querySnapshot => {
reseñasGlobal = [];
let total = 0;
let cantidad = 0;


  querySnapshot.forEach(docSnap => {
    const data = docSnap.data();
    data.id = docSnap.id; // Guardar id
    reseñasGlobal.push(data);

    total += data.puntuacion;
    cantidad++;
  });

  const promedio = cantidad > 0 ? (total / cantidad).toFixed(1) : 0;
  promedioSpan.textContent = `⭐ ${promedio} / 5`;

  renderResenas(); // Mostrar solo las primeras 5
})
.catch(err => {
  console.error(err);
  promedioSpan.textContent = "Error";
});


}

function renderResenas() {
const cont = document.getElementById("listaResenas");
const inicio = paginaActual * reseñasPorPagina;
const fin = inicio + reseñasPorPagina;
const reseñasParaMostrar = reseñasGlobal.slice(inicio, fin);

reseñasParaMostrar.forEach(data => {
let fechaTexto = "";
if (data.fecha && data.fecha.toDate) {
const fecha = data.fecha.toDate();
fechaTexto = fecha.toLocaleString();
}

const estrellasMostradas = "★".repeat(data.puntuacion) + "☆".repeat(5 - data.puntuacion);

cont.innerHTML += `
  <div style="border:1px solid #ddd; padding:10px; margin-bottom:10px;">
    <p><strong>Nombre:</strong> ${data.nombre}</p>
    <p><strong>Calificación:</strong> ${estrellasMostradas}</p>
    <p><strong>Reseña:</strong> ${data.texto}</p>
    <p><strong>Fecha:</strong> ${fechaTexto}</p>

    ${data.respondido 
      ? `<p><strong>Respuesta del administrador:</strong> ${data.respuesta}</p>`
      : `<textarea id="resp_${data.id}" placeholder="Responder..."></textarea>
         <button onclick="responderResena('${data.id}')">Enviar respuesta</button>`
    }
  </div>
`;

});

// Agregar botón "Mostrar más" solo si quedan más reseñas
if ((paginaActual + 1) * reseñasPorPagina < reseñasGlobal.length) {
cont.innerHTML += `<button id="btnMostrarMas" onclick="mostrarMas()">Mostrar más</button>`;
}
}

function mostrarMas() {
paginaActual++;
const btn = document.getElementById("btnMostrarMas");
if (btn) btn.remove(); // quitar el botón actual
renderResenas();        // mostrar las siguientes 5 reseñas
}

window.cargarResenas = cargarResenas;
window.mostrarMas = mostrarMas;


  // --------- RESPONDER RESEÑA ---------

    function responderResena(id) {
  if (!auth.currentUser) {
    mostrarLogin(); // Muestra login solo si intenta responder
    return;
  }

  const campo = document.getElementById("resp_" + id);
  const texto = campo.value.trim();
  if (!texto) return alert("Escribe una respuesta.");

  const ref = doc(db, "resenas", id);
  updateDoc(ref, { respuesta: texto, respondido: true })
    .then(() => {
      cargarResenas();
    })
    .catch(err => {
      alert("Error al responder la reseña");
      console.error(err);
    });
}


  window.responderResena = responderResena;
