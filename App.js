import express from 'express'
import bookRouter from './routes/books.js'

const app = express();

app.use(express.static('public'))

app.use(bookRouter)

app.listen(3000);