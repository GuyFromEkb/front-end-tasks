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

/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1] */


function filterRangeInPlace(arr, value1, value2) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= value1 && arr[i] <= value2) {
            continue;
        } else {
            arr.splice(i, 1);
            i--;
        }

    }

}



/* Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10 */


arr.sort(function(a, b) {
    return b - a;
});



/* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */


function copySorted(arr) {

    const newArr = arr.slice(0);
    newArr.sort();

    return newArr;

}

let arr1 = ["HTML", "JavaScript", "CSS"];

arr2 = copySorted(arr1);

console.log(arr1);
console.log(arr2);