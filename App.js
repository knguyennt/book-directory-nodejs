import express from 'express';
import bookRouter from './routes/books.js';
import cartRouter from './routes/carts.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/public', express.static('public'));
app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/js', express.static('./node_modules/bootstrap/dist/js'));

app.use('/books', bookRouter);
app.use('/carts', cartRouter);

app.get((req, res) => {
  return res.status(404).render('404');
});

app.listen(3000);
