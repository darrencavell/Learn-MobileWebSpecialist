# ES-6

**NOTES:** everything here is based on my learning process, feel free to add suggestions if you find something strange.

## Lesson 3 - Built-ins

### 13 - Creating & Modifying Maps

#### 13.1 - Creating Maps
```
const employees = new Map();

console.log(employees);
```

#### 13.2 - Modifying Maps
```
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);
```

> Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

```
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');

console.log(employees);
```

> Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}

```
employees.clear()

console.log(employees);
```

> Map {}

### 14 - Working with Maps

```
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
```

> false 
> true

```
console.log(members.get('Evelyn'));
```

> 75.68

### 15 - Looping Through Maps

#### 15.1 - Using Map Iterator

```
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
```

> Object {value: 'Evelyn', done: false}

```
let iteratorObjForValues = members.values();
iteratorObjForValues.next();
```

> Object {value: 75.68, done: false}

#### 15.2 - Using a for...of Loop

```
for (const member of members) {
  console.log(member);
}
```
> ['Evelyn', 75.68]
> ['Liam', 20.16]
> ['Sophia', 0]
> ['Marcus', 10.25]
```
/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    const [name, score] = member;
    console.log(name, score);
}
```
<p align="center">
  <img src="correct-illustration-ceea2.svg">
</p>
<p align="center">
    <span style="color: #02ccba">Success</span>
</p>

> * Your code should have a members variable 
> * Your code should use destructuring
> * members should be a Map

#### 15.3 - Using a forEach Loop

```
members.forEach((value, key) => console.log(key, value));
```
> 'Evelyn' 75.68
> 'Liam' 20.16
> 'Sophia' 0
> 'Marcus' 10.25

### 16 - WeakMaps

[Garbage Collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection).
A weakmap is just like a normal map, with few differences:
1. ONLY CONTAIN object as keys
2. NOT ITERABLE
3. DO NOT HAVE `.clear` method

```
const book1 = {title: 'Pride and Prejudice', author: 'Jane Austin'};
const book2 = {title: 'The Catcher in the Rye', author: 'J.D. Salinger'};
const book3 = {title: 'Gulliver’s Travels', author: 'Jonathan Swift'};

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
```

> WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

If we set other than object, we will get an error!
```
library.set('The Grapes of Wrath', false);
```

> Uncaught TypeError: Invalid value used as weak map key(…)

### 18 - Promises

