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