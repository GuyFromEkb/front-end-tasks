"use strict";
/* 
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
}; */

let user = {
    name: "Василий Иванович",
    age: 35
};

const obj = JSON.parse(JSON.stringify(user));

console.log(obj);