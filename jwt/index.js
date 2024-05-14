const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    for (const user of ALL_USERS) {
        if (user.username === username && user.password === password) {
            console.log(user.username, user.password, username, password)
            return true; 
        }
    }
    return false;
}

app.use(express.json())

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        // Filter out the user associated with the decoded token
        const otherUsers = ALL_USERS.filter(user => user.username !== username);

        // Return the list of other users
        return res.json(otherUsers);
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});


app.listen(3000)