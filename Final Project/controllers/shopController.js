const shopModel = require('../models/shopModel');
const bookDetailModel = require('../models/detailModel');

exports.index = (req, res, next) => {
    // Get books from model
    const books = shopModel.list();
    // Pass data to view to display list of books
    res.render('shop/list', {layout: 'bookshop', books});
};

exports.book = (req, res, next) => {
    //const item = req.body.book_id;
    // Get detailbooks from model
    const detailbooks = bookDetailModel.list();

    const detail = detailbooks[parseInt(req.params.id)]; 

    // Pass data to view to display list of books
    res.render('detailBook/detail', {layout: 'detaillayout', detail});
};