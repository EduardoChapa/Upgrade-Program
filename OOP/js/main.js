//Object basics
const employee = {
    name: 'John',
    age: 45,
    salary : 50000,
    city: 'NYC',
    printName: function() {
        console.log(this.name);
    }
}

const employee2 = {}
employee2.name = 'Alice';
employee2.age = 22;
employee2.salary = 50000;
employee2.city = 'NYC';

//Creating object from a function
function Employee(name, age, salary, city) {
    var newObject = {}
    newObject.name = name;
    newObject.age = age;
    newObject.salary = salary;
    newObject.city = city;
    return newObject;
}

//Creating object from a constructor
function Employee(name, age, salary, city) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.city = city;
}

//Prototypes
Employee.prototype.boss = 'John'
console.log(Employee.prototype);


//var emp = new Employee('Anne', 24, 40000, 'NYC')