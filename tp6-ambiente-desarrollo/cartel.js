// Ejercicios 14, 16, 17, 18 y 19 — Progresión completa con figlet

const figlet = require("figlet");
const { nombre, curso, colegio } = require("./datos.js");

console.log("\n=== Ejercicio 14 y 16: Tu primer cartel ===\n");
console.log(figlet.textSync("Nicolas"));

console.log("\n=== Ejercicio 17: Cartel con tus datos ===\n");
console.log(figlet.textSync(nombre));
console.log(figlet.textSync(curso));
console.log(figlet.textSync(colegio));

console.log("\n=== Ejercicio 18: Cambiando la tipografia ===\n");
console.log(figlet.textSync("Hola", { font: "Standard" }));
console.log(figlet.textSync("Hola", { font: "Ghost" }));
console.log(figlet.textSync("Hola", { font: "Big" }));

console.log("\n=== Ejercicio 19: Funcion reutilizable ===\n");
function mostrarCartel(texto) {
  console.log(figlet.textSync(texto));
}

mostrarCartel(nombre);
mostrarCartel("Software II");
mostrarCartel("Vamos 5to!");
