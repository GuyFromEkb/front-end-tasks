"use strict";
/* Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

const user = {};

user['name'] = 'John';
user['surname'] = 'Smitch';
user['name'] = 'Pete';

delete user['name'];


/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {

    return Object.keys(obj).length == 0 ? true : false;
}
const foo = {};
console.log(isEmpty(user));