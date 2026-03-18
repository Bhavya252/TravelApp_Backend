import express from "express";
import { addToWishlistHandler, getWishlistHandler, deleteFromWishlistHandler } from "../controllers/wishlistController.js";
import authVerify from "../middleware/authVerify.js";
const router = express.Router();

router.route("/") 
    .get(authVerify,getWishlistHandler);

router.route("/:hotelId")
    .delete(authVerify,deleteFromWishlistHandler);

router.route("/:hotelId")
    .post(authVerify,addToWishlistHandler);

export default router;