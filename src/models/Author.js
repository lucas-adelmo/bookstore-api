import mongoose from "mongoose";

const {Schema} = mongoose;

const authorSchema = new Schema(
    {
        id:{type:String},
        name:{
            type:String, 
            required:[true, "The author's name is required"]
        },
        nationality:{type:String, required:false}
    },
    {
        versionKey: false
    }
);

const Authors = mongoose.model("authors",authorSchema);

export default Authors;