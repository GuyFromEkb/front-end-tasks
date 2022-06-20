"use strict";
/* Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

Запустить демо

P.S. Есть «подводный камень» при работе с типами. */

// const numb1 = +prompt("первое число ", "");
// const numb2 = +prompt("второе число", "");

// alert(numb1 + numb2);

/* Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3
Как правильно округлить 6.35? */
console.log(1.35.toFixed(1));
console.log(6.35.toFixed(1));

console.log(Math.round(6.35 * 10) / 10);

//PS Сам не смог додуматься, полез в ответы,вроде разщобрался, всё дело в потере точности....

/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber() {

    for (;;) {
        const numb = prompt("Введите число");

        if (numb == null || numb == "" || numb == "undefinde") {
            return null;
        }

        if (!isFinite(numb)) {
            continue;
        }
        return numb;
    }









}

console.log(readNumber());