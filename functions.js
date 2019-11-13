// const axios = require('axios');
// const url = 'https://jsonplaceholder.typicode.com/users/1';

const functions = { 
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad'}
        user['lastname'] = 'Traversy';
        return user;
    },
    // fetchUser: () => 
    //     axios
    //         .get(url)
    //         .then(res => res.data)
    //         .catch(err => 'error')
};

module.exports = functions;