const emojis = ["🐶","🐱","🐰","🦊","🐻","🐶","🐱","🐰","🦊","🐻"];
const grid = document.getElementById("juego-memoria");
let seleccionados = [];

function iniciarJuego() {
  const mezclados = emojis.sort(() => Math.random() - 0.5);
  grid.innerHTML = "";
  mezclados.forEach((emoji, i) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.valor = emoji;
    carta.innerHTML = "❓";
    carta.addEventListener("click", () => voltear(carta));
    grid.appendChild(carta);
  });
}

function voltear(carta) {
  if (seleccionados.length < 2 && carta.innerHTML === "❓") {
    carta.innerHTML = carta.dataset.valor;
    seleccionados.push(carta);

    if (seleccionados.length === 2) {
      setTimeout(comparar, 1000);
    }
  }
}

function comparar() {
  const [c1, c2] = seleccionados;
  if (c1.dataset.valor !== c2.dataset.valor) {
    c1.innerHTML = "❓";
    c2.innerHTML = "❓";
  }
  seleccionados = [];
}

iniciarJuego();
