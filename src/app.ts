import express from 'express';

import User from './model/user';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    res.send('Aloha crew mates !!');
    const testUser = new User({
        username: "test",
        password: "red12345",
        name: "test"
    });

    const user = await testUser.save();
    console.log(user);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})