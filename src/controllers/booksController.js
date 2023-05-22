/* booksController implements the methods */

import { Schema } from "mongoose";
import books from "../models/Book.js";

const bookController = {

    listBooks : async function(req, res){
        try {
            const query = await books.find()// It returns a Query obj. `query` is an instance of `Query`
            res.status(200).json(query);
        } catch(err){
            res.status(500).json(err)
            console.log(err)
        }
    },

    getBookById : async function(req, res){
        try {
            let {id} = req.params
            const book = await books.findById(id)
            res.status(200).json(book);
        } catch(err){
            res.status(400).json(err)
            console.log(err)
        }
    },

    registerBook : async function(req, res){
        try{
            const book = new books(req.body); //Creating a document from books model
            await book.save()
            res.status(201).send(book)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    updateBook: async function(req, res){
        try{
            let {id} = req.params
            await books.findByIdAndUpdate(id, {$set: req.body})
            res.status(201).send(`The operation was a success`)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    deleteBook: async function(req, res){
        try{
            let {id} = req.params
            await books.findByIdAndDelete(id)
            res.status(201).send(`The operation was a success`)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    }

}

export default bookController;