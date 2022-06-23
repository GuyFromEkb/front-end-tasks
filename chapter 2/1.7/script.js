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

// runTask4();


/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
}; */



const task5 = document.querySelector('.task5');


let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};


function createTreeInnerHTML(container, obj) {

    if (!Object.keys(obj).length) return;

    const ul = document.createElement('ul');

    for (let key in obj) {

        let li = document.createElement('li');

        li.textContent = key;

        if (typeof obj[key] === 'object') {
            createTreeInnerHTML(li, obj[key]);
        }
        ul.append(li);
    }
    container.append(ul);

}

function createTreeDOM(block, object) {
    let ul;

    if (Object.keys(object).length > 0) {

        ul = document.createElement('ul');

        block.append(ul);
    }
    for (let key in object) {

        ul.innerHTML += `<li>${key}</li>`;

        createTreeDOM(ul.lastElementChild, object[key]);
    }
}

createTreeInnerHTML(task5, data);
createTreeDOM(task5, data);

/* 
Есть дерево, организованное в виде вложенных списков ul/li.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
 */

function task6() {
    const task6 = document.querySelector('.task6');
    const li = task6.querySelectorAll('li');

    li.forEach(elem => {
        const subElementsLi = elem.querySelectorAll('li').length;

        if (subElementsLi > 0) elem.firstChild.data += `[${subElementsLi}]`;
    });
}

task6();


/* 
Напишите функцию createCalendar(elem, year, month).
Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.
Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
 */


function createCalendar(elem, year, month) {
    const table = document.createElement('table');

    table.innerHTML = `
    <tr>
    <th>пн</th>
    <th>вт</th>
    <th>ср</th>
    <th>чт</th>
    <th>пт</th>
    <th>сб</th>
    <th>вс</th>
    </tr>
    `;

    elem.append(table);

    const mon = new Date(year, --month);
    const carrentMonth = mon.getMonth();

    while (carrentMonth == mon.getMonth()) {

        const tr = document.createElement('tr');
        table.append(tr);

        function getDay(date) {

            let day = date.getDay();

            if (day == 0)
                day = 7;

            return day - 1;
        }

        for (let day = 0; day < 7; day++) {

            let td = document.createElement('td');

            if (day == getDay(mon) && carrentMonth == mon.getMonth()) {
                td.innerHTML = mon.getDate();

                mon.setDate(mon.getDate() + 1);

            }
            tr.append(td);
        }
    }
}

const task7 = document.querySelector('.task7');
createCalendar(task7, 2012, 2);




/*
 Создайте цветные часы как в примере ниже:
Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах. 
*/

function task8() {
    const task8 = document.querySelector('.task8');
    const start = task8.querySelector('[value="Старт"]');
    const stop = task8.querySelector('[value="Стоп"]');
    const hours = task8.querySelector('.hrs');
    const minute = task8.querySelector('.min');
    const second = task8.querySelector('.sec');
    let timer;

    start.addEventListener('click', () => {

        timer = setInterval(() => {
            const date = new Date();
            let hrs = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
            let min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            let sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
            hours.innerHTML = hrs;
            minute.innerHTML = min;
            second.innerHTML = sec;
        }, 1000);

    });

    stop.addEventListener('click', () => {
        clearInterval(timer);
    });
}
task8();


/* 
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> 
*/
const task9 = document.querySelector('.task9');
const liOne = task9.querySelector('#one');

liOne.insertAdjacentHTML('afterend', `<li>2</li><li>3</li>`);


/* 
Вот таблица:
В ней может быть больше строк.
Напишите код для сортировки по столбцу "name".
*/

function sortByName() {
    const task10 = document.querySelector('.task10');
    const trs = task10.querySelectorAll('tr');




    let mas = Array.from(trs);
    mas.splice(0, 1);

    mas.sort((a, b) => {

        const tdA = a.querySelector('td').textContent;
        const tdB = b.querySelector('td').textContent;

        if (tdA < tdB) {

            a.after(b);
            return 1;

        } else if (tdA > tdB) {

            b.after(a);
            return -1;

        }

        return 0;

    });
}

sortByName();