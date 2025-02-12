import { Router } from "express";
import { getBooks, addBookPage, addBook } from "../controllers/books.js"

const router = Router()

router.get('/', getBooks)

router.get('/add', addBookPage)

router.post('/add', addBook)

router.get('/details/:id')



export default router;