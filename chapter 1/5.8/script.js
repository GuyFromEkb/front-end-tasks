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


const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

const weakMap = new WeakMap();

//делаем список не прочитанных сообщений
function notRead(arr) {

    for (const item of arr) {
        weakMap.set(item, false);
    }
}

const whoReadMessage = [
    { text: "Hello", from: "John" },
    { text: "See you soon", from: "Alice" }
];

//меняем статус сообщений на "прочитанный"
function yesRead(arr) {
    for (const item of arr) {
        weakMap.set(item, true);
    }
}

//проверяем и удаляем из массива сообщений, все прочитанные
function readMessage(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (weakMap.has(arr[i]))
            arr.splice(i, 1);
    }
}

notRead(messages);
yesRead(whoReadMessage);
readMessage(messages);

//проверяем для кого остались не прочитанные сообщения или какие ...
for (const item of messages) {
    console.log(item.from);
};