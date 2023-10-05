module.exports = (app: any) => {

    const Middleware = require('../Middleware/Validator');
    const Controller = require('../Controller/Controller');
    const Seller_Controller = require('../Controller/Seller_Controller');

    //insert Product
    app.post('/insert', Middleware.Validate, Controller.insertProduct);

    //to display product
    app.get('/display', Controller.listProduct);

    //to get product profit
    app.get('/display_profit', Controller.showProfit);

    //to remove Product
    app.delete('/removeProduct/:id', Controller.removeProduct);

    //to remove Product
    app.delete('/removeSeller/:sellerID', Controller.removeSeller);
    // edit product
    app.put('/removeSeller/:sellerID', Controller.removeSeller);
    app.get('/countCartItems', Controller.countCartItems);
// Remove a product from the shopping cart
app.delete('/removeFromCart/:productId', Controller.removeFromCart);
    //if invalid url passed
    app.get('*', Controller.NotFound);
}