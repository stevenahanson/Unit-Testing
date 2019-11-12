const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});


// toBeNull
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('user should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Brad', 
        lastname: 'Traversy'
    });
});

