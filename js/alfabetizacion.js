const palabra = "SOL";
const letras = palabra.split("").sort(() => Math.random() - 0.5);

const contenedorLetras = document.getElementById("letras");
const contenedorEspacios = document.getElementById("espacios");
const mensaje = document.getElementById("mensaje");

letras.forEach((letra, index) => {
  const span = document.createElement("span");
  span.textContent = letra;
  span.draggable = true;
  span.id = "letra" + index;
  span.classList.add("draggable");
  contenedorLetras.appendChild(span);

  span.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });
});

palabra.split("").forEach(() => {
  const espacio = document.createElement("div");
  espacio.classList.add("espacio");
  espacio.addEventListener("dragover", (e) => e.preventDefault());
  espacio.addEventListener("drop", (e) => {
    const id = e.dataTransfer.getData("text");
    const letraArrastrada = document.getElementById(id);
    e.target.appendChild(letraArrastrada);

    verificar();
  });
  contenedorEspacios.appendChild(espacio);
});

function verificar() {
  const letrasColocadas = [...contenedorEspacios.querySelectorAll("span")]
    .map(span => span.textContent)
    .join("");

  if (letrasColocadas === palabra) {
    mensaje.textContent = "¡Correcto! 🌞";
    mensaje.style.color = "green";
  }
}
