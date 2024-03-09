'use strict';

// Data needed for a later exercise
// Data needed for first part of the section
const weekdaysz = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdaysz[2]]: {
    open: 12,
    close: 22,
  },
  [weekdaysz[4]]: {
    open: 11,
    close: 23,
  },
  [weekdaysz[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  feeds: {
    goal: 1.23,
    x: 3.24,
    score: 45.2,
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //ES6 ENHANCED OBJECT LITERALS
  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient, otherIngredients);
  // },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

///////////////////////////////////////
// String Method Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const data = flights.split('+');
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of data) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )}, ${getCode(from)}, ${getCode(to)}, ${time.replace(':', 'h')}`.padStart(
    36,
    ' '
  );
  console.log(output);
}
///////////////////////////////////////
// Coding Challenge #4

 
/*Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${second.repeat(
      second[0],
      second[0].toUpperCase()
    )}`;
    //console.log(output);
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

///////////////////////////////////////
// Working With Strings - Part 2

// Split and join
//Split logs an array, while join logs a stringlike sentence
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Logs as a sentence

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(4378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
//console.log(announcement.replace(/door/g, 'gate')); //"g" for global

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
// Working With Strings
const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
//ALSO WORKS LIKE THIS
console.log('B737'[0]); //Logs 'B' to the console

console.log(airline.length); //Logs "16" to the console, THE SPACE BETWEEN THEM ARE ALSO COUNTED
console.log('B737'.length);

//To derive the position of a string
console.log(airline.indexOf('r')); //Counts as "0" based and it counts the spaces between them (here, "r" is 6)
console.log(airline.lastIndexOf('r')); //Logs the position of the last "r" in the string
console.log(airline.indexOf('Portugal')); //It must be started with a capital letter

console.log(airline.slice(4)); //Logs the remaining string, starting from position 4
console.log(airline.slice(4, 7)); //Since there's nothing at position 7, it start extracting at position 4 and stops at position 6

console.log(airline.slice(0, airline.indexOf(' '))); //We included space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Logs portugal (last space + 1)
console.log(airline.slice(-2)); //Starts extracting from the back(logs "al")
console.log(airline.slice(1, -1));

const checkMiddleseat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleseat('11B');
checkMiddleseat('23C');
checkMiddleseat('3E');
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1.
//const eventz = [...gameEvents.values()];
//console.log(eventz);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//Bonus
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half}HALF] ${key} : ${value}`);
}


 {console.log(`[FIRST HALF] ${key}: ${value})`} else{`console.log([Second Half] ${key}: ${value})`} 
 
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//CONVETING OBJECT TO MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//QUIZ APP
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('Correct') === answer));

//CONVERTING MAP TO ARRAY
console.log([...question]);
//console.log(question.entries()); //IT IS STILL THE SAME AS (...QUESTION)
console.log([...question.keys()]);
console.log([...question.values()]);

////////////////////////////////////////////
//// MAPS FUNDAMENTALS
const rest = new Map();
rest.set('name', 'Classico Italliano');
rest.set(1, 'Firenze italy');
console.log(rest.set(2, 'Lisbon Portugal'));

rest
  .set('categories', ['Italian', 'Pizzera', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, "We're open :D")
  .set(false, "We're closed :");

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear()
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

// ////////////////////////////////////////////
// //// SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Abdulmuiz'));

//To CHECK FOR THE LENGTH OT THE SET, WE USE ".SIZE" INSTEAD OF ".LENGTH"
console.log(ordersSet.size);

//TO CHECK IF A VALUE IS IN A SET
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//TO ADD/DELETE A VALUE IN A SET
ordersSet.add('Garlic bread');
ordersSet.add('Garlic bread');
ordersSet.delete('Rissotto');
//ordersSet.clear() //Used to delete all the values in a set
console.log(ordersSet);

//LOOPING A SET
for (const order of ordersSet) console.log(order);

//EXAMPLES
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Abdulmuiz Sanni').size);

// ////////////////////////////////////////////
// ////LOOPING OVER OBJECTS; OBJECT.KEYS, OBJECT.VALUES, ENTRIES
//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We're open on ${properties.length} days:`;
console.log(openStr);

for (const day of properties) {
  openStr += ` ${day}, `;
}
console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
////////////////////////////////////////////
/////OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.wed?.open);
//EXAMPLE
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //console.log(`on ${day}, we are open at ${open}`);
}

//METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

//ARRAYS
const user = [{ name: 'Sanni', email: 'ayomideabdulmuiz565@gmail.com' }];
console.log(user[0]?.name ?? 'User array empty');

////////////////////////////////////////////
////THE FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

////////////////////////////////////////////
///THE NULLISH COELESCING OPERATOR(??)
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);
//The nullish operator "??" those not see "0" and "" as a falsy value
const guest = restaurant.numGuest ?? 10;
console.log(guest);

// // //////////////////////////////////////////
// // //SHORT CIRCUITING(&& AND ||)
console.log('------OR-----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || null || 'Jonas' || '' || 23);

//restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('------AND-----');
console.log(0 && 'jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Practical Example (mostly used for conditioning)
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinarch');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinarch');

//////////////////////////////////////////
//The rest operator
//Arrays with rest and spread operator
//Spread because on the right side of =
const arrr = [1, 2, ...[3, 4]];
console.log(arrr);
//Rest because it is on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, Focaccia, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, Focaccia, otherFoods);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Using the spread operator with functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(2, 8, 5, 3, 2, 1, 4);

const x = [2, 3, 4];
add(...x);

restaurant.orderPizza('mushroom', 'spinnarch', 'garlic', 'bread');
restaurant.orderPizza('mushroom');

//////////////////////////////////////////
//The spread operator
//Using the spread operator, it extract all the values of an array
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); //Returns the element of "newArr" individually
//Same as saying...
console.log(1, 2, 7, 8, 9);

const badArr = [1, 2, arr[0], arr[1], arr[2]];
const good = [1, 2, ...arr];
console.log(badArr, good);

const newMenu = [...restaurant.mainMenu, 'Gnucci'];
console.log(newMenu);
/// Note: the spread operator "..." is similar to destructuring, but it can only be used in places where we write values seperated by comas ","

const ingridients = [
  // prompt("let's make pasta! Ingridient 1?"),
  // prompt('Ingridient 2?'),
  // prompt('Ingridient 3?'),
];
console.log(ingridients);

//Both ways give the same result, but "..." is the easiest method
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients);

//How "..." works with object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);*/

//////////////////////////////////////////
//Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Changing the  name of a key in an object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tag,
} = restaurant;
console.log(restaurantName, hours, tag);

//Setting default values
//If the value is not in "restaurant", it simply displays "[]" instead of "undefned"
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating objects
//const obj = { d: 23, e: 7, f: 14 };
//const { d, e } = obj;
//console.log(d, e);

//Gives the same result
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e);

const {
  fri: { open: o, close: v },
} = openingHours;
console.log(o, v);

const {
  feeds: { goal, x: odds, score },
} = restaurant;
console.log(goal, odds, score);*/

//////////////////////////////////////////
//Destructuring and Mutating Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories; // To make secondary the third value
console.log(main, secondary);

//Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//This is how to receive to return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Destructuring inside destructuring
//Nested array destructuring
const nested = [2, 4, [5, 6]];

//const [i, , j] = nested;
//console.log(i, j); //Only logs [2, [5, 6]]

const [i, , [j, k]] = nested;
console.log(i, j, k); //Logs [2, 5, 6]

//Destructuring with default values

//const [p, q, r] = [8, 9];
//console.log(p, q, r); // returns "r" as undefined

//Giving them default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // returns "r" as 1 
