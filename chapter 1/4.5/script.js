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