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