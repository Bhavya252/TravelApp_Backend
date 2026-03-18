import User from "../model/user.db.js";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';

const SignUpHandler = async (req,res) =>{
   try{

     const{name , email, password,mobile} = req.body;

    let existingUser;

    existingUser = await User.findOne({
        $or: [
        { email: email },
        { mobile: mobile }
      ]
    });

    if(existingUser){
        return res.status(422).json({message: "user already exists"});
    }

    const newUser = new User({
        name,
        email,
        password : CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString(),
        mobile
    });

    await newUser.save();
    const token = jwt.sign({id: newUser._id},process.env.JWT_SECRET_KEY,{ expiresIn :"7d"});
    res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true in production
    sameSite: "Strict",
    });

    const {password:userPassword, ...rest} = newUser._doc;
    res.status(201).json({message: "user created successfully", data: {...rest, token}});
   }
   catch(err){
    console.log(err);
    res.status(500).json({message: "unable to sign up"})
   }


}

export default SignUpHandler;