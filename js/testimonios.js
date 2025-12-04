
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

  document.getElementById("btnLogin").onclick = async () => {
    const email = document.getElementById("adminEmail").value;
    const pass = document.getElementById("adminPass").value;

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      document.getElementById("loginAdmin").remove();
    } catch (err) {
      alert("Correo o contraseña incorrectos");
    }
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
  }
});


  // --------- SISTEMA DE ESTRELLAS ---------
  const starsDiv = document.getElementById("stars");
  const puntuacionInput = document.getElementById("puntuacion");

  starsDiv.addEventListener("click", (e) => {
    const rect = starsDiv.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const porcentaje = x / rect.width;
    const estrellas = Math.ceil(porcentaje * 5);

    puntuacionInput.value = Math.max(1, Math.min(5, estrellas));

    starsDiv.innerHTML = "★★★★★".slice(0, estrellas) + "☆☆☆☆☆".slice(0, 5 - estrellas);
  });


  // --------- GUARDAR RESEÑA ---------
  async function guardarResena() {
    const texto = document.getElementById("resenaTexto").value.trim();
    const nombre = document.getElementById("nombreUsuario").value.trim();
    const puntuacion = parseInt(puntuacionInput.value);

    if (!texto) return alert("Escribe una reseña.");
    if (!puntuacion) return alert("Selecciona una puntuación.");

    await addDoc(collection(db, "resenas"), {
      texto,
      nombre,
      puntuacion,
      fecha: new Date(),
      respuesta: "",
      respondido: false
    });

    document.getElementById("resenaTexto").value = "";
    starsDiv.innerHTML = "★★★★★";
    puntuacionInput.value = 5;
    cargarResenas();
  }
  window.guardarResena = guardarResena;


  // --------- CARGAR RESEÑAS ---------
// ...existing code...
import { query, orderBy } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// --------- CARGAR RESEÑAS ---------
async function cargarResenas() {
    const cont = document.getElementById("listaResenas");
    cont.innerHTML = "";

    // Crear query ordenado por fecha descendente (más nuevas primero)
    const q = query(
        collection(db, "resenas"),
        orderBy("fecha", "desc")  // "desc" = de más nuevas a más viejas
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();

        let fechaTexto = "";
        if (data.fecha) {
            const fecha = data.fecha.toDate();
            fechaTexto = fecha.toLocaleString();
        }

        const estrellasMostradas = 
            "★".repeat(data.puntuacion) + "☆".repeat(5 - data.puntuacion);

        cont.innerHTML += `
            <div style="border:1px solid #ddd; padding:10px; margin-bottom:10px;">
                <p><strong>Nombre:</strong> ${data.nombre}</p>
                <p><strong>Calificación:</strong> ${estrellasMostradas}</p>
                <p><strong>Reseña:</strong> ${data.texto}</p>
                <p><strong>Fecha:</strong> ${fechaTexto}</p>

                ${data.respondido 
                    ? `<p><strong>Respuesta del administrador:</strong> ${data.respuesta}</p>`
                    : `
                        <textarea id="resp_${docSnap.id}" placeholder="Responder..."></textarea>
                        <button onclick="responderResena('${docSnap.id}')">Enviar respuesta</button>
                    `
                }
            </div>
        `;
    });
}


window.cargarResenas = cargarResenas;


  // --------- RESPONDER RESEÑA ---------

    async function responderResena(id) {
if (!auth.currentUser) {
mostrarLogin(); // Muestra login solo si intenta responder
return;
}




const campo = document.getElementById("resp_" + id);
const texto = campo.value.trim();
if (!texto) return alert("Escribe una respuesta.");

const ref = doc(db, "resenas", id);
await updateDoc(ref, { respuesta: texto, respondido: true });
cargarResenas();

}

  window.responderResena = responderResena;

