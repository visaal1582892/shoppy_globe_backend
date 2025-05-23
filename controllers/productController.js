import Product from '../models/Product.js';
import Cart from '../models/Cart.js';

export const insertDummyProducts = async () => {
    const dummyProducts=[
    {
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "price": 9.99,
      "stock": 99
    },
    {
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "price": 19.99,
      "stock": 34
    },
    {
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "price": 14.99,
      "stock": 89
    },
    {
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "price": 12.99,
      "stock": 91
    },
    {
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "price": 8.99,
      "stock": 79
    },
    {
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "price": 49.99,
      "stock": 29
    },
    {
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "price": 129.99,
      "stock": 58
    },
    {
      "title": "Dior J'adore",
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "price": 89.99,
      "stock": 98
    },
    {
      "title": "Dolce Shine Eau de",
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "price": 69.99,
      "stock": 4
    },
    {
      "title": "Gucci Bloom Eau de",
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "price": 79.99,
      "stock": 91
    },
    {
      "title": "Annibale Colombo Bed",
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "price": 1899.99,
      "stock": 88
    },
    {
      "title": "Annibale Colombo Sofa",
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "price": 2499.99,
      "stock": 60
    },
    {
      "title": "Bedside Table African Cherry",
      "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      "price": 299.99,
      "stock": 64
    },
    {
      "title": "Knoll Saarinen Executive Conference Chair",
      "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      "price": 499.99,
      "stock": 26
    },
    {
      "title": "Wooden Bathroom Sink With Mirror",
      "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      "price": 799.99,
      "stock": 7
    },
    {
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "price": 1.99,
      "stock": 8
    },
    {
      "title": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "price": 12.99,
      "stock": 86
    },
    {
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "price": 8.99,
      "stock": 46
    },
    {
      "title": "Chicken Meat",
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "price": 9.99,
      "stock": 97
    },
    {
      "title": "Cooking Oil",
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "price": 4.99,
      "stock": 10
    },
    {
      "title": "Cucumber",
      "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      "price": 1.49,
      "stock": 84
    },
    {
      "title": "Dog Food",
      "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      "price": 10.99,
      "stock": 71
    },
    {
      "title": "Eggs",
      "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      "price": 2.99,
      "stock": 9
    },
    {
      "title": "Fish Steak",
      "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      "price": 14.99,
      "stock": 74
    },
    {
      "title": "Green Bell Pepper",
      "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      "price": 1.29,
      "stock": 33
    },
    {
      "title": "Green Chili Pepper",
      "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      "price": 0.99,
      "stock": 3
    },
    {
      "title": "Honey Jar",
      "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      "price": 6.99,
      "stock": 34
    },
    {
      "title": "Ice Cream",
      "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      "price": 5.49,
      "stock": 27
    },
    {
      "title": "Juice",
      "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      "price": 3.99,
      "stock": 50
    },
    {
      "title": "Kiwi",
      "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      "price": 2.49,
      "stock": 99
    },
    {
      "title": "Lemon",
      "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
      "price": 0.79,
      "stock": 31
    },
    {
      "title": "Milk",
      "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
      "price": 3.49,
      "stock": 27
    },
    {
      "title": "Mulberry",
      "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
      "price": 4.99,
      "stock": 99
    }];
    await Product.insertMany(dummyProducts);
    console.log('Dummy products inserted');
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message:'Product not found' });
    }
    res.status(200).json(product);
}

export const addToCart = async (req, res) => {
    const { productId } = req.body;
    // Checking if product is available or not
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ message:'Product not found' });
    }
    const cartItem = await Cart.findOne({ productId: productId });
    if (cartItem) {
        cartItem.quantity += 1;
        await cartItem.save();
        return res.status(200).json({ message:'Product already in cart, So quantity incremented By 1' });
    }
    const newCartItem = new Cart({
        productId: productId,
        quantity: 1
    });
    await newCartItem.save();
    res.status(200).json({ message: 'Product added tocart' });
}

export const updateQuantity = async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    if (quantity < 1) {
        return res.status(400).json({ message: 'Quantity must be at least 1' });
    }
    const cartItem = await Cart.findOne({ productId: productId });
    if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
    }
    cartItem.quantity = quantity;
    await cartItem.save();
    res.status(200).json({ message: 'Cart item quantity updated' });
}

export const removeFromCart = async (req, res) => {
    const { productId } = req.params;
    const cartItem = await Cart.findOne({ productId: productId });
    if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
    }
    await Cart.deleteOne({ productId: productId });
    res.status(200).json({ message: 'Cart item removed' });
}