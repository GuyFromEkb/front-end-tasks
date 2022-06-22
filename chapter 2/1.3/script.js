"use strict";

/* Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)? */

const task1 = document.querySelector('.task1');

const div = task1.querySelector("div");
const ul = task1.querySelector("ul");
const li = task1.querySelectorAll("li")[1];

console.log(div);
console.log(ul);
console.log(li);



/* Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null?
Правда, что elem.children[0].previousSibling всегда равен null ? */