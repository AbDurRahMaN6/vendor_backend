import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import productRoute from "./routes/products.js"

const app = express();
dotenv.config();

/* Initial Connection */
const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
      } catch (error) {
        throw error;
      }
    };
/* Initial connection end */

// middlewares

app.use(express.json());


app.use("/admin/products", productRoute); 


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went Wrong!";
  return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack
  })
  next()
})

    app.listen(5000, ()=> {
        connect()
        console.log("Connected to backend.")
    });