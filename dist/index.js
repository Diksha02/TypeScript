"use strict";
// TS is a superset of JS
// JS -> TS, JSX -> TSX
//// Basic types
let id = 5;
let company = 'TIAA';
let isPublished; // defining
let a = 'Hello';
a = true;
isPublished = false; // initializing
// isPublished = 'asdj' // will give error
//// arrays
let ids = [1, 2, 3, 654];
let companies = ['wewe', 'erert', 'etyt'];
let arr = ['hello', 9, true, isPublished];
//// Tuple
let person1 = [1, 'Diksha', true];
let person2 = [3, 'Komal'];
// Tuples arrays
let employee = [
    [1, 'Diksha'],
    [2, 'Komal'],
    [3, 'Pratik']
];
//// Union
let pid = 22;
pid = '343';
//// Enum
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 4] = "Up";
    Directions1[Directions1["Down"] = 5] = "Down";
    Directions1[Directions1["Left"] = 6] = "Left";
    Directions1[Directions1["Right"] = 7] = "Right";
})(Directions1 || (Directions1 = {}));
console.log(Directions1);
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Down"] = "Down";
    Directions2["Left"] = "Left";
    Directions2["Right"] = "Right";
})(Directions2 || (Directions2 = {}));
console.log(Directions2);
const user = {
    id: 1,
    name: 'Diksha'
};
// type Point = number | string    // can use unions with types
// const p1: Point = 2
//// Type assertion
let cid = 1;
let customerId = cid;
customerId = cid; // same thing as above different syntax
//// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log('Hello world');
const user1 = {
    id: 1,
    name: 'Diksha'
};
// arrow functions
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
//// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const diksha = new Person(1, 'Diksha');
const komal = new Person(2, 'Komal');
console.log(diksha, komal);
console.log(diksha.register());
// Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Rahul', 'Developer');
console.log(emp.name);
console.log(emp.register());
//// Generics
// function getArray( items: any[]): any[] {
//     return new Array().concat(items)
// }
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['diksha', 'komal', 'pratik']);
// numArray.push('hello') // gives an error for generics
// strArray.push(3) // same here
numArray.push(3);
