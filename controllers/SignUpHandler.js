import User from "../model/user.db.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const SignUpHandler = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

    // ✅ Validate input
    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check existing user
    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingUser) {
      return res.status(422).json({ message: "User already exists" });
    }

    // ❗ Check if secret key exists
    if (!process.env.CRYPTO_SECRET_KEY) {
      throw new Error("CRYPTO_SECRET_KEY missing in env");
    }

    // ✅ Encrypt password
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.CRYPTO_SECRET_KEY
    ).toString();

    const newUser = new User({
      name,
      email,
      password: encryptedPassword,
      mobile,
    });

    const savedUser = await newUser.save();

    // ❗ Check JWT secret
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY missing in env");
    }

    // ✅ Generate token
    const token = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // ✅ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    // ✅ Remove password safely
    const { password: _, ...userData } = savedUser._doc;

    res.status(201).json({
      message: "User created successfully",
      data: { ...userData, token },
    });

  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ message: err.message || "Unable to sign up" });
  }
};

export default SignUpHandler;