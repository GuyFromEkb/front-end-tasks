"use strict";

/* Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); */

/* 
 выведет undefinde . т.к.  в бинд мы передали null и теперь область функции = null
*/


/* Можем ли мы изменить this дополнительным связыванием?
Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f(); */

/* 
Выведет Вася , нельзя изменить this дополнительным связыванием
 */


/* В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему? */

/* 
Ответ: undefined.

Результатом работы bind является другой объект. У него уже нет свойства test.
*/