
import Wishlist from "../model/wishlist.db.js";

const addToWishlistHandler = async(req,res)=>{
    try{

        const userId = req.user;
        const hotelId = req.params.hotelId;

        const existing =await Wishlist.findOne({userId: userId, hotelId: hotelId});
        if(existing){
            return res.status(400).json({message: "hotel already in your wishlist"});
        }

        const newWishlistItem = new Wishlist({userId, hotelId});
        await newWishlistItem.save();

        res.status(201).json({message: "hotel added to your wishlist"});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "unable to add hotel to your wishlist"});
    }
};

const getWishlistHandler = async(req,res)=>{
    try{

        const userId = req.user;
        const wishlistItems = await Wishlist.find({userId: userId}).populate("hotelId");
        res.status(200).json({message: "wishlist fetched successfully", data: wishlistItems});

    }catch(err){
        console.log(err);
        res.status(500).json({message: "unable to fetch wishlist"});
    }
};

const deleteFromWishlistHandler = async(req,res)=>{
    try{
        const userId = req.user;
        const hotelId = req.params.hotelId;

        const existing =await Wishlist.findOne({userId: userId, hotelId: hotelId});
        if(!existing){
            return res.status(400).json({message: "hotel not found in your wishlist"});
        }
        await Wishlist.deleteOne({userId: userId, hotelId: hotelId});
        res.status(200).json({message: "hotel removed from your wishlist"});

    } catch(err){
        console.log(err);
        res.status(500).json({message: "unable to delete hotel from wishlist"});
    }
};

export { addToWishlistHandler, getWishlistHandler, deleteFromWishlistHandler};