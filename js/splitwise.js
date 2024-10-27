// OBTENEMOS EL FORMULARIO
let formulario = document.getElementById("formulario");

// CREAR CABECERA
let cabecera = document.createElement("h2");
cabecera.textContent = "Introduce tus gastos"; // TEXTO DE CABECERA
formulario.appendChild(cabecera);

// CREAR ETIQUETA PARA SELECCIONAR USUARIO
let selectLabel = document.createElement("label");
selectLabel.textContent = "Selecciona un usuario:"; // TEXTO DE LA ETIQUETA
formulario.appendChild(selectLabel);

// CREAR SELECT DE USUARIOS
let selectUsuarios = document.createElement("select");
selectUsuarios.setAttribute("id", "selectUsuarios"); // ID DEL SELECT

// OPCION POR DEFECTO VACIA
let opcionDefault = document.createElement("option");
opcionDefault.textContent = "---"; // TEXTO OPCION VACIA
opcionDefault.value = ""; // VALOR VACIO
selectUsuarios.appendChild(opcionDefault); // AÑADIR OPCION POR DEFECTO

// OPCIONES PARA LOS USUARIOS
let opcionMaria = document.createElement("option");
opcionMaria.textContent = "Maria"; // NOMBRE DE USUARIO
opcionMaria.value = "Maria"; // VALOR DE USUARIO
selectUsuarios.appendChild(opcionMaria); // AÑADIR OPCION MARIA

let opcionJuan = document.createElement("option");
opcionJuan.textContent = "Juan"; // NOMBRE DE USUARIO
opcionJuan.value = "Juan"; // VALOR DE USUARIO
selectUsuarios.appendChild(opcionJuan); // AÑADIR OPCION JUAN

let opcionMarcos = document.createElement("option");
opcionMarcos.textContent = "Marcos"; // NOMBRE DE USUARIO
opcionMarcos.value = "Marcos"; // VALOR DE USUARIO
selectUsuarios.appendChild(opcionMarcos); // AÑADIR OPCION MARCOS

// AGREGAR SELECT AL FORMULARIO
formulario.appendChild(selectUsuarios);

// CAMPO PARA EL NOMBRE DEL GASTO
let titulo = document.createElement("label");
titulo.textContent = "Introduce el nombre del gasto"; // TEXTO DEL CAMPO
formulario.appendChild(titulo);

// CREAR INPUT PARA NOMBRE DEL GASTO
let inputTitulo = document.createElement("input");
inputTitulo.setAttribute("type", "text"); // TIPO DE INPUT
inputTitulo.setAttribute("id", "input"); // ID DEL INPUT
inputTitulo.setAttribute("placeholder", "Introduce el nombre"); // TEXTO DE AYUDA
inputTitulo.setAttribute("required", ""); // CAMPO REQUERIDO
formulario.appendChild(inputTitulo);

// CAMPO PARA EL IMPORTE DEL GASTO
let importe = document.createElement("label");
importe.textContent = "Introduce el importe"; // TEXTO DEL CAMPO
formulario.appendChild(importe);

// CREAR INPUT PARA IMPORTE
let inputImporte = document.createElement("input");
inputImporte.setAttribute("type", "text"); // TIPO DE INPUT
inputImporte.setAttribute("id", "inputImporte"); // ID DEL INPUT
inputImporte.setAttribute("placeholder", "Introduce el importe: xx.xx"); // TEXTO DE AYUDA
inputImporte.setAttribute("required", ""); // CAMPO REQUERIDO
formulario.appendChild(inputImporte);

// CAMPO PARA LA FECHA DEL GASTO
let fecha = document.createElement("label");
fecha.textContent = "Introduce la fecha"; // TEXTO DEL CAMPO
formulario.appendChild(fecha);

// CREAR INPUT PARA FECHA
let inputFecha = document.createElement("input");
inputFecha.setAttribute("type", "text"); // TIPO DE INPUT
inputFecha.setAttribute("id", "inputFecha"); // ID DEL INPUT
inputFecha.setAttribute("placeholder", "dd/mm/yyyy."); // TEXTO DE AYUDA
inputFecha.setAttribute("required", ""); // CAMPO REQUERIDO
formulario.appendChild(inputFecha);

