import User from "../models/user.model.js";
import Record from "../models/record.model.js";



export const totalUsers = async(req, res) => {
    const count = await User.countDocuments();
    res.json({totalUsers:count})
}


export const totalRecords = async(req, res) => {
    const count = await User.countDocuments();
    res.json({totalRecords:count})
}


export const totalRevenue = async(req, res) => {
    const revenue = await Record.aggregate([
        {$match:{ status : 'active'}},
        {$group: {_id:null, total:{$sum:"$amount"}}}
    ]);

    res.json({ totalRevenue : revenue[0]?.total || 0 })
}