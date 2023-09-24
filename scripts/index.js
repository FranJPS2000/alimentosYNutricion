var listaAlimentos = [];
var buscador = document.getElementById("buscador");
actualizarLista();

async function inicializarLista() {
    var lista = await obtenerListaAlimentos();

    console.log(lista)

    localStorage.setItem("listaAlimentos", JSON.stringify(lista));
    actualizarLista();
    Swal.fire({
        title: 'Lista actualizada!',
        text: `Se ha inicializado la tabla con datos de ejemplo`,
        icon: 'success',
        confirmButtonText: 'Entiendo'
    });
}

function actualizarLista() {
    listaLocalStorage = localStorage.getItem('listaAlimentos');
    if (listaLocalStorage) {
        listaAlimentos = JSON.parse(listaLocalStorage);
        actualizarTabla(listaAlimentos);
    } else {
        listaAlimentos = [];
    }
}

function actualizarTabla(lista) {
    const tabla = document.getElementById("tablaAlimentos");
    const tbody = tabla.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    lista.forEach(function (alimento, indice) {
        const fila = tbody.insertRow();
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        let celda4 = fila.insertCell(3);
        let celda5 = fila.insertCell(4);
        let celda6 = fila.insertCell(5);

        var botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-danger");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            eliminarElemento(indice - 1);
        });

        celda1.innerHTML = alimento.nombre;
        celda2.innerHTML = alimento.calorias;
        celda3.innerHTML = alimento.grasas;
        celda4.innerHTML = alimento.proteinas;
        celda5.innerHTML = alimento.carbohidratos;
        celda6.appendChild(botonEliminar);
        indice++;
    });
}

function eliminarElemento(indice) {
    listaAlimentos.splice(indice, 1);
    localStorage.setItem("listaAlimentos", JSON.stringify(listaAlimentos));
    actualizarTabla(listaAlimentos);
}

function filtrarTabla(filtro) {
    var filtroLowerCase = filtro.toLowerCase();
    var listaFiltrada = listaAlimentos.filter(function (alimento) {
        return alimento.nombre.toLowerCase().includes(filtroLowerCase);
    });

    actualizarTabla(listaFiltrada);
}

function crearAlimento() {
    let nombre = document.getElementById("nombreNuevo");
    let proteinas = document.getElementById("proteinasNuevo");
    let carbohidratos = document.getElementById("carbohidratosNuevo");
    let calorias = document.getElementById("caloriasNuevo");
    let grasas = document.getElementById("grasasNuevo");

    let alimentoNuevo = {
        "nombre": nombre.value,
        "proteinas": proteinas.value,
        "carbohidratos": carbohidratos.value,
        "calorias": calorias.value,
        "grasas": grasas.value
    }

    listaLocalStorage = localStorage.getItem('listaAlimentos');

    listaAlimentos = JSON.parse(listaLocalStorage);
    listaAlimentos.push(alimentoNuevo);
    localStorage.setItem("listaAlimentos", JSON.stringify(listaAlimentos));
    actualizarTabla(listaAlimentos);

    Swal.fire({
        title: 'Lista actualizada!',
        text: `Se ha creado el alimento correctamente`,
        icon: 'success',
        confirmButtonText: 'Entiendo'
    });
}

async function obtenerListaAlimentos() {
    var listaReturn = [];

    await fetch("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=BIsci4bo3TfQ7zaYYDzwhrpuO6ul6JZv60mmcZWY&dataType=Foundation&pageSize=200")
        .then(response => {
            if (!response.ok) {
                throw new Error("La solicitud no se pudo completar correctamente.");
            }
            return response.json(); 
        })
        .then(data => {
            console.log("datos", data)
            const lista = data.map(respuesta => {
                let calorias = 's/i';
                let proteinas = 's/i';
                let grasas = 's/i';
                let carbohidratos = 's/i';

                respuesta.foodNutrients.filter(nutriente => {
                    if(nutriente.number == '957' || nutriente.number == '208'){
                        calorias = nutriente.amount;
                    }

                    if(nutriente.number == '203'){
                        proteinas = nutriente.amount;
                    }

                    if(nutriente.number == '204'){
                        grasas = nutriente.amount;
                    }

                    if(nutriente.number == '205'){
                        carbohidratos = nutriente.amount;
                    }
                });

                return {
                    nombre: respuesta.description,
                    calorias: calorias,
                    proteinas: proteinas,
                    carbohidratos: carbohidratos,
                    grasas: grasas
                };
            });
            listaReturn = lista;
        })
        .catch(error => {
            console.error("Se produjo un error en la solicitud:", error);
        });

    return listaReturn;
}