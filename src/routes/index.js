import express from "express";
import { default as customBooksRouter } from "./booksRoutes.js";
import { default as customAuthorsRouter } from "./authorRoutes.js";

const routes = (app) => {
    app.get("/",(req,res)=>{
        res.status(200).send("Welcome to my Book Store");
    });

    app.use(
        express.json(), //native middleware from express
        customBooksRouter, //routers are used as middlewares
        customAuthorsRouter
    );
};

// The statement express.json() is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads.
// A new body object containing the parsed data is populated on the request object after the middleware

export default routes;