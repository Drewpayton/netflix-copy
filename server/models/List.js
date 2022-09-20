const { Schema, model } = require('mongoose')

const ListSchema = new Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
    },
    genre: {
        type: String,
    },
    content: {
         type:Array
    }
});

const List = model('List', ListSchema);

module.exports = List