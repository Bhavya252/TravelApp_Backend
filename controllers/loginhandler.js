import User from "../model/user.db.js";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';

   const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const decodedPassword = CryptoJS.AES.decrypt(
      existingUser.password,
      process.env.CRYPTO_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decodedPassword !== password) {
      return res.status(400).json({
        message: "invalid password",
      });
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    const { password: userPassword, ...rest } = existingUser._doc;

    return res.status(200).json({
      message: "logged in successfully",
      data: { ...rest, token },
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "unable to login",
    });
  }
};

export default loginHandler;

