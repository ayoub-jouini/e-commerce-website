const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const productRoute = require('./routes/product-routes');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/products', productRoute);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'an unknown error occured!' });
});

app.listen(5000, () => {
    console.log("listen: port 5000")
})
