# Introduction to javascript

Before starting:

The proposed solutions are just my own solution to a problem. Programming is not a fixed science where the path from A to C is always B.

Some solutions may be better than others depending on certain criteria (performace, simplicity, compatibility, scalability etc) but usually there's no such a thing like a *perfect, absolute solution* so don't be afraid to experiment. **Done is better than perfect**.

## JS basics. Data types and built in objects

Just play around, declare variables, asign and reassign different values.

- Try to reasign a const
- Log a variable that has not been declared
- On the browser console, try to see differences on how types are printed (different color, foldable fields, etc)

## Working with simple types. Operators

Create a function that calculates the volume of a sphere (4/3 pi r^3).

```javascript
function getSphereVol(radius) {
  return 4/3 * Math.PI * radius ** 3;
}
```

- Play around and guess the difference between == and ===
- What happens if you try to do mathematical operations with non-number values?

Create a function that returns true if a number is odd and false if is even

```javascript
function isOdd(num) {
  return num % 2 !== 0;
}
```

## Objects and arrays

- Declare an object, create a copy of it. Change some property. Log the copy.

Create a function that, given an array of three numbers, returns the average.

```javascript
function average(a) {
  const sum = a[0] + a[1] + a[2];
  return sum / 3;
}
```

Create a function that receives an object, a string and other param. It should return the object with the string as a new property, and the param as value.

```javascript
function composeObject(base, key, value) {
  base[key] = value;
  return base;
}
```

---

Create a function that return the number of keys of a given object

```javascript
function numberOfKeys(obj) {
  return Object.keys(obj).length;
}
```

Create a function that checks if a value exists inside an array

```javascript
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}
```

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have '***' between each of its letters.

```javascript
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
```

## Conditionals

Given the 'calculate the average' exercise, modify it to check that every value is a number. Throw an error if not.

```javascript
function isNotNumber(n) {
  return typeOf(n) !== 'number';
}
function average(a) {
  if (isNotNumber(a[0]) || isNotNumber(a[1]) || isNotNumber(a[2])) {
    throw new Error('Incorrect value');
  }
  const sum = a[0] + a[1] + a[2];
  return sum / 3;
}
```

Create a function that, given a color in the traffic light, returns the next one

```javascript
function nextColor(color) {
  let result;
  if (color === 'green') {
    result = 'yellow';
  } else if (color === 'yellow') {
    result = 'red';
  } else if (color === 'red') {
    result = 'green';
  }
  return result;
}
```

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

```javascript
function combat(health, damage) {
  const d = health - damage;
  return d < 0 ? 0 : d;
}
```

## Loops

Create a function to find **the count** of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

```javascript
function mostFrequentItemCount(collection) {
  let ocurrences = {};
  let result = 0;
  collection.forEach((n) => {
    ocurrences[n] = ocurrences[n] === undefined ? 1 : ++ocurrences[n]
  });
  for (const item in ocurrences) {
    const value = ocurrences[item];
    result = result > value ? result : value;
  }
  return result;
}
```

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

scrollingText('codewars') should return: [ 'CODEWARS', 'ODEWARSC', 'DEWARSCO', 'EWARSCOD', 'WARSCODE', 'ARSCODEW' 'RSCODEWA', 'SCODEWAR' ];

```javascript
function scrollingText(text){
  const result = new Array(text.length);
  for (let i = 0; i < result.length; i++) {
    if (i === 0) {
    result[i] = text.toUpperCase();
    } else {
      const prev = result[i - 1];
      result[i] = `${prev.slice(1)}${prev[0]}`;
    }
  }
  return result;
}

// Another option

function scrollingText(text){
  let result = []
  for( let i = 0; i < text.length; i++){
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
  }
  return result
}

```

## Functional programing

Create a function that, given an array of numbers, returns the lower positive value

```javascript
function getLower(numsArray) {
  return numsArray
    .filter(n => n >=0)
    .reduce((prev, current) => prev !== undefined && prev < current ? prev : current);
}
```

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

Example:

```javascript
queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
```

