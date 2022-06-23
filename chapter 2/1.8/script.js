"use strict";



/* 
Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});
 */


function showNotification({
    top = 0,
    right = 0,
    html = 'Custom text',
    className = ''
}) {
    const task1 = document.querySelector('.task1');
    const show = document.createElement('div');

    show.classList.add(className);
    show.innerHTML = html;

    show.style.top = `${top}px`;
    show.style.right = `${right}px`;

    task1.append(show);
    setTimeout(function() {

        show.remove();

    }, 1000);
}


setInterval(function() {
    showNotification({
        top: 10,
        right: 10,
        html: 'long Text text Long',
        className: "class-task1"
    });
}, 2000);