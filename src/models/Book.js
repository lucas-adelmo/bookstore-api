import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const {Schema} = mongoose;

// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const bookSchema = new Schema(
    {
        id:{type: String}, //The SchemaType here is String
        title:{
            type: String, 
            required:[true, "title is required"]
        },
        author:[
            {
                type: Schema.Types.ObjectId, 
                ref: "authors", 
                required: [true, "author's id is required"],
                autopopulate: true
            }
        ],
        publishing:{
            type: String, 
            required:[true, "The publishing is required"],
        },
        numberPages:{
            type: Number,
            // min: [10, "the pag number is between 10 and 5000. You typed {VALUE}"],
            // max:[5000, "the pag number is between 10 and 5000. You typed {VALUE}"] 
            validate: {
                validator: (value) => {
                    return value>=10 && value<=5000;
                },
                message: "the pag number is between 10 and 5000. You typed {VALUE}"
            }
        }
    }
);

// A model is a class with which we construct documents. In this case, each document will be a book 
// with properties and behaviors as declared in our schema.
bookSchema.plugin(autopopulate);
const Books = mongoose.model("books", bookSchema);

export default Books;