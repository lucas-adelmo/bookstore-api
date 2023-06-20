import notFound from "../err/notFound.js";

function error404Handling(req,res,next){
    const error404 = notFound();
    next(error404);
}

export default error404Handling;