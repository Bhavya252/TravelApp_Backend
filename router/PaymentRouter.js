import express from "express";
import { createOrder } from "../controllers/paymentController.js";
import { verifyPayment } from "../controllers/Paymentverify.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);



export default router ;