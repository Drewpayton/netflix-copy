const express = require('express');
db = require('./config/connection');
const authRoute = require('./routes/auth')
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
const listRoute = require("./routes/list");

const PORT = 2000;
const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);



db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
        })
})
