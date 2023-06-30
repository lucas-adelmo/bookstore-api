/* booksController implements the methods (middlewares specifcally) */

import {Books, Authors} from "../models/index.js";

const bookController = {

    listBooks : async function(req, res, next){
        try {

            let {limit = 5, page = 1, sortBy = "title", order = 1} = req.query;
            limit = parseInt(limit);
            page = parseInt(page);
            order = parseInt(order);

            if (limit>0 && page>0){
                const query = await Books.find()
                    .sort({[sortBy]: order})
                    .skip((page-1) * limit)
                    .limit(limit)
                    .populate("author");
                res.status(200).json(query);
            } else {
                res.send({message: "ValidationError", status: 400});
            }
        } catch(err){
            next(err);
        }
    },

    getBookById : async function(req, res, next){
        try {
            let {id} = req.params;
            const book = await Books.findById(id).populate("author");
            if (book !== null){
                res.status(200).json(book);
            }else{
                res.status(404).send({message: "Book not founded."});
            }
        } catch(err){
            next(err);
        }
    },

    registerBook : async function(req, res, next){
        try{
            const book = await new Books(req.body).populate("author"); //Creating a document from Books model
            await book.save();
            res.status(201).send(book);
        }catch(err){
            next(err);
        }
    },

    updateBook: async function(req, res, next){
        try{
            let {id} = req.params;
            await Books.findByIdAndUpdate(id, {$set: req.body}).populate("author");
            res.status(200).send("The operation was a success");
        }catch(err){
            next(err);
        }
    },

    deleteBook: async function(req, res, next){
        try{
            let {id} = req.params;
            await Books.findByIdAndDelete(id).populate("author");
            res.status(200).send("The operation was a success");
        }catch(err){
            next(err);
        }
    },

    listBooksByFilter: async function(req,res, next){
        try{
            let {publishing, title, minPages, maxPages, authorName} = req.query;

            const regex = new RegExp(title, "i");

            let search = {};

            if (title) search.title = regex;
            if (publishing) search.publishing = {$regex: publishing, $options: "i"};
            
            if (minPages) search.numberPages = {$gte: minPages};
            if (maxPages) search.numberPages = {$lte: maxPages};
            if (minPages && maxPages) search.numberPages = {$gte: minPages, $lte: maxPages};

            if (authorName) {
                const author = await Authors.findOne({ name: {$regex: authorName}});
                if (author !== null){
                    search.author = author._id;
                } else {
                    search = null;
                }
            }

            if (search !== null){
                const query = await Books.find(search).populate("author");
                res.status(200).send(query);
            }else {
                res.status(200).send([]);
            }

        }catch(err){
            next(err);
        }
    }

};

export default bookController;