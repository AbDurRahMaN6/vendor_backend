import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    photos: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },

});

export default mongoose.model("Products", ProductSchema)