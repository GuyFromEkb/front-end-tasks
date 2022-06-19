"use strict";

// Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

когда один из assert выбрасывает ошибку, то выполнение it блока тут же прекращается.
если первый assert выбросит ошибку, результат работы второго или третьего assert мы уже не узнаем.