// app.js
const express = require('express');
const app = express();
const port = 3029;


const pageRouter = require('./routes/pages');


app.use('/', pageRouter);

app.listen(port, () => {
  console.log(`Emmanuel Arteaga Hernandez`);
  console.log(`Servidor iniciado en http://127.0.0.1:${port}`);
});
