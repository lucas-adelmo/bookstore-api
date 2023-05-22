import express from "express";
import books from "./models/Book.js";
import connectionAccess from "./config/dbConnect.js";
import routes from "./routes/index.js";

connectionAccess()
const app = express()
routes(app)

export default app;

// In Express, the app object represents the application and provides a way to define routes and middleware. 
// When you export app using export default app, you are exporting the entire Express application object.
// The app.get, app.post, app.put, and app.delete methods are part of the app object itself. 
// These methods allow you to define routes and handle HTTP requests for those routes.
// When you import the app object in your first file (import app from "./src/app.js"), you are importing 
// the entire app object, including all the defined routes and middleware. 
// Therefore, you have access to all the routes defined in the app object, such as app.get('/books/:id'), 
// app.post('/books/'), etc., even though you only exported the app object itself.
// So, when you execute the first file using Node.js, you can access the app.get method because it is 
// part of the imported app object.