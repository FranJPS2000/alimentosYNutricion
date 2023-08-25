iniciarSesion();

const alimentos = [{tipo: 'Carbohidrato', nombre: 'Azucar'},
                    {tipo: 'Carbohidrato', nombre: 'Manjar'},
                    {tipo: 'Carbohidrato', nombre: 'Galletas'},
                    {tipo: 'Carbohidrato', nombre: 'Pasteles'},
                    {tipo: 'Carbohidrato', nombre: 'Avena'},
                    {tipo: 'Proteina', nombre: 'Pechuga de pollo'},
                    {tipo: 'Proteina', nombre: 'Pechuga de pavo'},
                    {tipo: 'Proteina', nombre: 'Posta Rosada'},
                    {tipo: 'Proteina', nombre: 'Soya'},
                    {tipo: 'Proteina', nombre: 'Huevos'},
                    {tipo: 'Grasa', nombre: 'Palta'},
                    {tipo: 'Grasa', nombre: 'Aceite'},
                    {tipo: 'Grasa', nombre: 'Mantequilla'},
                    {tipo: 'Grasa', nombre: 'Semillas'},
                    {tipo: 'Grasa', nombre: 'Manteca Animal'}];

function iniciarSesion() {
    let nombre = prompt("Ingresar nombre de usuario");

    while(nombre === undefined || nombre === null || nombre === ""){
        alert("Debes ingresar un nombre valido");
        nombre = prompt("Ingresar nombre de usuario");
    }

    alert(`Bienvenido ${nombre}!`);
}

function filtrarAlimentos(){
    let categoria = prompt("Ingresar tipo de alimento (Carbohidrato, Proteina, Grasa)");
    while(categoria === undefined || categoria === null || categoria === ""){
        alert("Debes ingresar una categoria valida");
        nombre = prompt("Ingresar tipo de alimento (Carbohidrato, Proteina, Grasa)");
    }

    let alimentosFiltrados = alimentos.filter(alimento => alimento.tipo.toUpperCase() == categoria.toUpperCase());
    
    let alimentosAlert = "";

    alimentosFiltrados.forEach(alimento => {
        alimentosAlert = `${alimentosAlert} - ${alimento.nombre}`;
    });

    alert(`Alimentos encontrados: ${alimentosAlert}`);
}