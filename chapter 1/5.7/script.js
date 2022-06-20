"use strict";
/* 
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:

function unique(arr) {

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

P.S. Здесь мы используем строки, но значения могут быть любого типа.
P.P.S. Используйте Set для хранения уникальных значений. */


let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {

    const tst = new Set(arr);

    return Array.from(tst);
}

console.log(unique(values));

/* 
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr) {
    const arrSet = new Set();

    for (const item of arr) {
        const buffitem = item.toLowerCase().split("").sort().join("");
        arrSet.add(buffitem);
    }

    return Array.from(arrSet);

}



console.log(arrSet)
const tstSet = new Set();
tstSet.add(tst[1]);
tstSet.add(tst[2]);

console.log(tstSet)