const message = document.getElementById("message");
const numMin = document.getElementById("min");
const numMax = document.getElementById("max");
const result = document.getElementById("result");


document.getElementById("input").addEventListener("input", function () {
    message.innerHTML = "";

    const min = parseInt(numMin.value);
    const max = parseInt(numMax.value);

    if (isNaN(min) || isNaN(max)) {
        message.innerHTML = ("Por favor, introduce un valor numero0ooo");
        return;
    }
    const numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    const numeroIntroducido = parseInt(input.value);
    if (isNaN(numeroIntroducido)) {
        message.innerHTML = ("Por favor, introduce un valor numerico");
    }
    if (numeroIntroducido === numeroSecreto) {
        message.innerHTML = ("Has acertado");
    }else{
        message.innerHTML = ("No has acertado, intenta denuevo");
    }
    result.innerHTML = ("El numero secreto era: " + numeroSecreto);             
}) 
//Reset
function resetGame() {
    numMin.value = "";
    numMax.value = "";
    input.value = "";
    result.innerHTML = "";
    message.innerHTML = "";
}
document.getElementById("reset").addEventListener("click", function () {
    resetGame();
});