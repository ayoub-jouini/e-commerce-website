const HttpError = require('../models/http-error');

const products = [
    {
        "Reference": "M1000",
        "name": "maryoul",
        "category": "t-shirt",
        "image": "e1e88660-b331-4f1b-ae0b-a9adfb1d37f3.jpg",
        "gender": "male",
        "price": 30.000,
        "description": "ybared f sif w ysa5en f shte",
        "color": "blue",
        "size": [
            "s",
            "m",
            "l",
            "xl"
        ],
        "quantity": 30,
        "Composition": "95% COTTON + 5% SPANDEX",
        "selling": 20,
        "bestSeller": true
    },
    {
        "Reference": "S1000",
        "name": "serwel",
        "category": "trouser",
        "image": "New In.jpg",
        "gender": "male",
        "price": 60.000,
        "description": "ybared f sif w ysa5en f shte",
        "color": "black",
        "size": [
            "36",
            "38",
            "40",
            "42"
        ],
        "quantity": 10,
        "Composition": "95% COTTON + 5% SPANDEX",
        "selling": 10,
        "bestSeller": false
    },
    {
        "Reference": "G1000",
        "name": "Gilet",
        "category": "Gilett",
        "image": "1920s Style Men's Vests, Pullover Vests, Waistcoats.jpg",
        "gender": "male",
        "price": 100.000,
        "description": "ybared f sif w ysa5en f shte",
        "color": "blue",
        "size": [
            "s",
            "m",
            "l",
            "xl"
        ],
        "quantity": 100,
        "Composition": "95% COTTON + 5% SPANDEX",
        "selling": 30,
        "bestSeller": true
    },
    {
        "Reference": "M2000",
        "name": "maryoul e5er",
        "category": "t-shirt",
        "gender": "female",
        "image": "afb9a61c-065a-4331-a7c1-a2b1a80b85ef.jpg",
        "price": 35.000,
        "description": "ybared f sif w ysa5en f shte",
        "color": "blue",
        "size": [
            "s",
            "m",
            "l",
            "xl"
        ],
        "quantity": 30,
        "Composition": "95% COTTON + 5% SPANDEX",
        "selling": 5,
        "bestSeller": false
    },
    {
        "Reference": "S2000",
        "name": "serwel e5er",
        "category": "trouser",
        "image": "Womens Oversized Super Wide Leg Tailored Pants - Beige - 10.jpg",
        "gender": "male",
        "price": 97.000,
        "description": "ybared f sif w ysa5en f shte",
        "color": "blue",
        "size": [
            "36",
            "38",
            "40",
            "42"
        ],
        "quantity": 5,
        "Composition": "95% COTTON + 5% SPANDEX",
        "selling": 40,
        "bestSeller": true
    },
    {
        "Reference": "G2000",
        "name": "Gilet o5ra",
        "category": "Gilett",
        "image": "7d6be04c-55ab-44e7-9f1e-adc61921dfed.jpg",
        "gender": "male",
        "price": 210.000,
        "description": "ybared f sif w ysa5en f shte",
        "color": "blue",
        "size": [
            "s",
            "m",
            "l",
            "xl"
        ],
        "quantity": 2,
        "Composition": "95% COTTON + 5% SPANDEX",
        "selling": 25,
        "bestSeller": true
    }
];

const allProducts = (req, res, next) => {
    res.json({ products });
}

const bestSeller = (req, res, next) => {
    const bestProducts = products.filter(p => {
        return p.bestSeller == true;
    })
    res.json({ bestProducts })
}

const productsCategory = (req, res, next) => {
    const productcat = req.params.category;
    const productsCat = products.filter(p => {
        return p.category === productcat;
    })
    res.json({ productsCat })
}

const getProductByRef = (req, res, next) => {
    const productReference = req.params.Reference;
    const product = products.find(p => {
        return p.Reference === productReference;
    })
    if (!product) {
        return next(
            new HttpError('product not found!!')
        );
    }
    res.json({ product })
}

exports.allProducts = allProducts;
exports.bestSeller = bestSeller;
exports.getProductByRef = getProductByRef;
exports.productsCategory = productsCategory;