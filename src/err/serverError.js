import customError from "./scratchError.js";

function serverError(){
    return customError("Server error", 500);
}

export default serverError;