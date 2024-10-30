async function generarQR() {
    const nombre = document.getElementById("input1").value;
    const correo = document.getElementById("input2").value;
    const institucion = document.getElementById("input3").value;
    const dependencia = document.getElementById("input4").value;

    if (!nombre || !correo || !institucion || !dependencia) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    const textoQR = `Nombre: ${nombre}\nCorreo: ${correo}\nInstitución: ${institucion}\nDependencia: ${dependencia}`;
    const urlTextoQR = encodeURIComponent(textoQR);

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${urlTextoQR}&size=200x200`;

    document.getElementById("qr-code").innerHTML = `<img src="${apiUrl}" alt="Código QR">`;
}