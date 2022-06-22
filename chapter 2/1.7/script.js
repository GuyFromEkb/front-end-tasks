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


/* Напишите интерфейс для создания списка.

Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст. 
*/



function runTask4() {

    const task4 = document.querySelector('.task4');
    const ulEl = document.createElement('ul');

    task4.append(ulEl);

    while (true) {
        const text = prompt("содержимое пункта", "");

        if (text != null && text != "") {
            const newLi = document.createElement('li');
            newLi.textContent = text;
            ulEl.appendChild(newLi);
        } else {
            break;
        }
    }
}

runTask4();