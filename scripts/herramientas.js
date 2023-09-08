
function estimarAltura(){
    let alturaPadre = document.getElementById("alturaPadre").value;
    let alturaMadre = document.getElementById("alturaMadre").value;
    let sexoBiologico = document.getElementById("hombre").checked;

    let altura;
    if(sexoBiologico){
        altura = (parseInt(alturaMadre)+parseInt(alturaPadre)+13)/2;
    }else{
        altura = (parseInt(alturaMadre)+parseInt(alturaPadre)-13)/2;
    }

    if(isNaN(altura)){
        Swal.fire({
            title: 'Error en los datos',
            text: `Ingresa datos validos`,
            icon: 'error',
            confirmButtonText: 'OK!'
        });
    }else{
        Swal.fire({
            title: 'Altura estimada',
            text: `Tu altura aproximada es entre ${altura-7.5}cm y ${altura+7.5}cm`,
            icon: 'success',
            confirmButtonText: 'OK!'
        });
    }
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

    altura = document.getElementById("altura");
    peso = document.getElementById("peso");

    const imc = (new IMC(altura.value, peso.value)).calcular();

    if(!isNaN(imc)){
        if(imc < 18.5){
            Swal.fire({
                title: 'Estas bajo peso!',
                text: `Tu imc es: ${imc.toFixed(1)}. Por lo que estas bajo de peso`,
                icon: 'warning',
                confirmButtonText: 'Entiendo'
            });
        }else if(imc <  25){
            Swal.fire({
                title: 'Estas sano!',
                text: `Tu imc es: ${imc.toFixed(1)}. Por lo que tu peso es ideal`,
                icon: 'success',
                confirmButtonText: 'Entiendo'
            });
        }else if(imc < 30){
            Swal.fire({
                title: 'Tienes sobrepeso!',
                text: `Tu imc es: ${imc.toFixed(1)}. Por lo que tienes sobrepeso`,
                icon: 'warning',
                confirmButtonText: 'Entiendo'
            });
        }else{
            Swal.fire({
                title: 'Tienes obesidad!',
                text: `Tu imc es: ${imc.toFixed(1)}. Por lo que tienes obesidad`,
                icon: 'error',
                confirmButtonText: 'Entiendo'
            });
        }
    }else{
        Swal.fire({
            title: 'Error en los datos',
            text: `Ingresa datos validos`,
            icon: 'error',
            confirmButtonText: 'OK!'
        });
    }
}