/* booksController implements the methods */

import Books from "../models/Book.js";

const bookController = {

    listBooks : async function(req, res){
        try {
            const query = await Books.find().populate("author")
            res.status(200).json(query);
        } catch(err){
            res.status(500).json(err)
            console.log(err)
        }
    },

    getBookById : async function(req, res){
        try {
            let {id} = req.params
            const book = await Books.findById(id).populate("author")
            res.status(200).json(book);
        } catch(err){
            res.status(400).json(err)
            console.log(err)
        }
    },

    registerBook : async function(req, res){
        try{
            const book = await new Books(req.body).populate("author"); //Creating a document from Books model
            book.save()
            res.status(201).send(book)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    updateBook: async function(req, res){
        try{
            let {id} = req.params
            await Books.findByIdAndUpdate(id, {$set: req.body}).populate("author")
            res.status(201).send(`The operation was a success`)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    deleteBook: async function(req, res){
        try{
            let {id} = req.params
            await Books.findByIdAndDelete(id).populate("author")
            res.status(201).send(`The operation was a success`)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    listBooksByPublisher: async function(req,res){
        try{
            let {publishing} = req.query
            const query = await Books.find({"publishing": publishing})
            res.status(200).send(query)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    }

}

export default bookController;