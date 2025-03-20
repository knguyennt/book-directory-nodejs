import { CART_FILE_PATH } from '../consts/fileConsts.js';
import { readFile, writeFile } from '../utils/fileUtils.js';
import { hasDuplicateValues } from '../utils/validation.js';

class Carts {
  constructor(title, description = '', image = '') {
    this.title = title;
    this.image = image ? image : '/public/images/book.webp';
    this.description = description ? description : 'Lorem ispum';
  }

  addBook() {
    readFile(CART_FILE_PATH, (books) => {
      const { data: bookData } = JSON.parse(books);
      let id = Math.floor(Math.random() * 10000);

      while (hasDuplicateValues(bookData, 'id', id)) {
        id = Math.floor(Math.random() * 10000);
      }
      bookData.push({ ...this, id });
      writeFile(CART_FILE_PATH, JSON.stringify({ data: bookData }));
    });
  }

  static fetchAll(callback) {
    readFile(CART_FILE_PATH, callback);
  }

  static delete(id, callback) {
    readFile(CART_FILE_PATH, (books) => {
      const { data: bookData } = JSON.parse(books);

      const updatedCollection = bookData.filter((book) => book.id != id);

      writeFile(CART_FILE_PATH, JSON.stringify({ data: updatedCollection }));

      callback(updatedCollection);
    });
  }
}

export default Carts;
