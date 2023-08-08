iniciarSesion();

function iniciarSesion() {
    let nombre = prompt("Ingresar nombre de usuario");

    while(nombre === undefined || nombre === null || nombre === ""){
        alert("Debes ingresar un nombre valido");
        nombre = prompt("Ingresar nombre de usuario");
    }

    alert(`Bienvenido ${nombre}!`);
}

function calcularIMC(){
    let altura = parseFloat(prompt("Ingresa tu altura en metros"));
    while(isNaN(altura) || altura == 1){
        alert("Ingresa una altura valida");
        altura = parseFloat(prompt("Ingresa tu altura en metros"));
    }

    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos"));
    while(isNaN(peso)){
        alert("Ingresa un peso valido");
        peso = parseFloat(prompt("Ingresa tu peso en kilogramos"));
    }

    let imc = peso/(altura*altura);

    if(imc < 18.5){
        alert(`Tu imc es: ${imc.toFixed(1)}. Por lo que estas bajo de peso`)
    }else if(imc <  25){
        alert(`Tu imc es: ${imc.toFixed(1)}. Por lo que tu peso es ideal`)
    }else if(imc < 30){
        alert(`Tu imc es: ${imc.toFixed(1)}. Por lo que tienes sobrepeso`)
    }else{
        alert(`Tu imc es: ${imc.toFixed(1)}. Por lo que tienes obesidad`)
    }
}