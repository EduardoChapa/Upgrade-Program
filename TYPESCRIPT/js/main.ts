//Test of the code in the video
window.onload = function() {
    var button = document.getElementById('submit');
    var num1 = document.getElementById('num1')! as HTMLInputElement;
    var num2 = document.getElementById('num2')! as HTMLInputElement;
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        var result: number = +num1.value + +num2.value;
        console.log(result) 
    });
}

//Basic Types
let num: number = 10;
let str: string = 'This is a string';
let bol: boolean = true;

//Arrays
let nums: number[] = [1, 2, 3];

//Tuples
let numstr: [number, string];
numstr = [10, 'hello'];

//Enums
enum Color {
    Red,
    Green,
    Blue
}

//With values
enum Colors {
    Red = 1,
    Green = 2,
    Blue = 3
}

let color: Color = Color.Red;

//Union Types
let union: string | number;

union = 10;
union = '10';

//Literal Types
let literal: 'a-number' | 'a-string';

literal = 'a-number';

//Type Aliases
type NumberOrString = number | string;
type LiteralAlias = 'a-number' | 'a-string';

let alias1: NumberOrString = 10;
let alias2: LiteralAlias = 'a-string';

//Functions 
function add(num1: number, num2: number): number {
    return num1 + num2;
}

//Function Types
let addNumbers: (a: number, b: number) => number;
addNumbers = add;

//Function Callbacks
function addWithCallback(num1: number, num2: number, func: (a: number, b: number) => number): void {
    let result = func(num1, num2);
    console.log(result);
}

//Unknown Type
let what: unknown;
what = 90;
what = '';

//Never Type
function neverTest(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

function infiniteLoop(): never {
    while(true) {
        console.log('This function never ends');
    }
}