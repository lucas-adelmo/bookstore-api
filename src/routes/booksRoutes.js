/* booksRoutes establish the routes used by verbs http and the methods to treat the requesitions
 e responses*/

import express from "express";
import bookController from "../controllers/booksController.js";

const router = express.Router();
// A router object is an isolated instance of middleware and routes. You can think of it as 
// a “mini-application,” capable only of performing middleware and routing functions. Once you’ve  
// created a router object, you can add middleware and HTTP method routes 
// (such as get, put, post, and so on) to it just like an application. 

router
    .get("/books", bookController.listBooks)
    .get("/books/search?", bookController.listBooksByFilter) 
    .get("/books/:id", bookController.getBookById)
    .post("/books", bookController.registerBook)
    .put("/books/:id", bookController.updateBook)
    .delete("/books/:id", bookController.deleteBook);

// The route "/books/search?" must come before "/books/:id". Otherwise the routes 
// gonna be confused with each other 

// The chaining is possible because both .get() and .post() methods return the router object, allowing 
// for method chaining. Each method call in the chain adds a specific route and associates it with 
// a corresponding controller function. The chaining syntax allows for a concise and readable way to 
// define multiple routes in a single code block. It does not imply that one method is inside the other.


export default router;