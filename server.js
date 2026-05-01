import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import hotelrouter from "./router/hotelRouter.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Razorpay from "razorpay";


const app = express();
app.use(cors({
    origin: "https://travel-app-frontend-nine-opal.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("/", cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cookieParser());


dotenv.config();
connectDB();

import categoryImportRouter from "./router/categoryImportRouter.js";
import dataImportRouter from "./router/dataImportRouter.js";
import authRouter from "./router/authRouter.js";
import categoryrouter from "./router/categoryrouter.js";
import wishlistRouter from "./router/wishlistRouter.js";
import singleHotelRouter from "./router/singleHotelRouter.js";
import payment from "./router/PaymentRouter.js"

import routeNotFound from "./middleware/routeNotFound.js";

app.use(express.json());
app.get("/",(req,res)=>{
    res.json({message: "Welcome to Travel App"});
})







app.use("/api/payment",payment);
app.use("/api/hotelData", dataImportRouter);
app.use("/api/categoryData", categoryImportRouter);
app.use("/api/hotels",hotelrouter);
app.use("/api/categories", categoryrouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);
app.use("/api/hotels",singleHotelRouter);


app.use(routeNotFound);


app.listen(5000, () => {
    console.log(`Server running on port  5000`);
});

