import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorManipulator(err,req,res,next){
    if (err instanceof mongoose.Error.CastError){
        res.status(400).send({message: "Bad request"});
    }else{
        res.status(500).send({message: "Operation failed"});
        throw err;
    }
}

export default errorManipulator;
