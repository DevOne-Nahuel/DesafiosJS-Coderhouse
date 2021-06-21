/**Acá empieza el desafío dos de Js */
alert("Esto forma parte de una evaluación médica online")
let nombre = prompt("Ingrese su nombre para empezar");
let apellido = prompt("Ingrese su apellido");
console.log("Hola " + nombre + " " + apellido);
alert("Hola " + nombre + " " + apellido);
let ingresoTemp = parseFloat(prompt("Ingrese su temperatura en grados centígrados"));
if(ingresoTemp >= 40){
    console.log("¡Más caliente que el infierno! LLamé ya a urgencias");
    alert("¡Más caliente que el infierno! LLamé ya a urgencias");
} 
else if ((ingresoTemp <40) && (ingresoTemp >=37.5)) {
    console.log("Tiene fiebre y podría ser Covid. ¡Debe aislarse por 365 días!");
    alert("Tiene fiebre y podría ser Covid. ¡Debe aislarse por 365 días!");
}
else if ((ingresoTemp <37.5) && (ingresoTemp >=37)) {
    console.log("Tiene febricula y podría estar gestando Covid. ¡Debe aislarse por 365 días!");
    alert("Tiene febricula y podría estar gestando Covid. ¡Debe aislarse por 365 días!");
}
else if ((ingresoTemp <37) && (ingresoTemp >=34)) {
    console.log("Tiene una temperatura normal, no hay de que preocuparse.");
    alert("Tiene una temperatura normal, no hay de que preocuparse.");
}
else if (ingresoTemp <34) {
    console.log("Usted es un zombie, o la está por quedar. ¡Llame ya a emergencias!");
    alert("Usted es un zombie, o la está por quedar. ¡Llame ya a emergencias!");
}
