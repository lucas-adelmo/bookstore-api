import {Authors} from "../models/index.js";

const authorController = {

    listAuthors : async function(req, res, next){
        try {
            const query = await Authors.find();// It returns a Query obj. `query` is an instance of `Query`
            res.status(200).json(query);
        } catch(err){
            next(err);
        }
    },

    getAuthorById : async function(req, res, next){
        try {
            let {id} = req.params;
            const author = await Authors.findById(id);
            console.log(author);
            if (author ==! null){
                res.status(200).json(author);
            }else{
                res.status(404).send({message: "Author not founded."});
            }
        } catch(err){
            next(err);
        }
    },

    registerAuthor : async function(req, res, next){
        try{
            const author = new Authors(req.body); //Creating a document from author model
            await author.save();
            res.status(201).send(author);
        }catch(err){
            next(err);
        }
    },

    updateAuthor: async function(req, res, next){
        try{
            let {id} = req.params;
            await Authors.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send("The operation was a success");
        }catch(err){
            next(err);
        }
    },

    deleteAuthor: async function(req, res, next){
        try{
            let {id} = req.params;
            await Authors.findByIdAndDelete(id);
            res.status(200).send("The operation was a success");
        }catch(err){
            next(err);
        }
    }

};

export default authorController;






