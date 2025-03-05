import _ from 'lodash';

// Primer ejercicio

const numbers = [1, 2, 3, 4, 5];
console.log("Numeros:", numbers)

_.reverse(numbers);

console.log("Numeros Al revez:", numbers);

// Segundo ejercicio

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];

const FalseValores = _.filter(valores, item => !item);

console.log ("Cuales valores son falsy:", FalseValores)

// Tercer Ejercicio

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

const concat = _.concat(array1, array2);

console.log("Numeros concatenados:", concat);


// Cuarto Ejercicio

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

const conteo = _.countBy(palabras)
console.log(conteo)

// Quinto Ejercicio

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const diference = _.difference(arr1, arr2);
console.log (diference);

// Sexto Ejercicio

const personas = [
    {nombre:"Ana", edad: 25},
    {nombre:"Luis", edad: 22},
    {nombre:"Juan", edad: 30}
];

const orden = _.orderBy(personas, ['edad', 'nombre'], ['desc', 'asc']);
console.log(orden);

// Septimo Ejercicio

const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const ordenRepetidos = _.uniq(numerosRepetidos);
console.log(ordenRepetidos);

// Octavo Ejercicio

const n = 3; 

const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];

const chunkkk = _.chunk(elementos, n);
console.log(chunkkk);

// Noveno Ejercicio

const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };

const Mayus = _.mapKeys(persona, (value, key) => _.toUpper(key));
console.log(Mayus);

// Decimo Ejercicio

const anidado = [1, [2, [3, [4, 5]]], 6];

const aplanado = _.flattenDeep(anidado);
console.log(aplanado);

// Onceavo Ejercicio

const lista1 = [1, 2, 3, 4, 5];
const lista2 = [3, 4, 5, 6, 7];
const lista3 = [5, 6, 7, 8, 9];

const same = _.intersection(lista1, lista2, lista3);
console.log(same);

// Doceavo Ejercicio

const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];


const groupByCourse = _.groupBy(estudiantes, clave);
console.log(groupByCourse);