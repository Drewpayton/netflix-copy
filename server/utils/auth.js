const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function (req, res, next) {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) res.status(403).json({ msg: "Token is invalid" });
        req.user = data;
        next();
      });
    } else {
      return res.status(401).json({ msg: "Not authenticated" });
    }
  },
};
