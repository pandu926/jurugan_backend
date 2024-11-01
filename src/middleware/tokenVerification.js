require("dotenv");
const jwt = require("jsonwebtoken");

const tokenVerification = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.send("mising");
  }

  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.auth = user;
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
};

module.exports = tokenVerification;
