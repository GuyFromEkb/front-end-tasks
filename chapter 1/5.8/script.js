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

//не прочитанных сообщений
function notRead(arr) {

    for (const item of arr) {
        weakMap.set(item, false);
    }
}

const whoReadMessage = [
    { text: "Hello", from: "John" },
    { text: "See you soon", from: "Alice" }
];

//а тут их прочитали
function yesRead(arr) {
    for (const item of arr) {
        weakMap.set(item, true);
    }
}


function readMessage(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (weakMap.has(arr[i]))
            arr.splice(i, 1);
    }
}

notRead(messages);
yesRead(whoReadMessage);
readMessage(messages);

//остались непрочитанные 
for (const item of messages) {
    console.log(item.from);
}



/* Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее. */


let messages1 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];


let weakMap1 = new WeakMap();

//сообщения отправлены но не прочитаны
function dateMakeMessage(arr) {

    for (const item of arr) {
        weakMap1.set(item, null);
    }
}

//прочитали 2 сообщения
function dateReadMessage() {
    weakMap1.set(messages1[1], new Date().getTime() + 1000 * 60);
    weakMap1.set(messages1[2], new Date().getTime() + 4000 * 60);
}


dateMakeMessage(messages1);
dateReadMessage();

for (const item of messages1) {

    if (weakMap1.get(item) === null) {
        console.log(`сообщение "${item.text}" не было прочитано `)
    } else {
        console.log(`сообщение "${item.text}" прочитано ${new Date(weakMap1.get(item))}`)
    }

    console.log(weakMap1.get(item));
}


console.log(weakMap1.get(messages1[1]));












// console.log(new Date(Date.now()))
/* 
//допустим эти сообщения прочитали
let readsMessage = [
    { text: "Hello", from: "John" },
    { text: "See you soon", from: "Alice" }
];

//меняем статус сообщений на "прочитанный"
function yesReadMessage(arr) {
    for (let item of arr) {
        weakMap.set(item, new Date(Date().getTime() + 1000 * 60));
    };
};

//проверяем и удаляем из массива сообщений, все прочитанные
function readMessage(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (weakMap.has(arr[i]))
            arr.splice(i, 1);
    };
};

noReadMessage(messages1);
yesReadMessage(readsMessage);
readMessage(messages1);

//проверяем для кого остались не прочитанные сообщения или какие ...
for (let item of messages1) {
    console.log(item.from);
}; */