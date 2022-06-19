"use strict";

// Каким будет результат выполнения этого кода?

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// (user.go)()
// P.S. Здесь есть подвох :)

будет ошибка, на 8 строкер пропущенна;

// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined


1, 2 при вызове ф - ции, функция ссылается на обект внутри которого содержится

3, 4 - передается функция, без передачи значения "this"


// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?

будет ошибка!(undefined), ref как свойство, а не как функция


function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};

let user = makeUser();

console.log(user.ref().name);