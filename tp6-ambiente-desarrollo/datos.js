// Ejercicios 12 y 13 — Datos con variables + template literals

const nombre = "Nicolás Cussi";
const curso = "5°1° y 5°2°";
const colegio = "Colegio Técnico Provincial Olga B. de Arko";

// Ejercicio 12: cada variable por separado
console.log(nombre);
console.log(curso);
console.log(colegio);

// Ejercicio 13: todo combinado en un solo mensaje con template literals
console.log(`Soy ${nombre}, curso ${curso}, del ${colegio}.`);

module.exports = { nombre, curso, colegio };
