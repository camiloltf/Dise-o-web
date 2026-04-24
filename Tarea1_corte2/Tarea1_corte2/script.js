var jugador = "juan";

var ataque_jugador = (Math.random()*20);
var vida_enemigo = 100;

function actualizarPantalla() {
    document.getElementById("vida_jugador").innerText = "Vida: " + vida_jugador;
    document.getElementById("vida_enemigo").innerText = "Vida: " + vida_enemigo;
}

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerText = mensaje;
}

actualizarPantalla();

function atacar(){
var bonus_ataquejug = (Math.random()*10);
vida_enemigo = vida_enemigo - (ataque_jugador + bonus_ataquejug);
mostrarMensaje("Lastimaste a megatron");

actualizarPantalla();

if(vida_enemigo <= 0){
    mostrarMensaje("felicidades, ganaste la batalla");
}
}

var ataque_enemigo = 15;
var vida_jugador = 100;

function ataque_ene(){
    var probabilidad_ataque_enemigo = (Math.random());
    if(probabilidad_ataque_enemigo >= 0.5){
        vida_jugador -= ataque_enemigo;
        mostrarMensaje("Lastimaste a megatron pero Megatron te atacó");

        actualizarPantalla();

        if(vida_jugador <= 0){
            mostrarMensaje("Megatron te derrotó. Perdiste la batalla, mejor suerte la próxima vez");
        }
    }
}

function Descansar(){
    var bonus_descanso = (Math.random()*15);
    vida_jugador += bonus_descanso;

    if(vida_jugador > 100){
        vida_jugador = 100;
    }
    mostrarMensaje("Descansaste y sumaste " + bonus_descanso + " de vida");

actualizarPantalla();

    var probabilidad_ata_ene_descanso = (Math.random());
    if(probabilidad_ata_ene_descanso >= 0.7){
        vida_jugador -= ataque_enemigo;
        mostrarMensaje("Sumaste " + bonus_descanso + " de vida, pero Megatron te atacó");
        actualizarPantalla();
    }
}

