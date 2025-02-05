import { Router } from "express";
import bookController from "../models/books.js"

const router = Router()

const bookData = {
    data: [
        {
            title: "Book 1",
            image: "/public/images/book.webp",
            description: "Lorem Ispum"
        },
        {
            title: "Book 2",
            image: "/public/images/book.webp",
            description: "Lorem Ispum"
        },
        {
            title: "Book 3",
            image: "/public/images/book.webp",
            description: "Lorem Ispum"
        },
        {
            title: "Book 4",
            image: "/public/images/book.webp",
            description: "Lorem Ispum"
        },
        {
            title: "Book 5",
            image: "/public/images/book.webp",
            description: "Lorem Ispum"
        },
        {
            title: "Book 6",
            image: "/public/images/book.webp",
            description: "Lorem Ispum"
        },
    ]
}

router.get('/', (req, res) => {
    const book = new bookController("Haha")
    book.addBook();
    res.render('bookshelf', { bookData: bookData.data })
})

router.get('/:id', (req, res) => {
    res.send(`<h1>Book detail: ${req.params.id} </h1>`)
})


export default router;