iniciarSesion();

function iniciarSesion() {
    let nombre = prompt("Ingresar nombre de usuario");

    while(nombre === undefined || nombre === null || nombre === ""){
        alert("Debes ingresar un nombre valido");
        nombre = prompt("Ingresar nombre de usuario");
    }

    alert(`Bienvenido ${nombre}!`);
}