const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/netflixcopy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("database has connected"))
.catch((err) => console.log(err));

module.exports = mongoose.connection;
