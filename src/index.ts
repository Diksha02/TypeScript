// TS is a superset of JS
// JS -> TS, JSX -> TSX

//// Basic types
let id: number = 5
let company: string = 'TIAA'
let isPublished: boolean // defining
let a: any = 'Hello'
a = true
isPublished = false // initializing
// isPublished = 'asdj' // will give error


//// arrays
let ids: number[] = [1,2,3,654]
let companies: string[] = ['wewe','erert','etyt']
let arr: any[] = ['hello', 9, true, isPublished]


//// Tuple
let person1: [number, string, boolean] = [1, 'Diksha', true]
let person2: [number, string] = [3, 'Komal']

// Tuples arrays
let employee: [number, string][] = [
    [1, 'Diksha'],
    [2, 'Komal'],
    [3, 'Pratik']
]


//// Union
let pid: string | number = 22
pid = '343'


//// Enum
enum Directions1 {
    Up = 4,
    Down,
    Left,
    Right
}
console.log(Directions1);

enum Directions2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Directions2);


//// Objects

// const user: {  // Look messy
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Diksha'
}

// type Point = number | string    // can use unions with types
// const p1: Point = 2

//// Type assertion
let cid: any = 1
let customerId = <number>cid 
customerId = cid as number // same thing as above different syntax


//// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message);
}

log('Hello world')


//// Interfaces
// Interfaces cannot be used with primitives and/or unions
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number // ? denotes optional
}

const user1: UserInterface = {
    id: 1,
    name: 'Diksha'
}

// user1.id = 2 // Cannot assign to 'id' because it is a read-only property.

interface MathFunc {
    (x:number, y:number): number
}
// arrow functions
const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y
const mul: MathFunc = (x:number, y:number): number => x * y
const div: MathFunc = (x:number, y:number): number => x / y

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

//// Classes
class Person implements PersonInterface {
    id: number            // public by default
    name: string          // can be private, protected , public

    constructor(id: number, name: string) {
        this.id = id
        this.name = name    
    }
    
    register() {
        return `${this.name} is now registered`
    }
}

const diksha = new Person(1, 'Diksha')
const komal = new Person(2, 'Komal')

console.log(diksha, komal)
console.log(diksha.register())

// Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Rahul', 'Developer')
console.log(emp.name);
console.log(emp.register());


//// Generics
// function getArray( items: any[]): any[] {
//     return new Array().concat(items)
// }
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,4,5])
let strArray = getArray(['diksha','komal','pratik'])

// numArray.push('hello') // gives an error for generics
// strArray.push(3) // same here
numArray.push(3)