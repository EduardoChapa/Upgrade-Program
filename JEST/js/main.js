function add(num1, num2) {
    return num1 + num2;
}

function returnNull() {
    return null;
}

function returnFalsy() {
    return 0;
}

function returnUndefined() {
    return undefined;
}

function returnObject() {
    return {
        name: 'John',
        age: 34
    }
}

let functions = {
    add: add,
    null: returnNull,
    falsy: returnFalsy,
    undefined: returnUndefined,
    returnObject: returnObject
}

module.exports = functions;