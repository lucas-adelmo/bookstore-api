import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

// Mongoose creates a default connection when you call mongoose.connect(). 
// You can access the default connection using mongoose.connection.

try{
    await mongoose.connect(process.env.CONNECTION_STRING_DB);
    console.log("Connected successfully to the database");
}catch(err){
    console.log("Database connection error",err); 
} 

export default function connectionAccess(){
    return mongoose.connection;
}

// Alternatively, you can use de following methods to treat errors:
// db.on("error", console.log.bind(console, "Connection error"))
// db.once("open", () => {
//     console.log('Connected successfully')
// })