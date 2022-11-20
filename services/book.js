import { bookModel } from "../models";
import shortid from "shortid";
import json2csv from "json2csv";
import { stringify } from "csv-stringify";

class BookService {
  constructor(bookModel) {
    this.bookModel = bookModel;
  }
  async getAllBooks() {
    const books = await this.bookModel.findAll();
    if (books.length === 0) throw new Error("library burned");
    return books;
  }
  async getOneBook({ id }) {
    const book = await this.bookModel.findOne(id);
    if (!book) throw new Error("does not exist");
    return book;
  }
  async updateMockFile(books) {
    json2csv.parse(books);
    const mockFile = stringify(books, {
      header: true,
      columns: [
        "id",
        "name",
        "author",
        "country",
        "gender",
        "year",
        "ISBN",
        "price",
        "update_date",
      ],
    });
    await this.bookModel.create(mockFile);
  }
  async postBook({ name, author, country, gender, year, ISBN, price }) {
    if (!name || !author || !country || !gender || !year || !ISBN || !price)
      throw new Error("fill everything");
    const books = await this.getAllBooks();
    books.push({
      id: shortid.generate().toString(),
      name,
      author,
      country,
      gender,
      year,
      ISBN,
      price,
      update_date: new Date().toLocaleDateString("en-US"),
    });
    await this.updateMockFile(books);
  }
  async deleteBook({ id }) {
    const books = await this.getAllBooks();
    await this.updateMockFile(books.filter((book) => book.id !== id));
  }
  async putBook({ id }, bookInfo) {
    const books = await this.getAllBooks();
    await this.updateMockFile(
      books.map((book) => {
        if (book.id === id) return { ...book, ...bookInfo };
      })
    );
  }
}

const bookService = new BookService(bookModel);

export default bookService;
