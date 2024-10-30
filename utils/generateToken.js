import jwt from "jsonwebtoken";

const generateToken = async (res, userId) => {
  const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;
