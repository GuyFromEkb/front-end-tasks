"use strict";
// Что выведет код ниже?

alert(null || 2 || undefined); // => 2


// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); // => 1  после 2


// Что выведет код ниже?

alert(1 && null && 2); // => null

// Что выведет код ниже?

alert(alert(1) && alert(2)); // => 1 после undefind

// Что выведет код ниже?

alert(null || 2 && 3 || 4); // => 3

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.


if (age >= 14 && age <= 90);

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);


// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?..

if (-1 || 0) alert('first'); // Выполнится.
if (-1 && 0) alert('second'); // Не выполнится
if (null || -1 && 1) alert('third'); // Выполнится