/**Acá empieza el desafío uno de Js */
alert("Este es un algoritmo para calcular, la nota final de un alumn@ de secundaria al finalizar los tres trimestres")
let nombre = prompt("¡Hola Profe! ingrese su nombre para empezar");
let apellido = prompt("Ingrese su apellido")
console.log("Hola " + nombre + " " + apellido);
alert("Bienvenid@ profe " + nombre + " " + apellido);
let nombreAlum = prompt("Ingrese el nombre de su alumno");
let apellidoAlum = prompt("Ingrese el apellido de su alumno");
let trimestre1 = parseFloat(prompt("Ingrese la calificación del primer trimestre del alumno"));
let trimestre2 = parseFloat(prompt("Ingrese la calificación del segundo trimestre del alumno"));
let trimestre3 = parseFloat(prompt("Ingrese la calificación del tercer trimestre del alumno"));
let notaFinal= (trimestre1 + trimestre2 + trimestre3)/3;
alert("La nota final de " + nombreAlum + " " + apellidoAlum + " es " + notaFinal);
console.log("La nota final de " + nombreAlum + " " + apellidoAlum + " es " + notaFinal);
