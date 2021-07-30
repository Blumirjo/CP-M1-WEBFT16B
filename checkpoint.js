// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint tendrán en el archivo DS.js las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeowrks no es necesario que los vuelvan a definir.
// NO DEBEN MODIFICAR EL ARCHIVO DS.js SINO QUE TODO SU CÓDIGO TENDRÁ QUE ESTAR EN ESTE ARCHIVO checkpoint.js

const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');

// ----------------------

// ----- Recursión -----

// EJERCICIO 1
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]

var isAncestor = function(genealogyTree, ancestor, descendant){
  // Tu código aca:
   var abuelita = ancestor;// guardo ancestor en una variable

     for(var key in genealogyTree){// recorro el objeto

        if(genealogyTree[key].includes(descendant)){// Usando includes compruebo de algun array tiene dentro al 
        //decendiente para de esa forma rastrear a la madre.

              var count = key;//si el includes es true, guardo la key que contiene al array en la variable count.     
        }
    };
       
    if(genealogyTree[abuelita].includes(count)){// caso base, en caso de se sea descendiente.
  //la key que habiamos guardado en count es la madre, ahora preguntamos si el array que hay dentro 
  //de abuelita tiene a la madre dentro.
             return true;

    }else if(!genealogyTree[abuelita].includes(count)){// caso base, en caso de que no lo sea...

               return false;

    };

    isAncestor(genealogyTree,ancestor,count);
};


// EJERCICIO 2
// Secuencia inventada: f(n) = f(n-1) x f(n-2) - f(n-2)
// Siendo f, secuenciaHenry.
// Donde las primeras dos posiciones son dadas por el parametro recibidos y a partir de
// la siguiente se calcula como la multiplicación de los 2 números anteriores restados al número anterior.
// object es un objeto del cual debemos obtener f(0) y f(1) siguiendo la siguiente lógica:
// f(0) será el valor de la propiedad llamada 'first'
// f(1) será un número igual a la cantidad de propiedades de obj
// Por ejemplo si recibimos: 
// var obj = {
//   1: true,
//   first: 2,
//   7: ['F','r','a','n','c','o!'],
//   h: {a: 1},
//   z: [],
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }
// deberíamos tener los siguientes 2 valores iniciales
// secuenciaHenry(0) = 2 y secuenciaHenry(1) = 9
// A partir de ahí la tercera posición sería  9 x 2 - 2 = 16 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el objeto
// antes mencionado:
// secuencia: 2, 9, 16, 135, 2144, 289305
// secuenciaHenry(0) // 2  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 9 ya que el elemento de la posición 1 es 1
// secuenciaHenry(5) // 289305 ya que el elemento de la posición 5 es 289305
// Para números negativos de n debe devolver null
// PISTA: Pueden utilizar el método Object.keys() para f(1)

function secuenciaHenry(obj, n) {
  // Tu código aca:
    if(n === 0) return 2;// caso base, puse 2 pero tambien podria haber puesto obj.first.

  else if(n === 1) return Object.keys(obj).length;// caso, aqui  Object.keys(obj).length es lo mismo que nueve, 
  //convierto el objeto en array y tomo su length.

  else if(n < 0) return null;// si el valor del parametro "n" es negativo retorna null;

  return secuenciaHenry(obj,n-1) * secuenciaHenry(obj,n-2) - secuenciaHenry(obj,n-2);//llamadas recursivas correspondientes a la formula de sucesion...
  // que van a reducir el parametro "n" hasta que su valor sea alguno de los casos base.

};

// ---------------------

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function(){
  // Tu código aca:
   if(!this.head) {//Si el head es null, debe retornar 0;

             return 0;
  }
   
   else if(!this.head.next) { // Si no hay next, es decir, si es null, 
    //el head seria el unico nodo de nuestra lista por lo tanto devolvere 1.

             return 1;

    }

    else {

      var lengthListCount = 1;//Esta variable la utilizare como contador


      var current = this.head;


      while (current.next) {// Cuando current.next sea null el while se va a romper.


          current = current.next;//current va a mutar su valor reccorriendo nodo por 
   //nodo hasta encontrar un next que valga null.

          lengthListCount++;//Cada vez que el ciclo del while se repita significa que fue encontrado un nuevo nodo,
    // y esta vaqriable reflejara la cantidad de nodos encontrados.

     }

    return lengthListCount;//Retornara mi contador, que refleja la cantidad de nodos recorridos por el while, 
    //es decir el size de la lista.

  }

};


