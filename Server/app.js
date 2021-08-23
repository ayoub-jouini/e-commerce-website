const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const productRoute = require('./routes/product-routes');
const useresRouter = require('./routes/users-routes');
const HttpError = require('./models/http-error');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/products', productRoute);

app.use('/api/users', useresRouter);

app.use((req, res, next) => {
    const error = HttpError('could not found this route.', 404);
    throw error;
})

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
