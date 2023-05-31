import customError from "./scratchError.js";

function validationError(err){
    const errMessage = Object.values(err.errors)
        .map((err)=>err.message)
        .join("; ");
        
    return customError(`Validation error: ${errMessage}`, 400);
}

export default validationError;