Javascript Promises let you start a work and let you get back to your regular work asynchronously. When you create promise, you must give it the code that will run! [Promise Contructor Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - `new Promise()`

#### Indicate a Successful Request or a Failed Request

```
new Promise(function(){
    window.setTimeout(function createSundae(flavor = 'chocolate'){
        const sundae = {};
        if(/*iceCreamConeIsEmpty(flavor)*/){
            reject(`Sorry, we're out of that flavor :-(`));
        }
        resolve(sundae);
    }, Math.Random() * 2000);
});
```

#### Promises Return Immediately

```
const myPromiseObj = new Promise(function(resolve, reject){
    // sundae creation code
});
```

Using the `.then()` method, it takes 2 functions:
1. function if the request completed succesfully
2. function if the request failed to complete

```
mySundae.then(function(sundae){
    console.log(`Time to eat my delicions ${sundae});
}, function(msg){
    console.log(msg);
});
```

### 21 - Proxies

When an object represents another object, it handles all the data required! `new Proxy()`. This constructor needs 2 items:
- the object that will be the proxy for
- an object containing list of methods it will handle for the proxied object.

The second object is called **handler**.

#### 21.1 - A Pass Through Proxy

```
var richar - {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; //returns 'looking for work'
```

The code above doesn't do anything special with the proxy, it's just passes the request directly to the source object!

The key of making Proxies useful is the handler object that'spasses as the second object to the Proxy constructor!

#### 21.2 - Get Trap

```
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName){
        console.log(target); 
        // the 'richard' object, not 'handler' and not 'agent'
        console.log(propName);
        // the name of the property the proxy 
        // ('agent' in this case) is checking
    }
}
const agent = new Proxy(richard, handler);
agent.status;
// logs out the richard object (not the agent object!) 
// and the name of the property being accesses ('status)
```

Handler object has the `.get()` method, which used as a "trap" in Proxy! When the code `agent.status;` is run on the last line, as the `.get()` exists, it "intercepts" the call to get the `status` property and runs the `.get()` trap function. *Just a reminder, when using the trap function, make sure to provide all the functionallity for that specific trap.*

#### 21.3 - Accessing the Target object from inside the proxy

```
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName){
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
const agent = new Proxy(richard, handler);
agent.status;
// (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status
```

#### 21.4 - Having the proxy return info, directly

``` 
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName){
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status;
// returns the text `He's following many leads, so you should offer a contract as soon as possible!`
```

If we wanted to *change* properties, then the `set()` trap need to be used!

```
const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value){
        // if the pay is being set, take 15% commision
        if(propName === 'payRate'){
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay
```

#### 21.5 - Other Traps

There are other 13 different traps that can be used in a handler!
1. [the get trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get) - lets the proxy handle calls to property access
2. [the set trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) - lets the proxy handle setting the property to a new value
3. [the apply trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply) - lets the proxy handle being invoked (the object being proxied is a function)
4. [the has trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has) - lets the proxy handle the using `in` operator
5. [the delete trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty) - lets the proxy handle if a property is deleted
6. [the ownKeys trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys) - lets the proxy handle when all keys are requested
7. [the construct trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) - lets the proxy handle when the proxy is used with the new keyword as a constructor
8. [the defineProperty trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty) - lets the proxy handle when defineProperty is used to create a new property on the object
9. [the getOwnPropertyDescriptor trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor) -  lets the proxy handle getting the property's descriptors
10. [the preventExtenions trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions) - lets the proxy handle calls to `Object.preventExtensions()` on the proxy object
11. [the isExtensible trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible) - lets the proxy handle calls to `Object.isExtensible` on the proxy object
12. [the getPrototypeOf trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf) - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
13. [the setPrototypeOf trap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf) - lets the proxy handle calls to Object.setPrototypeOf on the proxy object

### 22 - Proxies vs ES5. Getter/Setter

```
var obj = {
    _age: 5.
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
}
```

```
obj.age; // logs 'getting the "age" property' and 5
obj.height; // logs 'getting the "height" property' and 4
```

But look what happens when we add new property to the object!

```
obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120
```

Notice the log is just different. `getting the "weight" property` message wasn't displayed like the `age` and `height`.

With ES6. we *do not need to know the property beforehand:*

```
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property){
        console.log(`getting the $property`);
        console.log(target[property]);
    }
});
proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
```

All well and good, but look what happens when we add a new property:

```
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
```

The `weight` property was added to the proxy object!

### 23 - Proxies Recap

A proxy object sits beween a real object and the calling code. To create a proxy:
- use the `new Proxy()` constructor
    - 1<sup>st</sup> param, the object being proxied
    - 2<sup>nd</sup> param, the handler object
- the handler object is made up with 13 different "traps"
- a trap is a function that will intercept calls to properties let you run code
- if a trap is not defined, the default behaviour is sent to the target object

Proxies are a powerful new way to create & manage the interactions between objects.


### 24 - Generators

Whenever a function is invoked, the Javascript engine starts from top to bottom, there's no way to stop in the middle. This **"run-to-completion** is the way it's always been:

```
function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();
```

Output on the console:

```
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended
```

But, what if, we wanted to print the first 3?

#### 24.1 - Pausable Functions

```
function* getEmployee(){
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
```

Now, when we try to run this function: 
```
getEmployee();

// this is the response I get in Chrome:
getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
```

```
QUIZ QUESTION
Which of the following are valid generators? Pay attention to the placement of the asterisk.

If you're not sure, try running them in your browser's console.

- [x] function* names() {}
- [x] function * names() {}
- [x] function *names() {}
```

### 25 - Generators & Iterators

When generators invoked, it doesn't actually run any of the code, instead it creates and returns an iterator.

```
const generatorIterator = getEmployee();
generatorIterator.next();
```

Produces the code we expect:

```
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended
```

It never actually paused, so how do we do that?

#### 25.1 - The Yield Keyword

`yield` was introduced in ES6, it can only be used in generator functions.


```
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
```

When we try to do the same code again:

```
const generatorIterator = getEmployee();
generatorIterator.next();
```

Logs the following to the console:

```
the function has started
Amanda
```

It's paused, but to make sure, let's check the next iteration: 

```
Diego
```

So it remember exactly where we left off!

#### 25.2 - Yielding Data to the "Outside" World

Instead of logging the names, we can return it and pause!

```
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
```

```
const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"
```

```
QUIZ QUESTION
How many times will the iterator's .next() method need to be called to fully complete/"use up" the udacity generator function below:

function* udacity() {
    yield 'Richard';
    yield 'James'
}

- [ ] 0 times
- [ ] 1 time
- [ ] 2 times
- [x] 3 times 
```

### 26 - Sending Data into/out of a Generator

Not only that we can return a data, but also we can send the data back!

```
function* displayResponse(){
    const response = yield;
    console.log(`Your response is ${response}!`);
}

const iterator = displayResponse();

// starts running the generator function
iterator.next();
// send data into the generator
iterator.next('Hello Udacity Student');
```

Generators will be widely used in the upcoming additions to the Javascript language. One upcoming feature is [async function](https://github.com/tc39/ecmascript-asyncawait).