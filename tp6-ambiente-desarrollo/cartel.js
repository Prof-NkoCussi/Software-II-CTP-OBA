// Ejercicios 14, 16, 17, 18 y 19 — Progresión completa con figlet

// figlet nos da funciones para convertir texto en letras ASCII gigantes.
const figlet = require("figlet");

// Traemos las variables nombre, curso y colegio desde datos.js
// Gracias al module.exports que pusimos ahí, podemos usarlas acá directo.
const { nombre, curso, colegio } = require("./datos.js"); 

// ===== EJERCICIOS 14 y 16: Tu primer cartel =====
console.log("\n=== Ejercicio 14 y 16: Tu primer cartel ===\n");

// figlet.textSync(texto) recibe un texto y devuelve ese mismo texto
// convertido en letras ASCII. Con console.log lo mostramos en pantalla.
console.log(figlet.textSync("Nicolas"));

// ===== EJERCICIO 17: Cartel con tus datos =====
console.log("\n=== Ejercicio 17: Cartel con tus datos ===\n");

// Lo mismo que arriba, pero en vez de escribir el texto a mano,
// usamos las variables que trajimos de datos.js
console.log(figlet.textSync(nombre));
console.log(figlet.textSync(curso));
console.log(figlet.textSync(colegio));

// ===== EJERCICIO 18: Cambiando la tipografía =====
console.log("\n=== Ejercicio 18: Cambiando la tipografia ===\n");  

// textSync acepta un segundo parámetro: un objeto de opciones.
// Con { font: "..." } le decimos con qué tipografía ASCII dibujar el texto.
// Cada fuente da un estilo de letra distinto, aunque el texto sea el mismo.
console.log(figlet.textSync("Hola", { font: "Standard" }));
console.log(figlet.textSync("Hola", { font: "Ghost" }));
console.log(figlet.textSync("Hola", { font: "Big" })); 

// ===== EJERCICIO 19: Función reutilizable =====
console.log("\n=== Ejercicio 19: Funcion reutilizable ===\n");

// En vez de repetir console.log(figlet.textSync(...)) cada vez,
// armamos una función que recibe un texto (parámetro) y hace ese trabajo.
// Así evitamos copiar y pegar el mismo código una y otra vez.
function mostrarCartel(texto) {
  console.log(figlet.textSync(texto));
}

mostrarCartel(nombre);
mostrarCartel("Software II");
mostrarCartel("Vamos 5to!");
