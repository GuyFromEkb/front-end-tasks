"use strict";
// Что выведет код ниже?

alert(null || 2 || undefined); // => 2


// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); // => 1  после 2