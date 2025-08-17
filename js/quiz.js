const preguntas = [
  {
    pregunta: "¿Cuál es la primera letra del abecedario?",
    opciones: ["A", "B", "C"],
    correcta: "A"
  },
  {
    pregunta: "¿Cuántas patas tiene un perro?",
    opciones: ["2", "4", "6"],
    correcta: "4"
  }
];

let indice = 0;
const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");

function cargarPregunta() {
  const actual = preguntas[indice];
  preguntaEl.textContent = actual.pregunta;
  opcionesEl.innerHTML = "";
  actual.opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificar(op);
    opcionesEl.appendChild(btn);
  });
}

function verificar(respuesta) {
  if (respuesta === preguntas[indice].correcta) {
    resultadoEl.textContent = "¡Correcto! 🎉";
    resultadoEl.style.color = "green";
  } else {
    resultadoEl.textContent = "Ups, intenta de nuevo 😅";
    resultadoEl.style.color = "red";
  }

  indice++;
  if (indice < preguntas.length) {
    setTimeout(cargarPregunta, 1500);
  } else {
    setTimeout(() => {
      resultadoEl.textContent = "¡Terminaste el quiz! 🎊";
    }, 1500);
  }
}

cargarPregunta();
