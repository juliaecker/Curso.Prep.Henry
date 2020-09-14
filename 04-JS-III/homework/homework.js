// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array [0]
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return array [array.length - 1]
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length 
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
    for (var i = 0; i < array.length; i++) {
      array[i]++;  
    }
    return array;  
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push (elemento);
  return array;
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift (elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
  
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {
  return array.includes(elemento);
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  var total = 0;
  for (var i in numeros) {
    total += numeros[i];
  }
  return total;
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  var total = 0
  for (var i in resultadosTest) {
    total += resultadosTest[i];
  }
  return total / resultadosTest.length;

  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  return Math.max(...numeros);
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  if (arguments.length == 0) {
    return 0;
  } else {
  var product = 1;
  for (var i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }
  return product;
  }}

  
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
