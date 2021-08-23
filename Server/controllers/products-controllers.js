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
//get all produsts
const allProducts = (req, res, next) => {
    res.json({ products });
}

//get bestseller products
const bestSellerProducts = (req, res, next) => {
    const bestProducts = products.filter(p => {
        return p.bestSeller == true;
    })
    res.json({ bestProducts })
}

//get produst by category
const productsCategory = (req, res, next) => {
    const productcat = req.params.category;
    const productsCat = products.filter(p => {
        return p.category === productcat;
    })
    res.json({ productsCat })
}

//get products by Reference
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

//verfi if the products is a bestseller
const bestSellerVerification = (selling) => {
    let bestSellerNb = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].selling < selling && products[i].bestSeller == true) {
            bestSellerNb.push(i);
        }
    }

    let min = -1;
    if (bestSellerNb.length !== 0) {
        min = bestSellerNb[0];
        for (let i = 1; i < bestSellerNb.length; i++) {
            if (products[bestSellerNb[i]].selling < min) {
                min = bestSellerNb[i]
            }
        }
    }
    let bestSeller = false;
    if (min !== -1) {
        products[min].bestSeller = false;
        bestSeller = true;
    }

    return bestSeller;
}

//create and post a product
const createProduct = (req, res, next) => {
    const { Reference,
        name,
        category,
        image,
        gender,
        price,
        description,
        color,
        size,
        quantity,
        Composition,
        selling } = req.body;

    const bestSeller = bestSellerVerification(selling);
    const createdProduct = {
        Reference,
        name,
        category,
        image,
        gender,
        price,
        description,
        color,
        size,
        quantity,
        Composition,
        selling,
        bestSeller
    }
    products.push(createdProduct);
    res.status(201).json({ product: createdProduct });
}

//update a product 
const updateProduct = (req, res, next) => {
    const {
        name,
        image,
        price,
        description,
        color,
        size,
        quantity,
        Composition,
        selling } = req.body;
    const productRef = req.params.Reference;
    const updateProduct = { ...products.find(p => p.Reference === productRef) };
    const productIndex = products.findIndex(p => p.Reference === productRef);
    updateProduct.name = name;
    updateProduct.image = image;
    updateProduct.price = price;
    updateProduct.description = description;
    updateProduct.color = color;
    updateProduct.size = size;
    updateProduct.quantity = quantity;
    updateProduct.Composition = Composition;
    updateProduct.selling = selling;

    products[productIndex] = updateProduct;

    res.status(200).json({ product: updateProduct });
}

//delete product 
const deleteProduct = (req, res, next) => {
    const productRef = req.params.Reference;
    products = products.filter(p => p.Reference !== productRef);
    res.status(200).json({ message: 'product deleted' });
}

exports.allProducts = allProducts;
exports.bestSeller = bestSellerProducts;
exports.getProductByRef = getProductByRef;
exports.productsCategory = productsCategory;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;