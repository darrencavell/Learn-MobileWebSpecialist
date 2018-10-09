/*****************/
/* Destructuring */
/*****************/
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);

/*******************/
/* Arrow Functions */
/*******************/
/* MAP: creates new array with the results of calling a provided function on every element! */
    // let names = ['Darren', 'Brigitta', 'Cavell'].map(function(name){
        // return name.toUpperCase();
    // });
/* THIS variables top and bottom results the same, but with different syntax! */
let names = ['Darren', 'Brigitta', 'Cavell'].map(name => name.toUpperCase());
for(let name of names){
    console.log(name);
}
/* FILTER:  creates new array with all eents that pass the test*/
let cities = ['Jakarta', 'Bandung', 'Nias', 'Papua', 'Palembang', 'Aceh'].filter(cities => cities.length > 6);
for (let city of cities) {
    console.log(city);
}
const sayHi = () => `Hello Udacity Student!`;
console.log(sayHi());
const greet = name => `Hello ${name}!`;
console.log(greet('Darren'));
const orderIceCream = (flavor, cone) => `Here's your ${flavor} ice cream with ${cone}!`;
console.log(orderIceCream('vanilla', 'cone'));

/***************************/
/* this and Arrow Function */
/***************************/
// constructor
function IceCream() {
    this.scoops = 0;
}
// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function () {
        cone.scoops++; // references the `cone` variable
        // console.log('Scoop added!');
    }, 0.5);
};
const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops);

/******************************/
/* Defaults and Destructuring */
/******************************/
function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []){
    console.log(`Created a sundae with ${scoops}${scoops == 1 ? ' scoop' : ' scoops'}, combined with ${toppings.join(', ')} as it's topping${toppings.length == 1 ? '' : 's'}!`)
}
createSundae([undefined, ['Ice Fudge', 'Windy Fudge']]); // the unflexible of array is that, we need to put undefined, if it was nothing
createSundae([3, ['Ice Fudge', 'Windy Fudge']]);

function createIceCream({scoops = 1, toppings = ['Hot Fudge']} = {}){
    console.log(`Created a sundae with ${scoops}${scoops == 1 ? ' scoop' : ' scoops'}, combined with ${toppings.join(', ')} as it's topping${toppings.length == 1 ? '' : 's'}!`)
}
createIceCream({ toppings: ['Vannila Chocotop', 'Ice Fudge', 'Windy Fudge'] });

/***********/
/* Classes */
/***********/
class Dessert {
    constructor(calories = 250){
        this._calories = calories;
    }
}
class Gellato extends Dessert {
    constructor(flavor, calories, toppings = []){
        super(calories);
        this._flavor = flavor;
        this._toppings = toppings;
    }
    addTopping(topping){
        this._toppings = topping;
    }
}

// ES6
class PlaneES6 {
    constructor(numEngines) {
        this._numEngines = numEngines;
        this._enginesActive = false;
    }
    startEngines() {
        console.log(`Number of engines: ${this._numEngines}`);
        console.log('Starting engines...');
        this._enginesActive = true;
    }
}
var richardPlaneES6 = new PlaneES6(1);
richardPlaneES6.startEngines();
var jamesPlaneES6 = new PlaneES6(4);
jamesPlaneES6.startEngines();
// ES5
function PlaneES5(numEngines){
    this._numEngines = numEngines;
    this._enginesActive = false;
}
PlaneES5.prototype.startEngines = function() {
    console.log(`Number of engines: ${this._numEngines}`);
    console.log('Starting engines...');
    this._enginesActive = true;
}
var richardPlaneES5 = new PlaneES5(1);
richardPlaneES5.startEngines();
var jamesPlaneES5 = new PlaneES5(4);
jamesPlaneES5.startEngines();

//ES6
class Tree {
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}){
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }
    changeSeason(season){
        this.leafColor = this.leaves[season];
        if(season === 'spring'){
            this.size += 1;
        }
    }
}
class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves){
        super(size, leaves);
        this.syrupQty = syrupQty;
    }
    changeSeason(season){
        super.changeSeason(season);
        if(season === 'spring'){
            this.syrupQty += 1;
        }
    }
    gatherSyrup(){
        this.syrupQty -= 3;
    }
}
const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
console.log(myMaple);
//ES5
function TreeES5(size, leaves) {
    this.size = (typeof size == "undefined") ? 10 : size;
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === "undefined") ? defaultLeaves : leaves;
    this.leafColor;
    console.log('constructor called');
}
TreeES5.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if(season === 'spring'){
        this.size += 1;
    }
}
function MapleES5(syrupQty, size, leaves) {
    TreeES5.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === 'undefined') ? 15 : syrupQty;
}
MapleES5.prototype = Object.create(TreeES5.prototype);
MapleES5.prototype.constructor = MapleES5; // not necessarily necessary, because we had override the .prototype, just in case something worst happening, that's why we do the .constructor method again, even though it's stated
MapleES5.prototype.changeSeason = function(season) {
    TreeES5.prototype.changeSeason.call(this, season);
    if(season === 'spring') {
        this.syrupQty += 1;
    }
}
MapleES5.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
}
const myMapleES5 = new MapleES5(15, 5);
myMapleES5.changeSeason('fall');
myMapleES5.gatherSyrup();
myMapleES5.changeSeason('spring');
console.log(myMapleES5);

