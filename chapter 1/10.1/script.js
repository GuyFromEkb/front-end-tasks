"use strict";

/* Сравните два фрагмента кода.

Первый использует finally для выполнения кода после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  очистить рабочее пространство
}
Второй фрагмент просто ставит очистку после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
}

очистить рабочее пространство
Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.

Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы? Если такое преимущество есть, то дайте пример, когда оно проявляется. */

/* 
Нужно использовать finally, т.к. если будет throw или return из ф-ции или метода, то дальнейши код в области не сработает...
finally сработает в любом случае
*/





/* Наследование от SyntaxError
важность: 5
Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
Класс должен поддерживать свойства message, name и stack.
Пример использования:

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError) */



class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

const err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof SyntaxError); // true