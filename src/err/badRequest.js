import customError from "./scratchError.js";

function badRequest(){
    return customError("Bad request", 400);
} 

export default badRequest;