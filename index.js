/*
Cumpliendo con la premisa de la primera Entrega, se realiza un programa que 

-Permite Crear un usuario segun requerimientos.-
-Valida que cumpla con los requisitos.-
-Permite Loguearse, validando si el usuario esta dado de alta, y luego valida usuario y contraseña.
-Muestra mensajes de bienvenida al usuario logueado.-
- Se aplican variables, constantes,  estructuras repetitivas, funciones y demas.
- Se crearon dos funciones para poder usarlas una vez avanzado el curso,    
*/


// Funcion que va a permitir mostrar el menu, validando que ingrese correctamente los numeros SI O SI.
function mostrarMenuPrincipal() {
  let opcion_elegida
  do {
      opcion_elegida = parseInt(prompt("=== Menú Principal ===\n\n" +
      "1. Crear Usuario\n" +
      "2. Loguearse\n" +
      "3. Ver Productos\n" +
      "4. Comprar\n" +
      "5. Salir\n" +
      "          "))

  } while (isNaN(opcion_elegida) || opcion_elegida < 1 || opcion_elegida > 5)
  return opcion_elegida
}

// funcion que devuelve 
// Verdadero --> si la creacion del usuario y contraseña cumple con las reglas
// usuario --> que no ingrese un usuario en blanco
// contraseña --> entre 8-20 caracteres y alguna mayuscula
let bandera = false

function creacion_usuario(nombre, pass) {
  // Asigna el valor de validacion_usuario  para poder usarla luego.
  bandera = (nombre.trim() !== "") && (pass.length >= 8) && (pass.length <= 20) && /[A-Z]/.test(pass)
  return bandera
}

let intentos = 1
// suponiendo que el usuario se logueo  correctamente
// declaro el usuario y contraseña que se creo para comparar ccon el logueo
// como  global para poder utlizarla en esta parte del codigo

function logueo(user, pass) {
  // valido que cumpla con los intentos permitidos
  if ((bandera===true) && (intentos < 3)){

      // verifico que los usuarios y contraseñas sean los correcto
      // al usuario lo normalizo a minuuscula, total quiero que sean iguales, indistantemente de 
      // mayuscula o minusculas
      if (((user).toLowerCase()) === (nombreUsuario.toLowerCase()) && (pass === contraseñaUsuario)) {
      alert("Bienvenido "+user+ "!!!!")
      return true
      } else {
      // si el ingreso fue erroneo, aumento los intentos para controlar luego y pido que reingrese
      alert('Error de autenticación')
      intentos++
      if (intentos!==3){
        alert('Intentos restantes: ' + (3 - intentos))
        user = prompt('Usuario: ');
        pass = prompt('Contraseña: ')
        return logueo(user, pass)
      } else {
      alert('Se agotaron los intentos. Usuario bloqueado.')
      return false
      }
      } 
    }else{
    alert("El usuario no esta registrado, no puede loguearse.")
  }
}


// funcion para usar mas adelante
function productos() {
  alert("Seccion --> en Desarrollo")
}

// funcion para usar mas adelante
function compras() {
  alert("Seccion --> en Desarrollo")
}


// cuerpo principal

let salir = false
// do while  que mostrara el menu principal y segun opcion elegida mostrara lo solicitado.
do {
  let opcion = mostrarMenuPrincipal()

  switch (opcion) {
    case 1:
      alert("Seleccionaste: Crear Usuario")
      nombreUsuario = prompt("Ingrese su nombre de usuario:")
      contraseñaUsuario = prompt("Ingrese su contraseña (8 a 20 caracteres, al menos una mayúscula):")
      if (creacion_usuario(nombreUsuario, contraseñaUsuario)) {
        alert("El usuario se ha creado correctamente")
      } else {
        alert("La creación de usuario no cumple con las normas exigidas")
      }
      break

    case 2:
      alert("Seleccionaste: Loguearse")
      let usuario = prompt("Nombre de usuario: ")
      let clave = prompt("Clave: ")
      logueo(usuario, clave)
      break
    case 3:
      alert("Seleccionaste: Ver Productos")
      productos()
      break
    case 4:
      alert("Seleccionaste: Comprar")
      compras()
      break;
    case 5:
      alert("Seleccionaste: Salir")
      salir = true;
      alert("Gracias por usar nuestro programa")
      break
    default:
      alert("Opción no válida")
      break
  }

  if (!salir) {
    let opcionSeguir = prompt("Desea seguir S/N").toLowerCase()
    if (opcionSeguir !== 's') {
      salir = true
    }
  }
} while (!salir)

alert("===FIN===")