"use strict";

/* В приведённом ниже коде создаются и изменяются два объекта.
Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) */

/* 
 1 => true.
 2 => null
 3 => undefined
*/


/* Задача состоит из двух частей.
У нас есть объекты:

    let head = {
        glasses: 1
    };

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
    pockets→ bed→ table→ head.Например, pockets.pen должно возвращать значение 3(найденное в table), а bed.glasses– значение 1(найденное в head).
2. Ответьте на вопрос:
    как быстрее получить значение glasses– через pockets.glasses или через head.glasses ? При необходимости составьте цепочки поиска и сравните их. */


let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);

/* 
2. Сам не знал, зато теперь запомнил
 инфа в инетрнете: для современных движков неважно, откуда берётся свойство – из объекта или из прототипа. Они запоминают, где было найдено свойство,
и повторно используют его в следующем запросе.
*/


/* Объект rabbit наследует от объекта animal.
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); */

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

console.log(animal)
console.log(rabbit)

rabbit.eat()

console.log(animal)
console.log(rabbit)