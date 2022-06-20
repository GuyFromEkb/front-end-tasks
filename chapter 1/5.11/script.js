"use strict";

/* Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert. */

const dataFeb = new Date(2012, 1, 20, 3, 12);

alert(dataFeb);


/* Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
 */

function getWeekDay(date) {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

const date = new Date(2012, 0, 3);
console.log(getWeekDay(date));


/* 
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2 */


function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
}
const date1 = new Date(2012, 0, 3);
console.log(getLocalDay(date1));



/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date. */

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date2 = new Date(2015, 0, 2);
console.log(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)



/* 
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

 */

function getLastDayOfMonth(year, month) {
    let date1 = new Date(year, month);
    let date2 = new Date(year, month + 1);
    return (date2 - date1) / 1000 / 3600 / 24;
}

console.log(getLastDayOfMonth(2012, 1))