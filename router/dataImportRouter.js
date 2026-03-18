import express from 'express';
import Hotel from '../model/hotel.db.js';
import hotels from "../data/hotel.js";

const router = express.Router();

router.route("/")
.post(async(req,res)=>{
    try{
        await Hotel.deleteMany({})
        const HotelData = await Hotel.insertMany(hotels.data);
        res.status(200).json({message: "data imported successfully", data: HotelData})
        

    }
    catch(err){
        console.log(err);
        console.log("unable to import data to database");
        res.status(500).json({message: "unable to import data to database"})
    }
})

export default router ;