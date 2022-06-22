"use strict";


/* У нас есть дерево, структурированное как вложенные списки ul/li.
Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ? */

const task1 = document.querySelector('.task1');

const allLi = task1.querySelectorAll('li');

allLi.forEach((item, index) => {
    const chilren = item.querySelectorAll('li');
    console.log(`текст: ${item.firstChild.textContent.trim()} число потомков: ${chilren.length}`);
});

/* 
Что выведет этот код?

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>

*/

/* 
Выведет 1, сначало не понимал, а потом прочитал и дошло
*/



/* let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); // что выведет? */


/* 
ВЫВОД : BODY

*/


/* Объектом какого класса является document?
Какое место он занимает в DOM-иерархии?
Наследует ли он от Node или от Element, или может от HTMLElement? */

/* 
Самому лень было копаться, искать ответ на каждый вопрос, прочитал в ответал, тут вроде все понятно

document – объект класса HTMLDocument.

занимает 3е место (после node>document>HTMLDocument)

насоелуется
*/