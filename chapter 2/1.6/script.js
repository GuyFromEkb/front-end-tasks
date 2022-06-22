"use strict";

/* Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение. */

const task1 = document.querySelector('.task1');

const el = task1.querySelector('[data-widget-name="menu"]');
console.log(el.dataset.widgetName);


/* 
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
 */

const task2 = document.querySelector('.task2');
const links = document.querySelectorAll('a');

links.forEach(item => {
    const link = item.getAttribute("href");

    if (link && link.includes('://') && !(link.includes('http://internal.com')))
        item.style.color = "orange";

})