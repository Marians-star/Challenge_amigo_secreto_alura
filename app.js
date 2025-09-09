// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombreUsuario = document.getElementById("amigo").value;
    if (nombreUsuario ==""){
        alert("Error: El espacio esta en blanco")
    }  else {
        amigos.push(nombreUsuario);
    }
    console.log (amigos);
    limpiarCaja();
}

function limpiarCaja (){
    let ValorCaja = document.getElementById("amigo").value ="";
}