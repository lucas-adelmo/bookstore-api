import error404Handling from "./error404Handling.js";

// eslint-disable-next-line no-unused-vars
async function toPage(req,res,next) {

    const {result} = req;

    let {limit = 5, page = 1, ordenation = "title:-1"} = req.query;
    let [sortBy, order] = ordenation.split(":"); 
    limit = parseInt(limit);
    page = parseInt(page);

    const query = await result
        .sort({[sortBy]: order})
        .skip((page-1) * limit)
        .limit(limit);

    if (limit>0 && page>0 && query.length!==0){
        res.status(200).json(query);
    } else {
        error404Handling(req,res,next);
    }

}

export default toPage;