"use strict";


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
        html: 'Hello ',
        className: "class-task1"
    });
}, 2000);