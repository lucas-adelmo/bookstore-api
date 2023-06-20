import mongoose from "mongoose";
import serverError from "../err/serverError.js";
import badRequest from "../err/badRequest.js";
import validationError from "../err/validationError.js";
import notFound from "../err/notFound.js";

// eslint-disable-next-line no-unused-vars
function errorHandling(err,req,res,next){
    if (err instanceof mongoose.Error.CastError){
        badRequest().sendResponse(res);
    }else if (err instanceof mongoose.Error.ValidationError){   
        validationError(err).sendResponse(res);
    }else if (err.status == 404){
        notFound().sendResponse(res);
    }else{
        serverError().sendResponse(res);
    }
}

export default errorHandling;
