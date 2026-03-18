import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
    },
    {
        timestamps: true,
    }
);

const Wishlist = mongoose.model.Wishlist || mongoose.model("Wishlist", WishlistSchema);
export default Wishlist;