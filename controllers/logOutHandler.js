const logOutHandler = (req,res) => {
    res.clearCookie("token",{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // true in production
        sameSite: "Strict",
    });
    res.status(200).json({message: "logged out successfully"})
}
export default logOutHandler;