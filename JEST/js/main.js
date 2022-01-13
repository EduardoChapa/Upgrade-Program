function add(num1, num2) {
    return num1 + num2;
}

function returnNull() {
    return null;
}

function returnFalsy(val) {
    return val;
}

let functions = {
    add: add,
    null: returnNull,
    falsy: returnFalsy
}

module.exports = functions;