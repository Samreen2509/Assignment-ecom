const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGOURL)
};

module.exports = connectDB;