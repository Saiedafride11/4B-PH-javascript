// Using object literal
const student = {name: 'shakib', job:'cricketer'};
console.log(student)

// constructor
const person  = new Object();
console.log(person);

// create object
// const human = Object.create(null)
const student1 = {name: 'akash', job:'army'};
const human = Object.create(student1)
console.log(human.job);

// class Object
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('shakib', 12)
console.log(peop)

// function object
function Manus(name){
    this.name = name;
}
const man = new Manus('jamal');
console.log(man)