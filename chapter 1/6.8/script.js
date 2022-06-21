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


/* 
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
} */

/* 

таймауты выполняются после завершение кода 

Последним значением i будет: 100000000.

*/