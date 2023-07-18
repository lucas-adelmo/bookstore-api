# Bookstore-api

## Introduction

Hey guys, I'm Lucas.

This API is a simple bookstore to exercise the basic concepts of the Express framework. 

The idea is for a client to work with CRUD operations linked to a server that maintains a collection of books connected to a remote database.

Our REST API is based on the MVC architecture pattern. An architecture is a systematic way in which software is described.Serves as a blueprint for a system. MVC divides any large application into three parts:

1. The Model - Contains all the data-related logic that the user works with, like the schemas and interfaces of a project, the databases and their fields.
2. The View - Contains the UI and the presentation of an application. Things  that the user interacts with.
3. The Controller - Contains all the business-related logic and handles incoming requests. It is the interface between the Model and the View.

![Alt text](mvcSchema.png)

Our model is compound by Mongoose Schemas. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. It's a blueprint/model to our data.

We have Routes to foward requests to the apropriate controller function. A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern. These functions are the controllers.


## Stack

* `Node.js` v20.3.1
* `express` v4.18.2
* `mongoose` v7.1.1
* `dotenv` v16.0.3
* `jest` v29.6.1
* `supertest` v6.3.3


## Installation

This project already has the necessary code to upload the API to a local server:

* Download the project's repository, navigate via terminal to the folder and install the necessary dependencies with `npm install`.
* Check if the `node_modules` folder has been created in the root of the project.
  
### Database Access

The database used is MongoDB. This API has access to a cluster in MongoDB Atlas through a default user created for this purpose. However, you can configure your own user access by creating your account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and following the steps in the [documentation](https://www.mongodb.com/docs/atlas/).

Once you have already created your account, cluster, and configured the database, you can create access using a connection string. Follow the steps shown in the "Connect" section as depicted in the cluster created.

![Alt text](<Screenshot from 2023-07-18 11-31-43.png>)

## How to run the API

* In the terminal, access the root folder of the project and enter the command `npm run dev` to run the project in development mode. You should see the following message in the terminal:

  ```
    > bookstore-api@1.0.0 dev
    > node --watch server.js

    (node:39827) ExperimentalWarning: Watch mode is an experimental feature and might change at any time
    (Use `node --trace-warnings ...` to show where the warning was created)
    Connected successfully to the database
    The server are listening on http://localhost:3000
  ```

* API resources can be accessed from the *base URL* `http://localhost:3000`.

  > This API is programmed to be accessed from `http://localhost:3000`. Make sure there are no other resources occupying port `3000` before uploading the project.


### Endpoints

The API exposes the following *endpoints* from the *base URL* `localhost:3000`:

`/books`
* `GET /books`
* `GET /books/:id`
* `GET /books/search?`
* `POST /books`
* `PUT /books/:id`
* `DELETE /books/:id`

`/authors`
* `GET /authors`
* `GET /author/:id`
* `GET /author/:id/books`
* `POST /author`
* `PUT /author/:id`
* `DELETE /author/:id`

The searchs in  `/books/search?` are made by the following filters:

* publishing
* title
* minPages
* maxPages
* authorName

Example:

> http://localhost:3000/books/search?title=Javascript

All books which has in the title the word **Javascript** will be returned. Even if you enter one letter the API will be able to search books which has this letter in the title.

### Pagination

The following routes has pagination:

* `GET /authors`
* `GET /books`
* `GET /books/search?`

You can filter the results by **limit** of books/authors and **page** to navigate through all results.

Examples:

>http://localhost:3000/books?page=1&&limit=10

> http://localhost:3000/books?page=1&&limit=7/search?title=Javascript

> http://localhost:3000/authors?page=2

### Tests

The API has integration tests implemented. To run tests use the command `npm run test` or ` npm run test:coverage` to more details.

## Contact

If you want to contribute or send me Hello, just send an email.

lucasadelmo2@gmail.com




