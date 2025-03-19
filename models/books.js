import { DATA_FILE_PATH } from '../consts/fileConsts.js';
import { readFile, writeFile } from '../utils/fileUtils.js';
import { hasDuplicateValues } from '../utils/validation.js';

class Books {
  constructor(title, description = '', image = '') {
    this.title = title;
    this.image = image ? image : '/public/images/book.webp';
    this.description = description ? description : 'Lorem ispum';
  }

  addBook() {
    readFile(DATA_FILE_PATH, (books) => {
      const { data: bookData } = JSON.parse(books);
      let id = Math.floor(Math.random() * 10000);

      while (hasDuplicateValues(bookData, 'id', id)) {
        id = Math.floor(Math.random() * 10000);
      }
      bookData.push({ ...this, id });
      writeFile(DATA_FILE_PATH, JSON.stringify({ data: bookData }));
    });
  }

  static fetchAll(callback) {
    readFile(DATA_FILE_PATH, callback);
  }

  static delete(id, callback) {
    readFile(DATA_FILE_PATH, (books) => {
      const { data: bookData } = JSON.parse(books);

      const updatedCollection = bookData.filter((book) => book.id != id);

      writeFile(DATA_FILE_PATH, JSON.stringify({ data: updatedCollection }));

      callback(updatedCollection);
    });
  }

  static update(id, updateData, callback) {
    readFile(DATA_FILE_PATH, (books) => {
      const { data: bookData } = JSON.parse(books);
      const editBook = bookData.map((data) =>
        data.id == id ? { ...data, ...updateData } : data
      );
      writeFile(DATA_FILE_PATH, JSON.stringify({ data: editBook }));
      callback(editBook.find((book) => book.id == id));
    });
  }
}

export default Books;
