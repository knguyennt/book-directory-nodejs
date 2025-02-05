
import { readFile } from "../utils/fileUtils.js"

class Books {
    constructor (bookName) {
        this.name = bookName
    }

    addBook () {
        let books = []
        readFile("/Users/nguyennguyen/workspace/web-development/book-directory-nodejs/data/books.json", (bookData) => {
            const jsonData = JSON.parse(bookData);
            books = jsonData.data;
            books.push( { ...this }) 
            console.log(books)
        })
    }

    static fetchAll () {

    }
}

export default Books;