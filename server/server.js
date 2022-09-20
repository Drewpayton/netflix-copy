const express = require('express');
db = require('./config/connection')

const PORT = 2000
const app = express();

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
        })
})
