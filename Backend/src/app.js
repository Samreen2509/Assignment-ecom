require("dotenv").config({quiet: true});
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

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
