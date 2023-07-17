import customError from "./scratchError.js";

function badRequest(){
    return customError("Bad request (Client Error). Possible reasons: malformed request syntax, invalid request message framing, or deceptive request routing.", 400);
} 

export default badRequest;