import Carts from '../models/carts.js';

export const getBooks = (req, res, next) => {
  Carts.fetchAll((books) => {
    const { data: bookData } = JSON.parse(books);
    res.render('carts', { bookData });
  });
};

export const addBook = (req, res) => {
  // TODO: implement add book here
};

export const deleteBook = (req, res) => {
  const id = req.params.id;
  Carts.delete(id, (bookData) => {
    return res.render('carts', { bookData });
  });
};
