import app from "./src/app.js"; // This app starts a server 

const port = process.env.PORT || 3000;

// Many times, we might upload this application to Heroku or another server that is not a local server. 
// The port it will be listening on might be different. 
// Therefore, we can make a conditional statement by adding "process.env.PORT" for flexibility.

// The app.listen() method creates a listener server on the specified port or path.
app.listen((port), () => {
    console.log(`The server are listening on http://localhost:${port}`);
});

// When the node API is running you cannot make file changes. However, you can use the package called 
// "nodemon" which is a tool that helps you to develop Node.js-based applications by automatically restarting
// the Node application when file changes are detected in the directory.
// Alternatively, you can run node.js in 'watch' mode (using the command node --watch).
// This is similar to nodemon, but now it is a built-in Node.js native module.