// BOTON PARA AÑADIR GASTO
let boton = document.createElement("button");
boton.setAttribute("id", "boton"); // ID DEL BOTON
boton.textContent = "Añadir Gasto"; // TEXTO DEL BOTON
boton.setAttribute("type", "submit"); // TIPO DE BOTON
boton.setAttribute("value", "Añadir Gasto"); // VALOR DEL BOTON
formulario.appendChild(boton);

// EXPRESIONES REGULARES PARA VALIDAR LOS CAMPOS
let tituloExpresion = /^[a-zA-Z0-9\s]{1,20}$/; // VALIDACION TITULO
let importeExpresion = /^[0-9]{1,5}\.{0,1}[0-9]{0,2}$/; // VALIDACION IMPORTE
let fechaExpresion = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/; // VALIDACION FECHA

// CLASE USUARIO
class Usuario {
  constructor(nombre, pathImg) {
    this.nombre = nombre; // NOMBRE DEL USUARIO
    this.gastos = []; // GASTOS DEL USUARIO
    this.pathImg = pathImg; // RUTA DE LA IMAGEN
  }

  mostrarGastos() {
    return this.gastos; // RETORNAR GASTOS
  }

  calcularTotalGastos() {
    let totalGastos = 0; // INICIALIZAR TOTAL GASTOS
    for (let i = 0; i < this.gastos.length; i++) {
      let gasto = this.gastos[i].monto; // OBTENEMOS CADA GASTO
      totalGastos += gasto; // SUMAR GASTO AL TOTAL
    }
    return totalGastos; // RETORNAR TOTAL DE GASTOS
  }
}

// OBJETO USUARIOS
let usuarios = {
  Maria: new Usuario("Maria", "../img/usuarios/avatar_a.png"), // USUARIO MARIA
  Juan: new Usuario("Juan", "../img/usuarios/avatar_b.png"), // USUARIO JUAN
  Marcos: new Usuario("Marcos", "../img/usuarios/avatar_c.png"), // USUARIO MARCOS
};

// CLASE GASTO
class Gasto {
  constructor(titulo, monto, fecha) {
    this.titulo = titulo; // TITULO DEL GASTO
    this.monto = monto; // MONTO DEL GASTO
    this.fecha = fecha; // FECHA DEL GASTO
  }

  mostrarGasto() {
    return `Gasto: ${this.titulo}, Importe: ${this.monto}, Fecha: ${this.fecha}`; // RETORNAR DETALLES DEL GASTO
  }
}

// MANEJADOR DOMCONTENTLOADED

  

  // FUNCION PARA CALCULAR Y MOSTRAR DEUDAS EQUITATIVAS EN "CUENTA"
  function calcularDeudasEquitativas() {
    let total = 0, count = 0;
    for (let usuario in usuarios) {
        let totalUsuario = usuarios[usuario].calcularTotalGastos();
        if (totalUsuario > 0) {
            total += totalUsuario;
            count++;
        }
    }
    return count ? parseFloat((total / count).toFixed(2)) : 0;
}



  
  boton.addEventListener("click", function (event) {
    event.preventDefault(); // PREVENIR ENVIO POR DEFECTO
    let usuarioSeleccionado = selectUsuarios.value; // OBTENER USUARIO SELECCIONADO
    validarCampos(usuarioSeleccionado); // VALIDAR CAMPOS
    calcularDeudasEquitativas(); // CALCULAR DEUDAS DESPUES DE AÑADIR GASTO
  });

  // (CONTINÚAN TUS OTRAS FUNCIONES: VALIDAR CAMPOS, ASIGNAR VALOR AL OBJETO, CREAR RESUMEN DE USUARIO, ETC.)


// Función para cambiar el estilo del borde de un elemento
function cambiarEstiloBorde(elemento, color) {
  elemento.style.borderColor = color; // Cambia el color del borde del elemento
}

