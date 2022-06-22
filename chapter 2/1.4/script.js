"use strict";
/* 
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика. */

const table = document.querySelector('#age-table');
const label = table.querySelectorAll('label');
const td = table.querySelector('td');
const form = document.querySelector('[name="search"]');
const inputs = form.querySelectorAll('input');

console.log(table);
console.log(label);
console.log(td);
console.log(form);

console.log(inputs[0]);
console.log(inputs[inputs.length - 1]);