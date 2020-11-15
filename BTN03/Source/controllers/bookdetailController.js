const bookDetailModel = require('../models/bookDetailModel');

exports.index = (req, res, next) => {
    //const item = req.body.book_id;
    // Get detailbooks from model
    const detailbooks = bookDetailModel.list();

    const detail = detailbooks[0]; //parseInt(item)

    // Pass data to view to display list of books
    res.render('detailbook/detail', {layout: 'detaillayout', detail});
};