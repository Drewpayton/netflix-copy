const { Schema, model } = require('mongoose')

const MovieSchema = new Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    imgTitle: {
        type: String,
    },
    imgSm: {
        type: String,
    },
    trailer: {
        type: String,
    },
    video: {
        type: String,
    },
    year: {
        type: String,
    },
    limit: {
        type: Number,
    },
    genre: {
        type: String,
    },
    isSeries: {
        type: Boolean,
        defualt: false
    },
});

const Movie = model('Movie', MovieSchema);

module.exports = Movie