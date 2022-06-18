"use strict";
// Выведется ли alert?

if ("0") {
    alert('Привет');
} // => Выведется

/*  Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

const answer = prompt("Какое «официальное» название JavaScript?");

(answer.toLocaleLowerCase() == "ecmascript") ? alert('Верно!'): alert('Не знаете? ECMAScript!');