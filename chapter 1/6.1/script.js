"use strict";
/* 
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) {  }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)? */


function sumTo(n) {
    if (n == 0)
        return 0;

    return n + sumTo(n - 1);
}

console.log(sumTo(100));

function sumToV2(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToV2(100));

function sumToV3(n) {

    return ((1 + n) / 2) * n;
}

console.log(sumToV3(100));

//Быстрее через формулу
//