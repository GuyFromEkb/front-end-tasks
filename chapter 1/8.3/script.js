"use strict";
/* 
Добавить функциям метод "f.defer(ms)"
важность: 5
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

    function f() {
        alert("Hello!");
    }

f.defer(1000); // выведет "Hello!" через 1 секунду */

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}


function say(text = "hello") {
    console.log(text);
}

const tst = say("PRIVET");

tst().defer(2000);

say("PRIVET").defer(1000);

// console.dir(say);