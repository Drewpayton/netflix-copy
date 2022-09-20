const express = require('express');
db = require('./config/connection');
const authRoute = require('./routes/auth')

const PORT = 2000
const app = express();

app.use(express.json())
app.use('/api/auth', authRoute)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
        })
})
