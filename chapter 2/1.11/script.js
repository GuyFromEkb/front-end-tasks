"use strict";


/*
В ифрейме ниже располагается документ с зелёным «полем».
Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

Ваш код должен при помощи DOM получить четыре пары координат:

верхний левый, внешний угол (это просто).
нижний правый, внешний угол (тоже просто).
верхний левый, внутренний угол (чуть сложнее).
нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам. 
*/

const task1 = document.querySelector('.task1');
const markers = task1.querySelectorAll('.triangle-right');
const coords = task1.querySelector('#coords');

let inf = "";
markers.forEach(item => {
    inf += ` ${item.textContent} = ${item.getBoundingClientRect()['x']}:${item.getBoundingClientRect()['y']}` + "<br>";
});
coords.innerHTML = inf;

/* 
Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. 
Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.
 */

function positionAt(anchor, position, elem) {


    elem.style.position = 'fixed';
    let coords = anchor.getBoundingClientRect();

    switch (position) {
        case 'top':
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.top - elem.offsetHeight + 'px';
            break;
        case 'right':
            elem.style.left = coords.right + 'px';
            elem.style.top = coords.top + 'px';
            break;
        case 'bottom':
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.bottom + 'px';
    }


}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");