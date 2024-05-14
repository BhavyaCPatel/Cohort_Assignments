const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const bcrypt = require("bcryptjs")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const hashedPassword = await bcrypt.hash(password, 10)

    await Admin.create({
        username: username, 
        password: hashedPassword,
    })

    res.json({ 
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    if (username && password) {
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const newCourse = await Course.create({
        title: title,
        description: description,
        image_link: imageLink,
        price: price
    })
    console.log(newCourse._id)
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const course = await Course.find()
    res.json({
        courses: course
    })
    return course;

});

module.exports = router;