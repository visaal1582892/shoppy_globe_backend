import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/shoppy_globe");
    const db=mongoose.connection;
    db.on("open", () => {
        console.log("Connected to MongoDB");
    })
    db.on("error", (error) => {
        console.error("Error connecting to MongoDB:", error);
    });
    db.on("disconnected", () => {
        console.log("Disconnected from MongoDB");
    });
}

export default connectDB;