// Función de validación de campos
function validarCampos(usuarioSeleccionado) {
  // VERIFICAR QUE SE HA SELECCIONADO UN USUARIO
  if (usuarioSeleccionado === "") {
    alert("Por favor, seleccione un usuario."); // ALERTA DE USUARIO NO SELECCIONADO
    return; // SALIR DE LA FUNCION
  }

  // VERIFICAR QUE TODOS LOS CAMPOS ESTAN COMPLETOS
  if (inputTitulo.value === "" || inputImporte.value === "" || inputFecha.value === "") {
    alert("Por favor, rellene todos los campos"); // ALERTA DE CAMPOS VACIOS
  } else {
    let contador = 0; // INICIALIZAR CONTADOR

    // VALIDAR CAMPO DEL TITULO DEL GASTO
    if (tituloExpresion.test(inputTitulo.value)) {
      cambiarEstiloBorde(inputTitulo, "green"); // Cambia el estilo del borde a verde
      contador++; // INCREMENTAR CONTADOR
    } else {
      cambiarEstiloBorde(inputTitulo, "red"); // Cambia el estilo del borde a rojo
    }

    // VALIDAR CAMPO DEL IMPORTE
    if (importeExpresion.test(inputImporte.value)) {
      cambiarEstiloBorde(inputImporte, "green"); // Cambia el estilo del borde a verde
      contador++; // INCREMENTAR CONTADOR
    } else {
      cambiarEstiloBorde(inputImporte, "red"); // Cambia el estilo del borde a rojo
    }

    // VALIDAR CAMPO DE LA FECHA
    if (fechaExpresion.test(inputFecha.value)) {
      cambiarEstiloBorde(inputFecha, "green"); // Cambia el estilo del borde a verde
      contador++; // INCREMENTAR CONTADOR
    } else {
      cambiarEstiloBorde(inputFecha, "red"); // Cambia el estilo del borde a rojo
    }

    // ASIGNAR VALOR AL OBJETO SI TODAS LAS VALIDACIONES SON CORRECTAS (CONTADOR == 3)
    asignarValorAlObjeto(contador, usuarioSeleccionado); // PASAR CONTADOR Y USUARIO SELECCIONADO
  }
}


// FUNCION PARA ASIGNAR VALORES AL OBJETO
function asignarValorAlObjeto(contador, usuarioSeleccionado) {
  // SI TODAS LAS VALIDACIONES SON CORRECTAS (CONTADOR == 3)
  if (contador == 3) {
    let usuario = usuarios[usuarioSeleccionado]; // OBTENEMOS USUARIO SELECCIONADO
    let nuevoGasto = new Gasto(inputTitulo.value, parseFloat(inputImporte.value), inputFecha.value); // CREAR NUEVO GASTO
    usuario.gastos.push(nuevoGasto); // AÑADIR NUEVO GASTO AL USUARIO

    // MOSTRAR MENSAJE DE CONFIRMACION Y LIMPIAR EL FORMULARIO
    alert(`Gasto añadido correctamente a ${usuario.nombre}.`); // MENSAJE DE CONFIRMACION
    inputTitulo.value = ""; // LIMPIAR INPUT TITULO
    inputImporte.value = ""; // LIMPIAR INPUT IMPORTE
    inputFecha.value = ""; // LIMPIAR INPUT FECHA
    inputTitulo.style.borderColor = ""; // RESET COLOR TITULO
    inputImporte.style.borderColor = ""; // RESET COLOR IMPORTE
    inputFecha.style.borderColor = ""; // RESET COLOR FECHA

    // ACTUALIZAR LA INTERFAZ CON LOS DATOS DEL NUEVO GASTO
    creraUsuarioResumen(nuevoGasto, usuario); // CREAR RESUMEN DE USUARIO
    MostrarUsuarioCuenta(usuario); // MOSTRAR CUENTA DEL USUARIO
  }
}

