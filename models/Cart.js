import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "Product ID is a required field"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is a required field"],
        min: [1, "Quantity must be at least 1"],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be an integer"
        }
    }
})

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
