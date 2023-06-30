import express from "express";
import authorController from "../controllers/authorController.js";
import toPage from "../middlewares/toPage.js";

const router = express.Router();

router
    .get("/authors", authorController.listAuthors, toPage)
    .get("/author/:id", authorController.getAuthorById)
    .post("/author", authorController.registerAuthor)
    .put("/author/:id", authorController.updateAuthor)
    .delete("/author/:id", authorController.deleteAuthor);

export default router;