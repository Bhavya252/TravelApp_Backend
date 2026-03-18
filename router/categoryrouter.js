import express from 'express';
import CategoryHandler from '../controllers/CategoryHandler.js';


const router = express.Router();

router.route("/")
       .get( CategoryHandler)

export default router;