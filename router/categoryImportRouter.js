import express from "express";
import Category from "../model/category.db.js";
import categories from "../data/category.js";


const router = express.Router();

router.route("/")
    .post( async(req,res)=>{
    try{
        await Category.deleteMany({});
        const categoryData = await Category.insertMany(categories.data);
        res.status(200).json({message: "categories imported successfully", data: categoryData})

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "unable to import categories to database"})
    }
})

export default router;