// FUNCION PARA MOSTRAR RESUMEN DEL GASTO EN LA INTERFAZ
function creraUsuarioResumen(nuevoGasto, usuario) {
  let container = document.getElementById("resumen"); // OBTENER CONTENEDOR DE RESUMEN
  let cardDiv = document.createElement("div"); // CREAR DIV PARA TARJETA
  cardDiv.classList.add("card", "mb-12", "espacio"); // AÑADIR CLASES A TARJETA

  let rowDiv = document.createElement("div"); // CREAR DIV PARA FILA
  rowDiv.classList.add("row", "g-0"); // AÑADIR CLASES A FILA

  let colImgDiv = document.createElement("div"); // CREAR DIV PARA IMAGEN
  colImgDiv.classList.add("col-md-2"); // AÑADIR CLASES A DIV IMAGEN

  let img = document.createElement("img"); // CREAR IMG
  img.src = usuario.pathImg; // RUTA DE LA IMAGEN DEL USUARIO
  img.classList.add("img-fluid", "rounded-start"); // AÑADIR CLASES A IMAGEN

  colImgDiv.appendChild(img); // AÑADIR IMG AL DIV

  let colContentDiv = document.createElement("div"); // CREAR DIV PARA CONTENIDO
  colContentDiv.classList.add("col-md-10"); // AÑADIR CLASES AL DIV CONTENIDO

  let cardBodyDiv = document.createElement("div"); // CREAR DIV PARA CUERPO DE TARJETA
  cardBodyDiv.classList.add("card-body"); // AÑADIR CLASES A CUERPO DE TARJETA

  let h5 = document.createElement("h5"); // CREAR H5
  h5.classList.add("card-title"); // AÑADIR CLASES A H5
  h5.textContent = `${usuario.nombre}`; // NOMBRE DEL USUARIO

  let p = document.createElement("p"); // CREAR P
  p.classList.add("card-text"); // AÑADIR CLASES A P
  p.textContent = `Pago: ${nuevoGasto.monto}, el: ${nuevoGasto.fecha}`; // DETALLES DEL GASTO

  cardBodyDiv.appendChild(h5); // AÑADIR H5 AL CUERPO
  cardBodyDiv.appendChild(p); // AÑADIR P AL CUERPO
  colContentDiv.appendChild(cardBodyDiv); // AÑADIR CUERPO AL DIV CONTENIDO
  rowDiv.appendChild(colImgDiv); // AÑADIR DIV IMAGEN A FILA
  rowDiv.appendChild(colContentDiv); // AÑADIR DIV CONTENIDO A FILA
  cardDiv.appendChild(rowDiv); // AÑADIR FILA A TARJETA
  container.appendChild(cardDiv); // AÑADIR TARJETA AL CONTENEDOR
}

