import express from "express";
import singleHotelHandler from "../controllers/singleHotelHandler.js";


const router = express.Router();

router.route("/:hotelId")
    .get(singleHotelHandler);

export default router;