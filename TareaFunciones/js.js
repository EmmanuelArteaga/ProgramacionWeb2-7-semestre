let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let vidas = 3;

function adivinarNumero() {
    const inputNumero = document.getElementById('inputNumero');
    const resultado = document.getElementById('resultado');
    const vidasElemento = document.getElementById('vidas');

    let numeroUsuario = parseInt(inputNumero.value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        resultado.textContent = "Tira un numero del 1 al 10";
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        resultado.textContent = "Ayyy perro";
        inputNumero.disabled = true; 
    } else {
        vidas--; 
        vidasElemento.textContent = `Vidas restantes: ${vidas}`;

        if (vidas > 0) {
            resultado.textContent = "Tas mal, calale de nuevo";
        } else {
            resultado.textContent = `Llama, el numero era${numeroSecreto}.`;
            inputNumero.disabled = true; 
        }
    }
    inputNumero.value = '';
}
