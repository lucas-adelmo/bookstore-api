import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucasadelmo2:Qm4iBtLKvqlth4Ym@bookstore.zqukrqh.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection

export default db;