const express=require('express');
const {createBook, findAllBooks, deleteBookById, findBookById, updateBookById}=require('../controllers/book.controller')

const bookRouter=express.Router()
bookRouter.post('/',createBook)
bookRouter.get('/',findAllBooks)
bookRouter.get('/:idBook',findBookById)
bookRouter.patch('/:idBook',updateBookById);
bookRouter.delete('/:idBook',deleteBookById);

module.exports=bookRouter;