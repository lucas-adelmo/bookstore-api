/* eslint-disable no-undef */
import app from "../../app.js";
import request from "supertest";
import { afterEach, beforeEach, describe} from "@jest/globals";

let server;
beforeEach(()=>{
    const port = process.env.PORT || 3000;
    server = app.listen(port);
});

afterEach(()=>{
    server.close();
});

let authorId;
describe("POST /author", ()=>{
    it("must create an author in the db", async ()=>{
        let response = await request(app)
            .post("/author")
            .send({
                name: "TestMan",
                nationality: "TestCountry",
            })
            .expect(201);

        authorId = response.body._id;
    });
});

describe("GET /authors", ()=>{
    it("must return authors", async ()=>{
        await request(app)
            .get("/authors")
            .expect(200);
    });
    
    it("must return an author by his id", async () => {
        await request(app)
            .get(`/author/${authorId}`)
            .expect(200);
    });
});

describe("PUT /author", () =>{
    test.each([
        ["name", {name: "newName"}],
        ["nationality", {nationality: "newNationality"}]
    ])("must update the propertie %s of the author", async(key, objUpdated )=>{
        await request(app)
            .put(`/author/${authorId}`)
            .send(objUpdated)
            .expect(204);
    });
});

describe("DELETE /author", () =>{
    it("must delete an author of the db", async () =>{
        await request(app)
            .delete(`/author/${authorId}`)
            .expect(200);
    });
});