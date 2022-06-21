"use strict";

/* Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ? */

/*   у каждого счетчика своё окружение
alert( counter2() ); //  => 0
alert( counter2() ); // => 1  
*/
//

/* Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ? */

/*  
 Через конструктор создался экземпляр (Может неправильно выразился, в общем у них одно окружение)
 и у счетчиков доступ к одной переменной
*/
//


/* Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); */

/* 
код не видит SayHi(), т.к. он обьявлен внутри блока if
*/
//

/* 
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка).
Например:
sum(1)(2) = 3
sum(5)(-1) = 4
 */

function sum(a) {
    return function(b) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

/* 
Сам не догадался, смотрел в ответы, вроде и понятно всё, но как то сложновато....
*/


/* 
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

 */

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6


function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

/* 
не мог прийти к решению самостоятельно, посмотрел в ответы, до сих пор мало что понятно....
почему так работает!!!!!...Надеюсь, что разберусь позже
  
*/


/* let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, скажем, вот таким?

users.sort(byField('name'));
users.sort(byField('age')); */

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(prop) {
    return function(a, b) {
        if (a[prop] > b[prop])
            return 1;
        else if (a[prop] < b[prop])
            return -1;
        else
            return 0
    };
}



console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

/* 
С помощью предыдущего задания, по его шаблону чёто да получилось!!!!
запомнить бы
*/