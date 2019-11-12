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

// less than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});