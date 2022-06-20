"use strict";

/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.Например:

    ucFirst("вася") == "Вася"; */

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("adsa"))