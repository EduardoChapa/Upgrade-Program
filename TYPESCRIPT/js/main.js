//Test of the code in the video
window.onload = function () {
    var button = document.getElementById('submit');
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var result = +num1.value + +num2.value;
        console.log(result);
    });
};
//Basic Types
var num = 10;
var str = 'This is a string';
var bol = true;
//Arrays
var nums = [1, 2, 3];
//Tuples
var numstr;
numstr = [10, 'hello'];
//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//With values
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var color = Color.Red;
//Union Types
var union;
union = 10;
union = '10';
//Literal Types
var literal;
literal = 'a-number';
var alias1 = 10;
var alias2 = 'a-string';
//Functions 
function add(num1, num2) {
    return num1 + num2;
}
//Function Types
var addNumbers;
addNumbers = add;
//Function Callbacks
function addWithCallback(num1, num2, func) {
    var result = func(num1, num2);
    console.log(result);
}
//Unknown Type
var what;
what = 90;
what = '';
//Never Type
function neverTest(message, code) {
    throw { message: message, errorCode: code };
}
