// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroElegido = 0;

function agregarAmigo() {
    if (numeroElegido ==0){
    let nombreUsuario = document.getElementById("amigo").value;
    if (nombreUsuario ==""){
        alert("Error: El espacio esta en blanco")
    }  else {
        amigos.push(nombreUsuario);
    }
    console.log (amigos);
    limpiarCaja();
    amigosEnPantalla();
} else {
    limpiarTodo();
}
}

function amigosEnPantalla () {
    let conteo =0;
    let listaHTML ="";
    document.getElementById("listaAmigos").innerHTML = "";
    while (conteo<amigos.length){
        listaHTML += "<li>" + amigos[conteo] + "</li>";
        conteo++
        console.log(listaHTML);
    console.log(conteo);
    }
    document.getElementById("listaAmigos").innerHTML = listaHTML;
}

function limpiarCaja (){
    let ValorCaja = document.getElementById("amigo").value ="";
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert("No seas tramposo, agrega un nombre")
    } else {
        numeroElegido = Math.floor(Math.random()*amigos.length);
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = (`El nombre elegido es ${amigos[numeroElegido]}`);
        console.log(numeroElegido);
        numeroElegido = 0;
    }
}

function limpiarTodo (){
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}