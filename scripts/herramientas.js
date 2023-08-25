

function promediarDatos(){
    let datos = [];
    let dato;

    do{
        dato = parseFloat(prompt("Ingresa un dato numerico (Ingresa 0 para terminar)"));
        while(isNaN(dato)){
            alert("Ingresa un dato valido");
            dato = parseFloat(prompt("Ingresa un dato numerico (Ingresa 0 para terminar)"))
        }

        datos.push(dato);
    }while(dato != 0);

    datos.pop();

    let promedio = 0;

    datos.forEach(dato => {
        promedio += dato;
    });

    promedio = promedio/datos.length;

    alert(`El promedio de los datos es ${promedio}`);
}

function estimarAltura(sexoBiologico){
    let alturaPadre;
    let alturaMadre;

    alturaPadre = parseFloat(prompt("Ingresa la altura de tu padre (en centimetros)"));
    while(isNaN(alturaPadre)){
        alert("Ingresa un dato valido");
        alturaPadre = parseFloat(prompt("Ingresa la altura de tu padre (en centimetros)"));
    }


    alturaMadre = parseFloat(prompt("Ingresa la altura de tu madre (en centimetros)"));
    while(isNaN(alturaMadre)){
        alert("Ingresa un dato valido");
        alturaMadre = parseFloat(prompt("Ingresa la altura de tu madre (en centimetros)"));
    }

    let altura;
    if(sexoBiologico === "HOMBRE"){
        altura = (alturaMadre+alturaPadre+13)/2;
    }else{
        altura = (alturaMadre+alturaPadre-13)/2;
    }
    

    alert(`Tu altura aproximada es entre ${altura-7.5}cm y ${altura+7.5}cm`);
}

function calcularIMC(){
    class IMC{
        constructor(altura, peso){
            this.altura = altura;
            this.peso = peso;
        }

        calcular(){
            return this.peso/(this.altura*this.altura);
        }
    }


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

    const imc = (new IMC(altura, peso)).calcular();


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