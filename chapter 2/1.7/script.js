"use strict";

/* У нас есть пустой DOM-элемент elem и строка text.
Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text */

/* 
1  и 3 

2 сделает text bold
*/




/* 
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>

<script>
  function clear(elem) {  }

  clear(elem); // очищает список
</script>

 */

const task2 = document.querySelector('.task2');
const ol = task2.querySelector('ol');


function clear(elem) {
    const childs = Array.from(elem.children);

    if (childs.length > 0) {
        childs.forEach(item => {
            item.remove();
        });
    }
}

clear(ol);

/* 
В примере ниже вызов table.remove() удаляет таблицу из документа.
Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
Почему так происходит?

<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script> 
*/


/* 
Не правильно написан HTML CODE 

*/