import Record from "../models/record.model.js";
import ApiError from "../utils/ApiError.js";
import { totalRecords } from "./analytics.controller.js";


// create record
export const createRecord = async(req, res) => {
    if(!req.body.amount){
        throw new ApiError("Amount is required", 400)
    }
    const record = await Record.create({
        user:req.user._id,
        amount:req.body.amount,
        status:req.body.status
    });

    res.status(201).json({success:true, record})
}

// get user record
export const getMyRecords = async(req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page -1) *limit;

    const filter = {user: req.user._id};

    if(req.query.status){
        filter.status = req.query.status
    }

    const records = await Record.find(filter)
    .skip(skip)
    .limit(limit)
    .sort({createdAt:-1}) 

    const total = await Record.countDocuments(filter);

    res.status(200).json({
        success:true,
        page,
        totalPages:Math.ceil(total/limit),
        totalRecords:total,
        records
    })
}