import mongoose from "mongoose";

// Schema for maintaining the user reviews (for future use)
// const reviewSchema = new mongoose.Schema({
//   rating: {
//     type: Number,
//     required: true,
//     min: [1, 'Rating must be at least 1'],
//     max: [5, 'Rating cannot be more than 5'],
//     validate: {
//       validator: Number.isInteger,
//       message: '{VALUE} is not an integer'
//     }
//   },
//   comment: {
//     type: String,
//     required: [true, "Comment is a required field"],
//     minLength: [5, 'Comment must be at least 5 characters long'],
//     trim: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   reviewerName: {
//     type: String,
//     required: [true, "Reviewer name is a required field"],
//     trim: true
//   },
//   reviewerEmail: {
//     type: String,
//     required: true,
//     trim: true,
//     match: [/\S+@\S+\.\S+/, 'Invalid email format']
//   }
// });

// Schema for maintaining the product details
const productSchema=new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is a required field"],
        minLength: 3
    },
    description: {
        type: String,
        required: [true, "Description of a product must be given"],
        minLength: 5
    },
    price: {
        type: Number,
        required: [true, "Price of a product must be given"],
        min: 0.1
    },
    stock: {
        type: Number,
        required: [true, "Stock of a product must be given"],
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: "Stock must be an integer"
        }
    },

    // Some other fields that can be added in the product details
    // category: {
    //     type: String,
    //     required: [true, "Category of a product must be given"],
    //     minLength: 3
    // },
    // discountPercentage: {
    //     type: Number,
    //     default: 0,
    //     min: 0,
    //     max: 100
    // },
    // rating: {
    //     type: Number,
    //     default: 0,
    //     min: 0,
    //     max: 5
    // },
    // brand: {
    //     type: String,
    //     minLength: 2
    // },
    // warrantyInformation: {
    //     type: String,
    //     minLength: 3
    // },
    // shippingInformation: {
    //     type: String,
    //     minLength: 3
    // },
    // returnPolicy: {
    //     type: String,
    //     minLength: 3
    // },
    // thumbnail: {
    //     type: String,
    //     required: [true, "Thumbnail of a product must be given"]
    // },
    // reviews: {
    //     type: [reviewSchema],
    //     default: []
    // }
});

const Product=mongoose.model("Product", productSchema);
export default Product;