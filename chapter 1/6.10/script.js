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
Выведет Вася 
 */