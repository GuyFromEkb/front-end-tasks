"use strict";

/* Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
Если да – приведите пример вашего кода. */

const human = {
    name: "John Seen",
    human: true
};

function A() { return human; }

function B() { return human; }

console.log(A() == B());


/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */


function Calculator() {

    this.read = function(operandA, operandB) {
        this['operandA'] = +prompt('Значение1', 0);
        this['operandB'] = +prompt('Значение2', 0);
    };

    this.sum = function() {
        return this['operandA'] + this['operandB'];
    };

    this.mul = function() {
        return this['operandA'] * this['operandB'];
    };
}

const calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


/* Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        const numb = +prompt("введите значение:");
        this.value += numb;
        return this;
    };
}

const acc = new Accumulator(2);

acc.read().read();
alert(acc.value);