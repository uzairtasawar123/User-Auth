const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const Token = (user) => {
  return JWT.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET
  );
};

module.exports = Token;