// EJERCICIO 4
// Implementar el método switchPos dentro del prototype de LinkedList que deberá intercambiar
// el elemento que se encuentre en pos1 con el elemento en pos2
// En el caso de que alguna de las dos posiciones no sea válida (Supere el tamaño de la lista actual 
// o sea un número negativo) debe devolver false.
// Si los nodos fueron removidos correctamente devolver true.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4] --> [5]
//    lista.switchPos(1,3);
//    Ahora la lista quedaría: Head --> [1] --> [4] --> [3] --> [2] --> [5]
//    y la función debería haber devuelto true
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.switchPos = function(pos1, pos2){
  // Tu código aca:
   if(!this.head) return false;// En caso de la lista este vacia retorno false :D

   if (pos1 > this.size() || pos2 > this.size()) return false; //Aplico la funcion creada en el ejercicio anterior para 
    //comprobar si alguna de las posiciones dadas es superior al tamaño de la lista.

   if(pos1 < 0 || pos2 < 0) return false;//Este if me permitira comprobar si alguna de las posiciones dadas son numeros negativos.

  // Creare 4 variables, en dos de ellas guardare la referencia del this.head y las otras dos seran 
  //contadores, cuya funcion sera compararse con cada uno de los indices de la lista hasta 
  //encontrar los indices pedidos en los parametros, para luego realizar el intercambio.

    var auxVarOne = this.head;

    var auxVarTwo = this.head;

    var countOne = 0;

    var countTwo = 0;
//Comienza la iteracion del primer while, en busca del nodo que corresponde al parametro "pos1"

    while(countOne !== pos1) {

      auxVarOne = auxVarOne.next;

      countOne++;
    };

    var InterPos1 = auxVarOne.value;

   //Finalizado el primer while, guarde el valor del nodo que coincide con
   // la posicion del primer parametro, y repetire el proceso para el segundo parametro.

    
    while(countTwo !== pos2) {

      auxVarTwo = auxVarTwo.next;

      countTwo++;
   }

    var InterPos2 = auxVarTwo.value;


    //Ahora bastan hacer los ultimos dos pasos, realizar el intercambio y si ya llego hasta alli retornara true. :D :D

    auxVarOne.value = InterPos2;

    auxVarTwo.value = InterPos1;

    return true;

};


// EJERCICIO 5
// Implementar la función mergeLinkedLists que, a partir de dos listas simplemente enlazadas 
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> 1 --> 7 --> 20 --> null
//    Lista 2: Head --> 4 --> 13 --> 2 --> null
//    Lista nueva luego de aplicar mergeLinkedLists:
//             Head --> 1 --> 4 --> 7 --> 13 --> 20 --> 2 --> null
// Nota: las listas enlazadas mergeadas intercalandose.
// El nodo 1 de la lista 1, se conecta con el nodo 1 de la lista 2.
// Continuando con el nodo 2 de la lista 2, conectandose con el nodo 2 de la lista 2.
var mergeLinkedLists = function(linkedListOne, linkedListTwo){
  // Tu código aca:

 // Lo primero que hare es crear la nueva lista que retornare al final
      const myBeautiFullList = new LinkedList();

 // Guardaré la referencia del head de cada uno de las listas pasadas como parametros en dos variables.
      var headReference1 = linkedListOne.head

      var headReference2 = linkedListTwo.head


// El while a continuacion, se rompera  cuando el valor del next que guardan estas variables sea null...
  
    while (headReference1 && headReference2 ) {

            //Agregamos los nodos a mi lista creada, en el orden correspondiente!

             myBeautiFullList.add(headReference1.value)

             myBeautiFullList.add(headReference2.value)

            //Desplazamos la referencia next en cada una de las listas recibidas como parametros,
            // hasta encontrar null, momento en el cual el while se rompera!
  
             headReference1 = headReference1.next;

             headReference2 = headReference2.next;
    };
         //finalmente se retorna la nueva lista construida de la forma solicitada. <3
     return myBeautiFullList;

};


// ----------------------


// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA): 
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA): 
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1 
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.


var cardGame = function(playerOneCards, playerTwoCards){
  // Tu código aca:

}

// ---------------


// ----- BST -----

