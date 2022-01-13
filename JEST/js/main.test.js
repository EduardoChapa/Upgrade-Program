let functions = require('./main');


//Will pass
test('Add two numbers', () => {
    expect(functions.add(1, 3)).toBe(4);
});
//Will fail
test('Add two numbers', () => {
    expect(functions.add(10, 40)).toBe(78);
});
//Will fail
test('Add two numbers', () => {
    expect(functions.add(20, 3)).toBe(23);
});
//Will pass
test('Must be null', () => {
    expect(functions.null()).toBeNull();
});

test('Must be falsy', () => {
    expect(functions.falsy()).toBeFalsy();
});

test('Must be an objet with name "John" and age 32', () => {
    expect(functions.returnObject()).toEqual({name: 'John', age: 34})
});