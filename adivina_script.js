let numeroOculto = Math.floor(Math.random() * 100) + 1;
let opcionesIngresadas = [];

function adivinarNumero() {
    const guessInput = document.getElementById("guessInput");
    const resultado = document.getElementById("resultado");
    const opcionesList = document.getElementById("opciones");

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultado.textContent = "Ingresa un número válido entre 1 y 100.";
        return;
    }

    opcionesIngresadas.push(guess);

    if (guess === numeroOculto) {
        resultado.textContent = `¡Felicidades! Adivinaste el número ${numeroOculto} en ${opcionesIngresadas.length} intentos.`;
    } else {
        resultado.textContent = `Incorrecto. Intenta de nuevo.`;
    }

    // Actualiza la lista de opciones ingresadas
    opcionesList.innerHTML = "";
    opcionesIngresadas.forEach(opcion => {
        const li = document.createElement("li");
        li.textContent = opcion;
        opcionesList.appendChild(li);
    });

    // Restablece el valor del campo de entrada
    guessInput.value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        adivinarNumero();
    }
}