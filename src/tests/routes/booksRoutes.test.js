/* eslint-disable no-undef */
import app from "../../app.js";
import request from "supertest";
import {describe} from "@jest/globals";

let mockAuthorId;
describe("POST an author to use in our test of books routes. Each book must have an linked author", ()=>{
    it("must create an author in the db to link to a book", async ()=>{
        let response = await request(app)
            .post("/author")
            .send({
                name: "SomeAuthor",
            })
            .expect(201);

        mockAuthorId = response.body._id;
    });
});

let bookId;
describe("POST /books", ()=>{
    it("must input a book in the db", async ()=>{
        let response = await request(app)
            .post("/books")
            .send({
                title: "SomeTitle",
                author: mockAuthorId,
                publishing: "SomePublishing",
                numberPages: 1000
            })
            .expect(201);

        bookId = response.body._id;
    });

    it("Should throw a Validation Error for an book without an author ", async()=>{
        await request(app)
            .post("/books")
            .send({
                author: ""
            })
            .expect(403);
    });
});

describe("GET /books", ()=>{
    it("must list books", async ()=>{
        await request(app)
            .get("/books")
            .expect(200);
    });

    test.each([
        ["title", "SomeTitle"],
        ["authorName", "SomeAuthor"],
        ["publishing", "SomePublishing"],
        ["numberPages", "1000"]
    ])("must list books by a %s filter", async (key, propertie)=>{

        await request(app)
            .get(`/books/search?${key.replaceAll("\"", "")}=${propertie.replaceAll("\"", "")}`)
            .expect(200);
    });

    test.each([
        ["title", "non-ExistentTitle"],
        ["authorName", "non-ExistentAuthor"],
        ["publishing", "non-ExistentPublishing"],
    ])("must return an 404 Error for %s filter", async (key, propertie)=>{

        await request(app)
            .get(`/books/search?${key.replaceAll("\"", "")}=${propertie.replaceAll("\"", "")}`)
            .expect(404);
    });

});

describe("PUT /books/:id", ()=>{
    test.each([
        ["title", {title: "newSomeTitle"}],
        ["author", {author: "647297e5d4777da1b3d60009"}],
        ["publishing", {publishing: "newSomePublishing"}],
        ["numberPages", {numberPages: 1500}]
    ])("must update %s from books", async (key, objUpdated)=>{
        await request(app)
            .put(`/books/${bookId}`)
            .send(objUpdated)
            .expect(204);
    });

    test.each([
        ["title", {title:""}],
        ["publishing", {publishing:""}],
        ["numberPages", {numberPages: 1}]
    ])("Should throw a Validation Error for mismatched data type when updating %s in the Books Schema", async(key, objUpdated)=>{
        await request(app)
            .put(`/books/${bookId}`)
            .send(objUpdated)
            .expect(403);
    });
});

describe("DELETE /books/:id", () =>{
    it("must delete an book of the db", async () =>{
        await request(app)
            .delete(`/books/${bookId}`)
            .expect(200);
    });
});

describe("DELETE author created to this test", () =>{
    it("must delete an author of the db", async () =>{
        await request(app)
            .delete(`/author/${mockAuthorId}`)
            .expect(200);
    });
});

