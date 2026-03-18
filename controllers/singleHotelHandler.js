import Hotel from "../model/hotel.db.js";

const singleHotelHandler = async(req,res) => {
    try{

        const hotelId = req.params.hotelId;
        const hotel = await Hotel.findById(hotelId);

        if(!hotel){
            return res.status(404).json({message: "hotel not found"});
        }

        res.status(200).json({message: "hotel details fetched successfully", data: hotel});
    }
    catch(err){
        console.log(err);  
        res.status(500).json({message: "unable to fetch hotel details"});
    }
}
export default singleHotelHandler;