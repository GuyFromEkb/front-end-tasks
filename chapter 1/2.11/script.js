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

alert(null || 2 && 3 || 4); //