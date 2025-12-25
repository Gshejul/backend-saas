import express from "express"
import { protect } from "../middlewares/auth.middleware.js"
import { createRecord, getMyRecords } from "../controllers/record.controller.js";


const router = express.Router();


router.post('/', protect, createRecord)
router.get('/my', protect, getMyRecords)




export default router