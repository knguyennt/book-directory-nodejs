import { Router } from "express";
import { getBooks, addBooks } from "../controllers/books.js"

const router = Router()

router.get('/', getBooks)

router.post('/:id', addBooks)


export default router;