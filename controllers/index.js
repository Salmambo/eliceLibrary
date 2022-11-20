import { Router } from "express";
import bookController from "./book";

const controller = Router();

controller.use("/book", bookController);

export default controller;
