import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorRoutes.js";

const routes = (app) => {
    app.get('/',(req,res)=>{
        res.status(200).send("Hello world");
    })

    app.use(
        express.json(),
        books,
        authors
    )
}

// The statement express.json() is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads.
// A new body object containing the parsed data is populated on the request object after the middleware

export default routes;