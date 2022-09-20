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
})

module.exports = router