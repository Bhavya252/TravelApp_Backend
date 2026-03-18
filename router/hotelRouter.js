import express from 'express';
import Hotel from '../model/hotel.db.js';

const router = express.Router();

router.route("/")
       .get( async(req,res) =>{
        try{

            const hotelcategory = req.query.category;

            let hotel;
            if(hotelcategory){
                hotel = await Hotel.find({category: hotelcategory});
            }
            else{
                hotel = await Hotel.find({});
            }

            res.status(200).json({message: "hotels fetched successfully", data: hotel});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
       })

export default router;