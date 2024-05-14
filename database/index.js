const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(process.env.MONGODB_URI)
.then(console.log("Database Connected"));

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());


app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ username: username });
    
    if (existingUser) {
        return res.status(403).json({
            msg: "User exist in db",
        });
    }

    const user = new User({
        name: name,
        username: username,
        password: password,
    });

    user.save()
    res.status(200).json({msg: 'User created successfully'})
});

// app.get("/users", function (req, res) {
//     const token = req.headers.authorization;
//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         // return a list of users other than this username from the database
//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
// });

app.listen(3000);