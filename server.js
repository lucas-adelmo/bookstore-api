import app from "./src/app.js" 
const port = process.env.PORT || 3000;

// many times we will upload this application to Heroku or to another server that is not a local server 
// and the port it will be listening on will be different, we will make a conditional adding "process.env.PORT" .

// The app.listen() method creates a listener server on the specified port or path.
app.listen((port), ()=>{
    console.log(`The server are listening on http://localhost:${port}`)
});


// When the node API is running you cannot make file changes. However, you can use the package called 
// "nodemon" which is a tool that helps you develop Node.js-based applications by automatically restarting
// the Node application when file changes are detected in the directory.
// Alternatively, you can run node.js in 'watch' mode (using the command node --watch).
// This is similar to nodemon, but now it is a built-in Node.js native module.