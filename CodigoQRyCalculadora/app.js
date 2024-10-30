const express = require("express");
const path = require("path");
const pageRutes = require("./routes/pages");

const app = express();
const PORT = 5005;

app.use(express.static('public'));

app.use('/', pageRutes);

app.get('/',(req, res) => {
    res.redirect('/CodigoQRyCalculadora')
});

app.listen(PORT, () => {
    console.log('Emmanuel Arteaga Hernandez')
    console.log(`Escuchando desde http://127.0.0.1:${PORT}`);
});