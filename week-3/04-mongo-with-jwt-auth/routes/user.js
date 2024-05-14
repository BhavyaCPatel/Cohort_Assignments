const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    let newUser = req.body.username;
    let password = req.body.password;

    User.create({username: newUser, password:password})

    res.json({
        message: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const response = await User.create({
        username: username,
        password: password,
    })

    if (response) {
        const signature = jwt.sign({
            username
        }, jwtPassword);
        res.json({
            token: signature,
        })
    } else {
        res.json({
            error: "Invalid credentials"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const course = await Course.find()
    res.json({
        courses: course
    })
    return course; 
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
}); 


router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    const username = req.username;
    
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: username
    });
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    
    res.json({
        courses: courses
    })

});

module.exports = router