// FUNCION PARA MOSTRAR DETALLE DEL USUARIO ACUMULANDO GASTOS
function MostrarUsuarioCuenta(usuario) {
  console.log(usuario.calcularTotalGastos()); // MOSTRAR TOTAL DE GASTOS EN CONSOLA
  let container = document.getElementById("cuenta"); // OBTENER CONTENEDOR CUENTA
  let cardDiv = document.getElementById(`card-${usuario.nombre}`); // OBTENER TARJETA DEL USUARIO

  if (!cardDiv) {
    // SI NO EXISTE UNA TARJETA PARA EL USUARIO, LA CREAMOS
    cardDiv = document.createElement("div"); // CREAR DIV PARA TARJETA
    cardDiv.classList.add("card", "mb-12", "espacio"); // AÑADIR CLASES A TARJETA
    cardDiv.setAttribute("id", `card-${usuario.nombre}`); // ID DE LA TARJETA

    let rowDiv = document.createElement("div"); // CREAR DIV PARA FILA
    rowDiv.classList.add("row", "g-0"); // AÑADIR CLASES A FILA

    let colImgDiv = document.createElement("div"); // CREAR DIV PARA IMAGEN
    colImgDiv.classList.add("col-md-2"); // AÑADIR CLASES A DIV IMAGEN

    let img = document.createElement("img"); // CREAR IMG
    img.src = usuario.pathImg; // RUTA DE LA IMAGEN DEL USUARIO
    img.classList.add("img-fluid", "rounded-start"); // AÑADIR CLASES A IMAGEN

    colImgDiv.appendChild(img); // AÑADIR IMG AL DIV

    let colContentDiv = document.createElement("div"); // CREAR DIV PARA CONTENIDO
    colContentDiv.classList.add("col-md-10"); // AÑADIR CLASES AL DIV CONTENIDO

    let cardBodyDiv = document.createElement("div"); // CREAR DIV PARA CUERPO DE TARJETA
    cardBodyDiv.classList.add("card-body"); // AÑADIR CLASES A CUERPO DE TARJETA

    let h5 = document.createElement("h5"); // CREAR H5
    h5.classList.add("card-title"); // AÑADIR CLASES A H5
    h5.textContent = `${usuario.nombre}`; // NOMBRE DEL USUARIO

    let pTotal = document.createElement("p"); // CREAR P PARA TOTAL
    pTotal.classList.add("card-text"); // AÑADIR CLASES A P TOTAL
    pTotal.setAttribute("id", `total-${usuario.nombre}`); // ID PARA TOTAL
    pTotal.textContent = `Total pagado: ${usuario.calcularTotalGastos()}€`; // TEXTO DEL TOTAL

    let pDeuda = document.createElement("p"); // CREAR P PARA DEUDA
    pDeuda.classList.add("card-text"); // AÑADIR CLASES A P DEUDA
    pDeuda.setAttribute("id", `deuda-${usuario.nombre}`); // ID PARA DEUDA
    pDeuda.textContent = `Deuda: ${calcularDeuda(usuario)}€`; // TEXTO DE LA DEUDA

    cardBodyDiv.appendChild(h5); // AÑADIR H5 AL CUERPO
    cardBodyDiv.appendChild(pTotal); // AÑADIR TOTAL AL CUERPO
    cardBodyDiv.appendChild(pDeuda); // AÑADIR DEUDA AL CUERPO
    colContentDiv.appendChild(cardBodyDiv); // AÑADIR CUERPO AL DIV CONTENIDO
    rowDiv.appendChild(colImgDiv); // AÑADIR DIV IMAGEN A FILA
    rowDiv.appendChild(colContentDiv); // AÑADIR DIV CONTENIDO A FILA
    cardDiv.appendChild(rowDiv); // AÑADIR FILA A TARJETA
    container.appendChild(cardDiv); // AÑADIR TARJETA AL CONTENEDOR
  }else {
    // SI YA EXISTE, SOLO ACTUALIZAMOS TOTAL DE GASTOS Y DEUDA
    let totalElement = document.getElementById(`total-${usuario.nombre}`); // OBTENER ELEMENTO TOTAL
    totalElement.textContent = `Total pagado: ${usuario.calcularTotalGastos()}€`; // ACTUALIZAR TOTAL

    let deudaElement = document.getElementById(`deuda-${usuario.nombre}`); // OBTENER ELEMENTO DEUDA
    const deuda = calcularDeuda(usuario); // CALCULAR DEUDA DEL USUARIO

    // CONDICION PARA VER SI EL USUARIO DEBE DINERO
    if (deuda > 0) {
        deudaElement.textContent = `Debe: ${deuda}€`; // SI DEBE, MUESTRA CUÁNTO DEBE
    } else {
        deudaElement.textContent = `No debe nada.`; // SI NO DEBE, MUESTRA QUE NO DEBE
    }
}
}
// FUNCION PARA CALCULAR DEUDA DE UN USUARIO
function calcularDeuda(usuario) {
  const gastoEquitativo = calcularDeudasEquitativas();
  const totalGastosUsuario = usuario.calcularTotalGastos();
  const deuda = parseFloat((totalGastosUsuario - gastoEquitativo).toFixed(2));

  // REDONDEAR A 0 SI ES MENOR A 0.01
  return Math.abs(deuda) < 0.01 ? 0 : deuda;
}


// FUNCION PARA SUMAR TODOS LOS GASTOS DE UN USUARIO
function sumarGastos(usuario) {
  let total = 0; // INICIALIZAR TOTAL EN 0
  for (let gasto of usuario.gastos) { // RECORRER GASTOS
    total += gasto.monto; // SUMAR CADA GASTO
  }
  return total; // RETORNAR TOTAL
}
