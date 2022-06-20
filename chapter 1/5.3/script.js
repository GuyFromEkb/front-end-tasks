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


// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {

    if (str.length <= maxlength) {
        return str;
    }

    return str.slice(0, maxlength - 1) + "..."
}

console.log(truncate("Всем приветdasdsad!dsada", 20))