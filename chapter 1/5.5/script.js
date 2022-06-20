"use strict";

/* Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

function camelize(property) {
    let buffArray = property.split('-');
    let newStr = "";


    for (let i = 0; i < buffArray.length; i++) {
        if (buffArray[i] == "") {
            continue;
        } else if (i == 0) {
            newStr += buffArray[i];
            continue;
        }
        newStr += buffArray[i][0].toUpperCase() + buffArray[i].slice(1);

    }

    return newStr;
}

camelize("-webkit-transition");

/* 
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений) */

function filterRange(arr, value1, value2) {

    const newArr = arr.filter((item) => {
        return (item >= value1 && item <= value2);
    });

    return newArr;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);


console.log(filtered(testarr, 1, 4));