import customError from "./scratchError.js";

function notFound(){
    return customError("Page not found. Please verify the endpoind url", 404);
} 

export default notFound;