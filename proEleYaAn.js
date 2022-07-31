let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let dni = document.querySelector('#dni');
let mensaje = document.querySelector('#mensajeError');
let direccion = document.querySelector('#direccion');
let poblacion = document.querySelector('#poblacion');
let pais = document.querySelector('#pais');
let email = document.querySelector('#email');
let emailconfirm = document.querySelector('#emailconfirm');
let intereses = document.querySelector('#intereses');
let contrasena = document.querySelector('#contrasena');
let boton = document.querySelector('#send');

nombre.addEventListener('change', () => {
  let entrada = nombre.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      nombre.value = cambio;
    } else {
      nombre.value = '';
      nombre.innerHTML = 'Error en el nombre';
    }
  }
});

nombre.addEventListener('keypress', () => {
  let entrada = nombre.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      nombre.value = cambio;
    } else {
      nombre.value = '';
      mensaje.innerHTML = 'Error en el nombre';
    }
  }
});

apellido.addEventListener('change', () => {
  let entrada = apellido.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||  (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)   ) {
              priLetra = entrada[0].toUpperCase();
              resto = entrada.slice(1).toLowerCase();
              cambio = priLetra + resto;
              apellido.value = cambio;
    } else {
      apellido.value = '';
      mensaje.innerHTML = 'Error en el apellido';
    }
  }
});

apellido.addEventListener('keypress', () => {
  let entrada = apellido.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      apellido.value = cambio;
    } else {
      apellido.value = '';
      mensaje.innerHTML = 'Error en el apellido';
    }
  }
});

dni.addEventListener('change', () => {
  let entrada = dni.value;
  let numero = '';
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

  for (let i = 0; i < entrada.length - 1; i++) {
    numero += entrada[i];
  }

  if (letras[Number(numero) % 23] == entrada[entrada.length - 1]) {
    console.log('La letra es correcta');
  } else {
    dni.value = '';
    mensaje.innerHTML = 'Error en el DNI';
  }
});

direccion.addEventListener('change', () => {
  let formato = ['Tipo vía/ Nombre vía', 'Número', 'Resto de Datos', ' CP'];
  let entrada = direccion.value;
  let arreglo = entrada.split(',');
  let primero = arreglo[0];
  let barra = false;

  for (let i = 0; i < primero.length; i++) {
    if (primero[i] == '/') {
      barra = true;
    }
  }

  if (arreglo.length == formato.length && barra) {
    console.log('Todo Ok con la direccion');
  } else {
    direccion.value = '';
    mensaje.innerHTML = 'Error en la dirección';
  }
});

poblacion.addEventListener('change', () => {
  let entrada = poblacion.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      poblacion.value = cambio;
    } else {
      poblacion.value = '';
      mensaje.innerHTML = 'Error en la poblacion';
    }
  }
});

pais.addEventListener('change', () => {
  let entrada = pais.value;
  for (let i = 0; i < entrada.length; i++) {
    if (
      (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) ||
      (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122)
    ) {
      priLetra = entrada[0].toUpperCase();
      resto = entrada.slice(1).toLowerCase();
      cambio = priLetra + resto;
      pais.value = cambio;
    } else {
      pais.value = '';
      mensaje.innerHTML = 'Error en el pais';
    }
  }
});

email.addEventListener('change', () => {
  let entrada = email.value;
  let contador = 0;
  if (
    entrada.charAt(entrada.length - 4) != '.' &&
    entrada.charAt(entrada.length - 3) != '.'
  ) {
    mensaje.innerHTML = 'No tienes el punto ';
    email.value = '';
  }
  for (let i = 0; i < entrada.length; i++) {
    if (entrada[i] == '@') {
      contador++;
    }
  }
  if (contador != 1) {
    mensaje.innerHTML = 'No es un formato válido de email';
    email.value = '';
  }
});

emailconfirm.addEventListener('change', () => {
  let entradaPrimera = email.value;
  let entrada = emailconfirm.value;
  if (entradaPrimera != entrada) {
    mensaje.innerHTML = 'Los email no coinciden';
    emailconfirm.value = '';
  }
});

intereses.addEventListener('change', () => {
  const listaIntereses = ['mercado inmobiliario', 'bolsa', 'bienes estatales'];
  let entrada = intereses.value;
  entrada = entrada.split(',');
  let verificar = false;
  for (let i = 0; i < listaIntereses.length; i++) {
    for (let j = 0; j < entrada.length; j++) {
      if (entrada[j] == listaIntereses[i]) {
        verificar = true;
      } else {
      }
    }
  }
  if (verificar) {
    console.log('coincide');
  } else {
    intereses.value = '';
    mensaje.innerHTML =
      'Al menos una afición tiene que estar relacionada con el banco';
  }
});

contrasena.addEventListener('change', () => {
  let entrada = contrasena.value;
  let mayuscula = 0;
  let minuscula = 0;
  let numeros = 0;
  let simbolo = 0;
  if (entrada.length > 8 && entrada.length < 20) {
    for (let i = 0; i < entrada.length; i++) {
      if (entrada[i].charCodeAt() >= 65 && entrada[i].charCodeAt() <= 90) {
        mayuscula++;
      }
      if (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122) {
        minuscula++;
      }
      if (entrada[i].charCodeAt() >= 48 && entrada[i].charCodeAt() <= 57) {
        numeros++;
      }
      if (
        (entrada[i].charCodeAt() >= 37 && entrada[i].charCodeAt() <= 47) ||
        (entrada[i].charCodeAt() >= 58 && entrada[i].charCodeAt() <= 64) ||
        (entrada[i].charCodeAt() >= 92 && entrada[i].charCodeAt() <= 96)
      ) {
        simbolo++;
      }
    }
    if (mayuscula != 0 && minuscula != 0 && numeros >= 2 && simbolo != 0) {
      console.log('email OK');
    } else {
      mensaje.innerHTML =
        'Email no válido. Debe tener Mayus, Minus, Símbolo, 2 o más numeros';
      contrasena.value = '';
    }
  } else {
    mensaje.innerHTML = 'Email no válido. Muy corto o muy largo';
    contrasena.value = '';
  }
});

boton.addEventListener('click', () => {
  let tabla = document.getElementsByTagName('td');
  for (let i = 0; i < tabla.length; i++) {
    tabla[0].textContent = nombre.value;
    tabla[1].textContent = apellido.value;
    tabla[2].textContent = dni.value;
    tabla[3].textContent = direccion.value;
    tabla[4].textContent = poblacion.value;
    tabla[5].textContent = pais.value;
    tabla[6].textContent = email.value;
  }
  console.log(tabla);
});
