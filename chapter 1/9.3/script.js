"use strict";

/* Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

В чем разница?

Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка */


class Rabbit extends Object {
    constructor(name) {
        super(name);
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name'));