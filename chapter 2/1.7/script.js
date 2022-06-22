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

// console.dir(ol);
// console.log(ol.children)

function clear(elem) {


    const childs = Array.from(elem.children);

    // childs.forEach(element => {
    //     console.log(element)
    // });

    // console.log(childs.length)



    if (childs.length > 0) {
        childs.forEach(item => {
            item.remove();
        });
    }

}

clear(ol); // очищает список