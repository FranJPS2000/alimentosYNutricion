var listaAlimentos = [];
var buscador = document.getElementById("buscador");
actualizarLista();

function inicializarLista(){
    let lista = [
        {
            "nombre" : "Posta rosada",
            "categoria": "Proteina",
            "cantidad": 22
        },
        {
            "nombre" : "Pechuga de pollo",
            "categoria": "Proteina",
            "cantidad": 21
        },
        {
            "nombre" : "Pechuga de pavo",
            "categoria": "Proteina",
            "cantidad": 21
        },
        {
            "nombre" : "Soja",
            "categoria": "Proteina",
            "cantidad": 38
        },
        {
            "nombre" : "Semillas de calabaza",
            "categoria": "Proteina",
            "cantidad": 30
        },
        {
            "nombre" : "Azúcar de mesa",
            "categoria": "Carbohidrato",
            "cantidad": 100
        },
        {
            "nombre" : "Manjar",
            "categoria": "Carbohidrato",
            "cantidad": 54
        },
        {
            "nombre" : "Galletas",
            "categoria": "Carbohidrato",
            "cantidad": 65
        },
        {
            "nombre" : "Avena",
            "categoria": "Carbohidrato",
            "cantidad": 68
        },
        {
            "nombre" : "Arroz",
            "categoria": "Carbohidrato",
            "cantidad": 76
        },
        {
            "nombre" : "Spaghetti",
            "categoria": "Carbohidrato",
            "cantidad": 75
        },
        {
            "nombre" : "Mantequilla",
            "categoria": "Grasas",
            "cantidad": 83
        },
        {
            "nombre" : "Aceite",
            "categoria": "Grasas",
            "cantidad": 100
        },
        {
            "nombre" : "Palta/Aguacate",
            "categoria": "Grasas",
            "cantidad": 15
        },
        {
            "nombre" : "Manteca de cerdo",
            "categoria": "Grasas",
            "cantidad": 100
        },
        {
            "nombre" : "Queso",
            "categoria": "Grasas",
            "cantidad": 26
        },
        {
            "nombre" : "Crema de leche",
            "categoria": "Grasas",
            "cantidad": 37
        },
    ];

    localStorage.setItem("listaAlimentos", JSON.stringify(lista));
    actualizarLista();
    Swal.fire({
        title: 'Lista actualizada!',
        text: `Se ha inicializado la tabla con datos de ejemplo`,
        icon: 'success',
        confirmButtonText: 'Entiendo'
    });
}

function actualizarLista(){
    listaLocalStorage = localStorage.getItem('listaAlimentos');
    if(listaLocalStorage){
        listaAlimentos = JSON.parse(listaLocalStorage);
        actualizarTabla(listaAlimentos);
    }else{
        listaAlimentos = [];
    }
}

function actualizarTabla(lista){
    const tabla = document.getElementById("tablaAlimentos");
    const tbody = tabla.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    lista.forEach(function (alimento, indice) {
        const fila = tbody.insertRow();
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        let celda4 = fila.insertCell(3);

        var botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-danger");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            eliminarElemento(indice-1);
        });

        celda1.innerHTML = alimento.nombre;
        celda2.innerHTML = alimento.categoria;
        celda3.innerHTML = alimento.cantidad;
        celda4.appendChild(botonEliminar);
        indice++;
    });
}

function eliminarElemento(indice) {
    listaAlimentos.splice(indice, 1);
    localStorage.setItem("listaAlimentos", JSON.stringify(listaAlimentos));
    actualizarTabla(listaAlimentos);
    Swal.fire({
        title: 'Lista actualizada!',
        text: `Se ha eliminado el alimento correctamente`,
        icon: 'success',
        confirmButtonText: 'Entiendo'
    });
}

function filtrarTabla(filtro) {
    var filtroLowerCase = filtro.toLowerCase();
    var listaFiltrada = listaAlimentos.filter(function (alimento) {
        return alimento.nombre.toLowerCase().includes(filtroLowerCase) || alimento.categoria.toLowerCase().includes(filtroLowerCase);
    });

    actualizarTabla(listaFiltrada);
}

function crearAlimento(){
    let nombre = document.getElementById("nombreNuevo");
    let categoria = document.getElementById("categoriaNuevo");
    let cantidad = document.getElementById("cantidadNuevo");

    let alimentoNuevo = {
        "nombre" : nombre.value,
        "categoria": categoria.value,
        "cantidad": cantidad.value
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

