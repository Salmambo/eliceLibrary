import csv from "csvtojson";
import fs from "fs";

class BookModel {
  constructor(bookDB) {
    this.bookDB = bookDB;
  }
  async findAll() {
    const books = await csv().fromFile(this.bookDB);
    return books;
  }
  async findOne(id) {
    const books = await this.findAll();
    const book = books.find((book) => book.id === id);
    return book;
  }
  async create(mockFile) {
    await fs.promises.writeFile(this.bookDB, mockFile);
  }
}

const bookModel = new BookModel(`${__dirname}/mocks/MOCK_BOOK_DATA.csv`);

export default bookModel;
