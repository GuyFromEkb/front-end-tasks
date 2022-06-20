"use strict";

/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.Например:

    ucFirst("вася") == "Вася"; */

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("adsa"))

/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(string) {

    if (string.toLowerCase().includes("viagra") || string.toLowerCase().includes("xxx")) {
        return true;
    }
    return false;
}