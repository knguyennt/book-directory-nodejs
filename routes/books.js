import { Router } from "express";
import { getBooks, renderAddBookForm, addBook, deleteBook, renderEditBookForm } from "../controllers/books.js"

const router = Router()

router.get('/', getBooks)

router.get('/add', renderAddBookForm)

router.post('/add', addBook)

router.post('/delete/:id', deleteBook)

router.get('/edit/:id', renderEditBookForm)

router.get('/details/:id')



export default router;