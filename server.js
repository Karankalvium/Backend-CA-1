const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Server is running!!!')
});

app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;

    const usernameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!usernameRegex.test(username)) {
        res.status(400).send('Invalid username format.');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).send('Invalid email format.');
        }
    }
}
);

const PORT = 3000;
app.listen(PORT, () => 
console.log(`Server running on http://localhost:${PORT}`));