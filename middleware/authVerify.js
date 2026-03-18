import jwt from "jsonwebtoken";

const authVerify = (req, res, next) => {
    try{
          const token = req.cookies.token;
         
          if(!token){
               return res.status(401).json({message: "unauthorized"});
          }

          const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
          req.user = decoded.id;
          next();

    }
    catch(err){
     console.log(err);
     res.status(401).json({message: "unauthorized"});
    }

}
export default authVerify;