require("dotenv").config({quiet: true});
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

connectDB()
    .then(() => {
    console.log("Connected to Database");

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    })
    .catch((err) => {
    console.error("Database connection failed:", err);
    });
