import Books from "../models/books.js"

export const getBooks = (req, res, next) => {
    Books.fetchAll((books) => {
        const { data: bookData } = JSON.parse(books)
        res.render("bookshelf", { bookData })
    })
}

export const addBooks = (req, res, next) => {
    const title = req.params.id;
    const book = new Books(title)
    book.addBook()
}