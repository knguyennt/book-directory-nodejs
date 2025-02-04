import { Router } from "express";
import path from "path";

const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "..", "views/bookshelf.html"))
})

router.get('/:id', (req, res) => {
    res.send(`<h1>Book detail: ${req.params.id} </h1>`)
})


export default router;