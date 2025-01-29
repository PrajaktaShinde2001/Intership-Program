const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://prajaktashinde389:uGXGX4DHYKZgwieq@cluster0.a1gqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;