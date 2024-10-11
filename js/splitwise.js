class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.gastos = [];
    }

    // Completar con los métodos necesarios
}


class Gasto {
    constructor(titulo, monto, fecha) {
        this.titulo = titulo;
        this.monto = monto;
        this.fecha = fecha;
    }
}

// Creamos los usuarios de la App
const usuarios =[
    new Usuario('Juan'),
    new Usuario('Elvira'),
    new Usuario('Pedro'),
];

// Introducimos los usuarios al select
const selectUsuarios = document.getElementById('selectUsuario');
usuarios.forEach(usuario => {
    const option = document.createElement('option');
    option.value = usuario.nombre;
    option.textContent = usuario.nombre;
    selectUsuarios.appendChild(option);
});