```javascript
function queueTime(customers, n) {
  const getMinItemIndex = (fullArray) => fullArray.indexOf(Math.min(...fullArray));
  const createQueues = (cust, checkouts) => customers.reduce((prev, current) => {
    prev.length < n
      ? prev.push(current)
      : prev[getMinItemIndex(prev)] += current;
    return prev;
  }, []);
  return Math.max(...createQueues(customers, n), 0);
}


function queueTime(customers, n) {
  return Math.max(...(customers.reduce((prev, next) => {
    prev[prev.indexOf(Math.min(...prev))] += next;
    return prev;
  }, Array(n).fill(0))));
}
```

Given the following code ([also here](https://repl.it/repls/MundaneSeagreenCopycat)), refactor it using functional programing

```javascript
const usersBySocialNetwork = {
  twitter:[
    {handle:'@Quinn', mail:'kirkbender@softmicro.com'},
    {handle:'@Torres', mail:'carolinepitts@datagene.com'},
    {handle:'@Kline', mail:'snydervelasquez@obliq.com'},
    {handle:'@Monroe', mail:'marshaguirre@zialactic.com'},
    {handle:'@Williams', mail:'paulasanford@obliq.com'}
  ],
  facebook:[
    {name:'Mona Lloyd', email:'kirkbender@softmicro.com'},
    {name:'Brenda Mullen', email:'miriamhicks@vicon.com'},
    {name:'Snyder Velasquez', email:'snydervelasquez@obliq.com'}
  ],
  instagram:[
    {username:'Stephenson', email:'santiagocurry@comvene.com'},
    {username:'Fowler', email:'kirkbender@softmicro.com'},
    {username:'Zamora', email:'miriamhicks@vicon.com'},
    {username:'Dodson', email:'rhondacotton@xyqag.com'}
  ]};

// Don't touch the code above (treat as response from database)
let allUsers = usersBySocialNetwork.twitter.concat(usersBySocialNetwork.facebook, usersBySocialNetwork.instagram);

function formatUsers() {
  const newUsers = [];
  allUsers.forEach((user, i) => {
    const tempUser = {
      email: user.mail || user.email,
      twitter: user.handle,
      facebook: user.name,
      instagram: user.username
    };

    const j = newUsers.findIndex(item => item.email === tempUser.email);
    if (j === -1) {
      newUsers.push(tempUser);
    } else {
      newUsers[j].twitter = newUsers[j].twitter || tempUser.twitter;
      newUsers[j].facebook = newUsers[j].facebook || tempUser.facebook;
      newUsers[j].instagram = newUsers[j].instagram || tempUser.instagram;
    }
  });

  allUsers = newUsers;
}
formatUsers();
```

Proposed solution

```javascript
function assignDefinedProps(target, source) {
  const modifiedTarget = { ...target };
  Object.entries(source).forEach(([key, value]) => {
    if (value !== undefined) {
      modifiedTarget[key] = value;
    }
  });
  return modifiedTarget;
}

function mapUserToCommonStructure(user => ({
  email: user.mail || user.email,
  twitter: user.handle,
  facebook: user.name,
  instagram: user.username
}));

function formatUsers(...allUsers) {
  const flattenUsers = [].concat(...allUsers);
  return flattenUsers
  .map(mapUserToCommonStructure)
  .reduce((prev, user) => {
    const i = prev.findIndex(item => item.email === user.email);
    if (i === -1) {
      prev.push(user);
    } else {
      prev[i] = assignDefinedProps(prev[i], user);
    }
    return prev;
  }, []);
}

formatUsers(usersBySocialNetwork.twitter, usersBySocialNetwork.facebook, usersBySocialNetwork.instagram);
```

## Asyncronism

[List of public APIs](https://github.com/toddmotto/public-apis)

Basic example of requests with callback and promise

```javascript
const request = require('request');
const axios = require('axios');

request.get({
  url: 'https://www.foaas.com/anyway/Medium/Paqui',
  headers: { Accept: 'application/json' }
}, (error, response) => {
  console.log(response.body);
})

axios.get('https://www.foaas.com/anyway/Medium/Paqui').then(response => {
  console.log(response.data);
})
```