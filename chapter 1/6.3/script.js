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

/* Напишите функц */
ию sum, которая работает таким образом: sum(a)(b) = a + b.
    /*  */
    /* Да, именно так */
    им образом, используя двойные круглые скобки(не опечатка).
    /*  */
    /* Например: */
    /*  */
    /* sum(1)(2) = 3 */
    /* sum(5)(-1) = 4 */