/***********/
/* Symbols */
/***********/
const sym1 = Symbol('apple');
console.log(sym1);
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);

const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl); // the banana is overriden

const bowlSymbol = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowlSymbol);

/**********************************/
/* Iteration & Iterable Protocols */
/**********************************/
const digits = [0, 11, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
    console.log(digit);
}
const arrayIterator = digits[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

/********/
/* Sets */
/********/
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Age of Empire']);
games.add('Banjo-Tooie');
games.add('Age of Empire');
games.delete('Super Mario Bros.');
console.log(games);

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
//Checking the Length
console.log(months.size);
// Checking the following item
console.log(months.has('September'))
// Retrieving All Values
console.log(months.values()); 

// Using the Iterable Protocols (.values and .keys in Sets are the same!
const iterator = months.values();
console.log(iterator.next());
console.log(iterator.next());
// Using for...of loops
for(month of months){
     console.log(month);
}

/***********/
/* WeakSet */
/***********/
let student1 = { name: 'Darren Cavell', age: 19, gender: 'Male' };
let student2 = { name: 'Jesslyn Angela', age: 15, gender: 'Female' };
let student3 = { name: 'Brigitta Febriani', age: 18, gender: 'Female' };
const students = new WeakSet([student1, student2]);
console.log(students);
students.add(student3);

/********/
/* Maps */
/********/
const employees = new Map();
employees.set('darren_cavell@yahoo.com', {
    firstName: 'Darren',
    lastName: 'Cavell',
    role: 'Frontend Developer'
})
employees.set('brigitta_febriani@yahoo.com', {
    firstName: 'Brigitta',
    lastName: 'Febriani',
    role: 'Software Engineer'
});
employees.delete('brigitta_febriani@yahoo.com');
console.log(employees);

const members = new Map();
members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);
// Check the following key
console.log(members.has('Xavier'));
 // Get the following value
console.log(members.get('Evelyn'));

// Using the MapIterator
let iteratorObjForKeys = members.keys();
console.log(iteratorObjForKeys.next()); // Loop for the keys
let iteratorObjForValues = members.values();
console.log(iteratorObjForValues.next()); // Loop for the values

// Using For...Of Loops
for (const member of members){
    console.log(member);
}

// Using forEach Loop
members.forEach((value, key) => console.log(key, value));

/************/
/* WeakMaps */
/************/
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austin' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver\'s Travels ', author: 'Jonathan Swift '};
const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);
console.log(library);

/************/
/* Promises */
/************/
const mySundaeIceCream = new Promise(function(resove, reject){
    const mySundae = {};
    // if (iceCreamConeIsEmpty(flavor)) {
    //     reject(`Sorry, we're out of that flavor :-(`);
    // }
    // resolve(sundae);
});

// mySundae.then(function (sundae) {
//     console.log(`Time to eat my delicious sundae!`);
// }, function (msg) {
//     console.log(msg);
// });

/***********/
/* Proxies */
/***********/
const richard = {status: 'looking for job'};
const handler = {
    get(target, propName){
        return `He's such a good person, really recommended!`;
    },
    set(target, propName, value){
        if(propName === 'payRate'){
            value = value * 0.85;
        }
        target[propName] = value;
    }
};

/*************/
/* Generator */
/*************/
function* displayResponse() {
    const response = yield;
    console.log(`Your response is ${response}!`);
}
const iteratorGenerator = displayResponse();
// starts running the generator function
iteratorGenerator.next();
// send data into the generator
iteratorGenerator.next('Hello Udacity Student');

function* getEmployee(){
    const names = ['Darren', 'Brigitta', 'Amanda', 'Diego', 'Farin'];
    const facts = [];

    for(const name of names){
        facts.push(yield name);
    }
    
    return facts;
}

const generatorIterator = getEmployee();
let name = generatorIterator.next().value;
name = generatorIterator.next(`${name} is cool!`).value;
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;

const positions = generatorIterator.next(`${name} is awe-inspiring!`).value;
console.log(positions.join('\n'));