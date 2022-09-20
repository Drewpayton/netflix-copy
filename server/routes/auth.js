const router = require('express').Router()
const {User, Movie, List} = require('../models')
const bycrpt = require('bcrypt')

router.post("/register", async (req, res) => {

    const salt = await bycrpt.genSalt()
    const hashedPassword = await bycrpt.hash(req.body.password, salt)
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    })

    try {
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email})
        if(!user) {
            res.status(401).json({ msg: "Wrong username or password"})
        }

        const match = await bycrpt.compare(req.body.password , user.password)


        if (match) {
            const { password, ...info } = user._doc;
            res.status(200).json(info)
        } else {
            res.status(401).json({ msg: "Wrong Username or Password"})
        }
        
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router