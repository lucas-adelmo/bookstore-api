import express from "express";

const app = express()

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads
// A new body object containing the parsed data is populated on the request object after the middleware
app.use(express.json()) 

const books = [
    {id: 1, "title": "The Godfather"},
    {id: 2, "title": "Inception"},
    {id: 3, "title": "Spider Man"}
]

app.get('/', (req, res) => {
    res.status(200).send("Hello world");
})

app.get('/books', (req, res) => {
    res.status(200).json(books);
})

app.get('/books/:id', (req, res) =>{
    let index = getBook(req.params.id)
    res.json(books[index])
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send("Registration completed successfully")
})

app.put('/books/:id', (req, res) =>{
    let index = getBook(req.params.id)
    books[index].title = req.body.title
    res.json(books)
})

app.delete('/books/:id', (req, res) =>{
    let {id} = req.params //destructuring assignment
    let index = getBook(id)
    res.send(`The book "${books[index].title}" has been removed`)
    books.splice(index,1)
})

function getBook(id){
    return books.findIndex(element => element.id == id)
}

export default app;