import { Router } from "express";
import path from "path";

const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "..", "views/bookshelf.html"))
})


export default router;