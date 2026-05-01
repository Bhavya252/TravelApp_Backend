import express from 'express';
import CategoryHandler from '../controllers/categoryHandler.js';


const router = express.Router();

router.route("/")
       .get( CategoryHandler)

export default router;