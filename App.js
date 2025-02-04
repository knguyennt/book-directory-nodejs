import express from 'express'
import bookRouter from './routes/books.js'

const app = express();

app.use('/public', express.static('public'))
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));


app.use('/books', bookRouter)

app.listen(3000);