import Authors from "../models/Author.js";

const authorController = {

    listAuthors : async function(req, res){
        try {
            const query = await Authors.find()// It returns a Query obj. `query` is an instance of `Query`
            res.status(200).json(query);
        } catch(err){
            res.status(500).json(err)
            console.log(err)
        }
    },

    getAuthorById : async function(req, res){
        try {
            let {id} = req.params
            const author = await Authors.findById(id)
            res.status(200).json(author);
        } catch(err){
            res.status(400).json(err)
            console.log(err)
        }
    },

    registerAuthor : async function(req, res){
        try{
            const author = new Authors(req.body); //Creating a document from author model
            await author.save()
            res.status(201).send(author)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    updateAuthor: async function(req, res){
        try{
            let {id} = req.params
            await Authors.findByIdAndUpdate(id, {$set: req.body})
            res.status(201).send(`The operation was a success`)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    },

    deleteAuthor: async function(req, res){
        try{
            let {id} = req.params
            await Authors.findByIdAndDelete(id)
            res.status(201).send(`The operation was a success`)
        }catch(err){
            res.status(500).send(`Operation failed`)
            throw err
        }
    }

}

export default authorController;