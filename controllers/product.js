import Products from "../models/Products.js";


export const createProducts = async (req, res, next) => {
    const newProduct = new Products(req.body);
    
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch (err) {
        next(err);
    }
}

export const updateProducts = async (req, res, next) => {
    try {
        const updateProducts = await Products.findByIdAndUpdate(req.params.id, { $set: req.body},{new: true})
        res.status(200).json(updateProducts)

    }catch (err) {
        next(err);
    }
}

export const deleteProducts = async (req, res, next) => {
    try {
        await Products.findByIdAndDelete(req.params.id);
        res.status(200).json("Products has been Deleted.")

    }catch (err) {
        next(err);
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const products = await Products.findById(req.params.id)
        res.status(200).json(products)

    }catch (err) {
        next(err);
    }
}

export const getProducts = async (req, res, next) => {
    try {
        const products = await Products.find();
        res.status(200).json(products)

    }catch (err) {
        next(err);
    }
}