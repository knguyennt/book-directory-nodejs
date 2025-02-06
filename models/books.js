
import { DATA_FILE_PATH } from "../consts/fileConsts.js";
import { readFile, writeFile } from "../utils/fileUtils.js"

class Books {
    constructor (title, description='', image='') {
        this.title = title
        this.image = image ? image : "/public/images/book.webp"
        this.description = description ? description : "Lorem ispum"
    }

    addBook () {
        readFile(DATA_FILE_PATH, (books) => {
            const { data: bookData } = JSON.parse(books)
            bookData.push({ ...this });
            writeFile(DATA_FILE_PATH, JSON.stringify({ data: bookData }))
        })
    }

    static fetchAll (callback) {
        readFile(DATA_FILE_PATH, callback)
    }
}

export default Books;