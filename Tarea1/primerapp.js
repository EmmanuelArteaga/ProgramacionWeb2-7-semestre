function calcularIMC() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const estatura = document.getElementById("estatura").value;

    const imc = peso / (estatura * estatura);

    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Peso: ${peso} kg`);
    console.log(`Estatura: ${estatura} m`);
    console.log(`IMC: ${imc.toFixed(2)}`);

    alert(`Hola ${nombre}, tu IMC es ${imc.toFixed(2)}.`);
}
