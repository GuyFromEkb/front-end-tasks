"use strict";

/*
Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
Напишите соответствующее выражение для произвольного элемента elem.
P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0. 
*/

const el = document.querySelector('.task1');
const scrollBottom = el.scrollHeight - el.scrollTop - el.clientHeight;


console.log(scrollBottom);



/* Напишите код, который возвращает ширину стандартной полосы прокрутки.
Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом),
тогда значение может быть 0px.
P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого. */


const task2 = document.querySelector('.task2');
const scrollEl = task2.querySelector('.task2-scroll-el');

const width = scrollEl.offsetWidth - scrollEl.clientWidth - scrollEl.clientLeft;


console.log(width);




/* 
Исходный документ выглядит так:
Каковы координаты центра поля?

Вычислите их и используйте, чтобы поместить мяч в центр поля:


Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, 
когда JavaScript будет уже точно необходим, это – своего рода «разминка». 
*/

function task3() {
    const task3 = document.querySelector('.task3');
    const field = task3.querySelector('#field');
    const ball = task3.querySelector('#ball');

    const hSide = (field.clientHeight - ball.clientWidth) / 2 + 'px';
    const wSide = (field.clientWidth - ball.clientWidth) / 2 + 'px';

    ball.style.paddingTop = hSide;
    ball.style.paddingLeft = wSide;
}

task3();


/* 
В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
Укажите хотя бы 3 отличия, лучше – больше.
 */



/* 
clientWidth - типо число , getComputedStyle(elem).width - строка
clientWidth - включая padding,  etComputedStyle(elem).width - без padding 
getComputedStyle - не корректно работает на строчный элемент
*/