// EJERCICIO 7
// Implementar la función height dentro del prototype de BinarySearchTree que debe devolver la "altura"
// máxima del arbol recibido por parámetro.
// Ejemplo:
//             16             ---> Nivel 1
//          /      \
//        6         23        ---> Nivel 2
//      /  \       /   \
//     2    14    17    31    ---> Nivel 3
//      \
//       5                    ---> Nivel 4
// Este arbol tiene una altura de 4
// PISTA: Una forma de resolverlo es pensarlo recursivamente y usando Math.max

BinarySearchTree.prototype.height = function(){
  // Tu código aca:

 //Dos casos base principales, si el head no tiene valor
  if (!this.value) {
    return 0;
  };

  if (!this.left && !this.right) {
    return 1;
  };


  // verificacion de extension de rama izquierda del head.
  if (!this.left) {

    return 1 + this.right.height();

  };

  // verificacion de rama derecha
  if (!this.right) {

    return 1 + this.left.height();

  };

  //Utiliazamos la  recursividad dentro del Math.max, ya que el resultado de la sumatoria recursiva
  // que nos de mayor resultado sera igual a la cantidad de niveles del arbol.

  var leftRecursive = this.left.height()

  var rightRecursive = this.right.height()

  return 1 + Math.max(leftRecursive, rightRecursive)

}


// ---------------


// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]


var binarySearch = function (array, target) {
  

};



// EJERCICIO 9
// Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar (array) la función va a recibir como parámetro una función
// que va a ser quien va a determinar si un elemento es "mayor" al otro para determinar su
// posición final
// Ejemplo:
// var array = [
//   {name: 'Franco', age: 26, height: 1.85},
//   {name: 'Toni', age: 30, height: 1.75},
//   {name: 'Mati', age: 25, height: 1.77},
//   {name: 'Leo', age: 40, height: 1.83}
// ]
//
// orderFunction(array[0], array[1]) --> Devolvera 1 si están bien ordenados o -1 si hay que intercambiarlos
// Suponiendo que la orderFunction devuelve -1 si la edad del segundo elemento es menor que la del primero
// specialSort(array, orderFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Mati', age: 25, height: 1.77},
//   {name: 'Franco', age: 26, height: 1.85},
//   {name: 'Toni', age: 30, height: 1.75},
//   {name: 'Leo', age: 40, height: 1.83}
// ]

var specialSort = function(array, orderFunction) {
  // Tu código aca:
   var uniSwap = true;

  while (uniSwap) {


    uniSwap = false;


    for (let i = 0; i < array.length - 1; i++) {

       var Z = i + 1;

       if (orderFunction(array[i], array[z]) === -1) {// si lo que el callback retorna es -1,
 //procedemos a realizar el intercambio de orden

            var aux = array[i];


            array[i] = array[z];


            array[z] = aux;


            uniSwap = true;


      }
      //Cuando el for concluya el swap valdra false rompiendo el flujo del while...
    }
  }

  //retorna nuestro array ordenado
  return array;


};

// ----- Closures -----

// EJERCICIO 10
// Implementar la función closureDetect que recibe como parámetro:
//  - Un array (symptoms) que va a contener en cada posición un string representando un
//    síntoma médico de alguna enfermedad
//  - Un número (min) que va a indicar la cantidad mínima de síntomas que debe tener un
//    paciente para considerar que posee la enfermedad
// Ejemplos:
//   var symptoms = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
//   var covidDetector = closureDetect(symptoms, 3);
//
//   var personOne = {
//     name: 'Franco',
//     age: 26,
//     symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
//   }
//
//   var personTwo = {
//     name: 'Toni',
//     age: 30,
//     symptoms: ['congestion', 'tiredness']
//   }
//
//   covidDetector(personOne); --> true
//   covidDetector(personTwo); --> false
//  [Observar los tests para otros casos]

function closureDetect(symptoms, min) {
  // Tu código aca:
    //instaciar funcion interna:
  return function (pacienteCero) {

  var sintomatologia = 0;//contador de sintomas que coinciden con el primer parametro.

    for (var i = 0; i < symptoms.length; i++) {

      if (symptoms.includes(pacienteCero.symptoms[i])) {

        sintomatologia++;
      }
    }


   return sintomatologia >= min ? true : false;

  }
};

// -------------------

module.exports = {
  isAncestor,
  secuenciaHenry,
  LinkedList,
  Queue,
  cardGame,
  binarySearch,
  specialSort,
  closureDetect,
  BinarySearchTree,
  mergeLinkedLists
}
