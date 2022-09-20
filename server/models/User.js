const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        defualt: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = model('User', UserSchema);

module.exports = User