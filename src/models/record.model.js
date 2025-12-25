import mongoose from "mongoose";




const recordSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'active'
    }
}, {timestamps:true})


const Record = mongoose.model("Record", recordSchema)

export default Record