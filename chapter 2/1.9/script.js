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