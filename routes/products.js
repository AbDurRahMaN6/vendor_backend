import express from "express"
import { createProducts, deleteProducts, getProduct, getProducts, updateProducts } from "../controllers/product.js";


const router = express.Router();

// CREATE
router.post("/", createProducts)

// UPDATE
router.put("/:id", updateProducts)

// DELETE
router.delete("/:id", deleteProducts)

// GET
router.get("/:id", getProduct)

// GET ALL
router.get("/", getProducts)



export default router