/* booksController implements the methods (middlewares specifcally) */

import {Books} from "../models/index.js";

const bookController = {

    listBooks : async function(req, res, next){
        try {
            const query = await Books.find().populate("author");
            res.status(200).json(query);
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
            let {publishing, title} = req.query;
            const query = await Books.find({
                "publishing": publishing,
                "title": title
            });
            res.status(200).send(query);
        }catch(err){
            next(err);
        }
    }

};

export default bookController;