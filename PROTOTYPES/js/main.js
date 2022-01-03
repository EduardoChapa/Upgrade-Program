function Person(name, age) {
    this.name = {
        first: name.first,
        last: name.last
    };
    this.age = age;
}

//Add method to the prototype object of Person
Person.prototype.printAge = printAge;
Person.prototype.printName = printName;

function printName() {
    console.log(this.name);
}

function printAge() {
    console.log(this.age);
}

var person = new Person({ first: 'John', last: 'McJohn' }, 45);

console.log(Person.prototype);

console.log(person.__proto__);

//Create object from person instance
var person2 = new person.constructor({ first: 'Alice', last: 'McAlice' }, 30);

console.log(person2);

//Inheritance
function Worker(name, age, company) {
    Person.call(this, name, age);
    this.company = company;
}
Worker.prototype = Object.create(Person.prototype);
Object.defineProperty(Worker.prototype, 'constructor', {
    value: Worker,
    enumerable: false,
    writable: true
});

var worker = new Worker({ first: 'Ana', last: 'McAna' }, 25, 'Atos');

console.log(worker);