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

*/