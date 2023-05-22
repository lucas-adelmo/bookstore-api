import mongoose from "mongoose";

const {Schema} = mongoose;

// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const bookSchema = new Schema(
    {
        id:{type: String},
        title:{type: String, required:true},
        author:{type: String, required:true},
        publishing:{type: String, required:true},
        numberOfPages:{type: Number}
    }
);

// A model is a class with which we construct documents. In this case, each document will be a book 
// with properties and behaviors as declared in our schema.

const books = mongoose.model('books', bookSchema)

export default books;