// Ejercicio 20 — El servidor de carteles
// Combina npm, figlet y Express: muestra un cartel ASCII en el navegador

const express = require("express");
const figlet = require("figlet");
const app = express();

app.get("/", (req, res) => {
  const cartel = figlet.textSync("Nicolas Cussi");
  res.send(`<pre>${cartel}</pre>`);
});

app.listen(3000, () => {
  console.log("Servidor arriba en http://localhost:3000");
});
