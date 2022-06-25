"use strict";
/* Есть массив сообщений:
    let messages = [
        { text: "Hello", from: "John" },
        { text: "How goes?", from: "John" },
        { text: "See you soon", from: "Alice" }
    ];
У вас есть к ним доступ, но управление этим массивом происходит где - то ещё.Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос« было ли сообщение прочитано ? ».Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
P.S.Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
P.P.S.Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства.Если сообщения принадлежат какому - то другому коду, то это может привести к плохим последствиям.*/


let visitedSet = new Map();
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

visitedSet.set("Hello", "John");
visitedSet.set("How goes?", "John");
visitedSet.set("See you soon", "Alice");

delete messages[0];
delete messages[1];
delete messages[2];

messages[3] = { age: 12 };
messages = null;

console.log(visitedSet.has("Hello"))
console.log(visitedSet.has("How goes?"))
console.log(visitedSet.has("See you soon"))
console.log(messages);