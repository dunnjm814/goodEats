const bcrypt = require('bcryptjs');
const asyncHandler = require("./routes/utils");

async function createUsers() {
    let password = await bcrypt.hash('Password1!', 10);
    let users = [{
            userName: 'CB',
            email: 'cb@gmail.com',
            hashPass: password,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: 'Taten',
            email: 'taten@gmail.com',
            hashPass: password,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: 'Jesse',
            email: 'jesse@gmail.com',
            hashPass: password,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: 'Jason',
            email: 'jaso@gmail.com',
            hashPass: password,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: 'demo',
            email: 'demo@gmail.com',
            hashPass: password,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]

    for (let i = 6; i < 11; i++) {
        let newUser = {
            userName: `user${i}`,
            email: `user${i}@gmail.com`,
            hashPass: await bcrypt.hash('userPassword', 10),
            createdAt: new Date(),
            updatedAt: new Date()

        }

        users.push(newUser);
    }

    return users;
}

module.exports = createUsers;


// let userArr;
// createUsers().then((users) => {
//     userArr = users;
//     console.log(userArr);
// });
