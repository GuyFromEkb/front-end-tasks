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