# TP6 — Configuración del Ambiente de Desarrollo

Demo de clase — Software II — Prof. Nicolás A. Cussi

> Codespaces: cada estudiante hace su propia versión en su netbook, siguiendo la Parte B del TP.

---

## Qué muestra esta carpeta

El recorrido completo de la Parte B del TP6: desde `console.log` hasta un servidor Express que muestra un cartel ASCII en el navegador.

| Archivo | Ejercicio | Qué hace |
|---|---|---|
| `saludo.js` | 11 | Primer script con Node — imprime un nombre por consola |
| `datos.js` | 12 y 13 | Variables + template literals |
| `cartel.js` | 14, 16, 17, 18, 19 | Progresión completa con `figlet` (cartel simple → con variables → tipografías → función reutilizable) |
| `app.js` | 20 | Servidor Express que muestra el cartel ASCII en `localhost:3000` |

## Requisitos

- Node.js instalado (o correr directo en GitHub Codespaces, que ya lo trae)
- npm

## Instalación

```bash
npm install
```

Esto instala las dos dependencias del proyecto: `figlet` y `express`.

## Cómo ejecutar cada ejercicio

```bash
node saludo.js      # Ejercicio 11
node datos.js       # Ejercicios 12 y 13
node cartel.js      # Ejercicios 14, 16, 17, 18 y 19
node app.js         # Ejercicio 20 — abrir http://localhost:3000
```

En Codespaces, al ejecutar `app.js` va a aparecer un aviso de puerto abierto (3000): hacer clic ahí para verlo en el navegador.

## Dependencias usadas

- [`figlet`](https://www.npmjs.com/package/figlet) — genera texto en letras ASCII
- [`express`](https://www.npmjs.com/package/express) — framework para crear servidores web con Node.js

---

*Software II — Prof. Nicolás A. Cussi — Colegio Técnico Provincial "Olga B. de Arko"*
