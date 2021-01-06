const bcrypt = require('bcryptjs');
const asyncHandler = require("./routes/utils");

async function createUsers(){
    let password = await bcrypt.hash('password', 10);
    let users = [
        {
            username: 'CB',
            emailAddress: 'cb@gmail.com',
            hashedPassword: password
        },
        {
            username: 'Taten',
            emailAddress: 'taten@gmail.com',
            hashedPassword: password
        },
        {
            username: 'Jesse',
            emailAddress: 'jesse@gmail.com',
            hashedPassword: password
        },
        {
            username: 'Jason',
            emailAddress: 'jaso@gmail.com',
            hashedPassword: password
        },
        {
            username: 'demo',
            emailAddress: 'demo@gmail.com',
            hashedPassword: password
        }
    ]
   
    for(let i = 6; i < 11; i++){
        let newUser = {
            username: `user${i}`,
            emailAddress: `user${i}@gmail.com`,
            hashedPassword: await bcrypt.hash('userPassword', 10)
        }
        
        users.push(newUser);
    }

    return users;
}


// let userArr;
// createUsers().then((users) => {
//     userArr = users;
//     console.log(userArr);
// });