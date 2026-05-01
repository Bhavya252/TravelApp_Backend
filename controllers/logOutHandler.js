const logOutHandler = (req,res) => {
    res.clearCookie("token",{
        httpOnly: true,
        secure: true,        // MUST for HTTPS (Vercel + Railway)
        sameSite: "none", 
    });
   
    res.status(200).json({message: "logged out successfully"})
}
export default logOutHandler;