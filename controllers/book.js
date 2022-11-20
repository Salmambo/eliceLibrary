import { Router } from "express";
import { bookService } from "../services";

const bookController = Router();

bookController.get("/", async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
});
bookController.get("/:id", async (req, res, next) => {
  try {
    const book = await bookService.getOneBook(req.params);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
});
bookController.post("/", async (req, res, next) => {
  try {
    await bookService.postBook(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
bookController.delete("/:id", async (req, res, next) => {
  try {
    await bookService.deleteBook(req.params);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
bookController.put("/:id", async (req, res, next) => {
  try {
    await bookService.putBook(req.params, req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default bookController;
