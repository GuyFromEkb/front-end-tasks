"use strict";

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

function printNumbers(from, to) {
    let numb = from;
    console.log(numb++);

    const interval = setInterval(() => {
        console.log(numb++);
        if (numb > to) {
            clearInterval(interval);
        }
    }, 1000);
}

function printNumbersV2(from, to) {
    let numb = from;
    console.log(numb++);

    setTimeout(() => {

        if (numb <= to) {
            printNumbersV2(numb, to);
        }
    }, 1000);
}

printNumbers(10, 15);
printNumbersV2(10, 15);