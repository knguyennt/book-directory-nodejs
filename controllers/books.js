import Books from "../models/books.js"

export const getBooks = (req, res, next) => {
    Books.fetchAll((books) => {
    const { data: bookData } = JSON.parse(books)
        res.render("bookshelf", { bookData })
    })
}

export const renderAddBookForm = (req, res, next) => {
    return res.render('add-book')
}

export const addBook = (req, res) => {
    const data = { ...req.body }

    const book = new Books(data.title, data.description)
    book.addBook()

    return res.render('add-book')
}

export const bookDetails = (req, res) => {
}

export const deleteBook = (req, res) => {
    const id = req.params.id
    Books.delete(id, (bookData) => {
        return res.render("bookshelf", { bookData })
    })
}

export const renderEditBookForm = (req, res) => {
    const id = req.params.id
    Books.fetchAll((books) => {
        const { data: bookData } = JSON.parse(books)
        const editBook = bookData.find(book => book.id == id)
        res.render("add-book", { editBook })
    })
}