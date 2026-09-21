// Ejercicios 12 y 13 — Datos con variables + template literals

const nombre = "Prof. Nicolás Cussi";
const curso = "5°1° y 5°2°";
const colegio = "Colegio Técnico Provincial Olga B. de Arko";

// Ejercicio 12: cada variable por separado
console.log(nombre);
console.log(curso);
console.log(colegio);
console.log("");

// Ejercicio 13: todo combinado en un solo mensaje con template literals
console.log(`Soy ${nombre}, de los cursos ${curso}, en el ${colegio}.`);
console.log("");

module.exports = { nombre, curso, colegio }; // Esta línea permite que otros archivos usen estas variables con require()
// Sin esto, nombre/curso/colegio solo existirían dentro de este archivo
