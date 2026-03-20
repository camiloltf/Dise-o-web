console.log("Nombre: Juan Camilo García Zapata");
console.log("Codigo: 30000125541");
console.log("Edad: 20 años");

var nombre = "Juan Camilo García Zapata";
const codigo = "30000125541";
let edad = 20;


if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

console.log("Mi comida favorita es la pizza");
var comidaFavorita = "pizza";


let num1 = 50;
let num2 = 67;

let suma = num1 + num2;
console.log("50 + 67 = " + suma);

let resta = num1 - num2;
console.log("50 - 67 = " + resta);

let multipllicacion = num1 * num2;
console.log("50 * 67 = " + multipllicacion);

let division = num1 / num2;
console.log("50 / 67 = " + division);

var num = 10;
var factorial = 1;
for (var i = 0; i < num; i++){
    factorial = (num-i)
}

console.log("el resultado es " + factorial)

var a = (200*Math.random())-100;
console.log(a);


var jugador1 = "juan";
var ataque = (Math.random()*100);
var bonus = (Math.random()*10)
var vida_enemigo = 100;
vida_enemigo-= ataque + bonus; 

console.log("el enemigo le quedo con ", vida_enemigo, " de vida");

var ataque2 = 5;
var vida_enemigo2 = 100;

function atacar(){
    var bonus2 = (Math.random()*10);
    vida_enemigo2-= ataque2 + bonus2; 
    console.log("enemigo 2 quedo con", vida_enemigo2);
}

atacar();

var ataque_enemigo = 10;
var vida_jugador = 100;

function ataque_ene(){
    var probabilidad_ataque = Math.random();
    if (probabilidad_ataque >= 0.5){
           vida_jugador-= ataque_enemigo;
    } else {
        vida_jugador = vida_jugador
    }

    console.log("El jugador quedo con", vida_jugador);
}

function Descansar(){
    var bonus_vida_jugador = (Math.random()*10);
    vida_jugador+= bonus_vida_jugador;
    console.log("El jugador se recupero y quedo con", vida_jugador);
    vida_jugador-= 
    console.log("Pero el enemigo le hizo daño y quedo con", vida_jugador);
}

Descansar();