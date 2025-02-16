/*
  __   ____  ____   __   _  _  ____ 
 / _\ (  _ \(  _ \ / _\ ( \/ )/ ___)
/    \ )   / )   //    \ )  / \___ \
\_/\_/(__\_)(__\_)\_/\_/(__/  (____/
*/

/*

*/

// 1 — create an array `meals` with three of your favorite meals and log it to the console
let meals = [fries, soup, noodles];
console.log(meals[0]);
console.log(meals[1]);
console.log(meals[2]);
// 2 — create an array `drinks` with three of your favorite drinks and log it to the console
let drinks = [cola, applejuice, water];
console.log(drinks);
// 3 - create a variable `lastmeal` that stores the last item from the `meals` array
// hint: use the pop() function - log the result to the console
let lastmeal = meals.pop();
console.log(lastmeal);
console.log(meals);
// 4 - loop over the meals array and print each meal to the console

// 5 - add a meal called `cereal` to the `meals` array, this time using the push() function, log the variable to the console
meals.push(cereal);
console.log(meals)
// 6 - create a variable `breakfast` and find the position of `cereal` in the `meals` array
// hint: use the indexOf() function - log the result to the console

/* CHALLENGE :: TIPJAR */
// 7 - create an array `tipjar` that will contain all our tips, add the following tips: 1, 5, 2, 2, 1

// 8 - create a function `tip` that will add a tip to the `tipjar` array
// hint: the function should take a parameter `amount` and add it to the `tipjar` array via `push()`

// 9 - call the function with a tip amount of 2 and log the `tipjar` array to the console

// 10 - create a function `total` that will calculate the total amount of the `tipjar` array
// hint: use a loop to iterate over the array and add the values together, the function should return the result
// log the total value of the tips to the console
