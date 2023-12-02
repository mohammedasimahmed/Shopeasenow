import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  console.log("hello")  
  const { userId, cartProduct ,quantity } = req.body;

  console.log(req.body)

  const cart = await Cart.create({
    userId,
    cartProduct,
    quantity
  });

  await cart.save();
};

export const updateCart = async (req, res) => {
  const { userId, cartProduct, quantity } = req.body;

  try {
    const existingCart = await Cart.findOne({
      $and: [
        { userId: userId },
        { cartProduct: cartProduct },
      ],
    });

    existingCart.quantity = quantity

    await existingCart.save()

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCart = async (req, res) => {
    const { userId, cartProduct } = req.query;
  
    try {
      const existingCart = await Cart.findOneAndDelete({
        $and: [
          { userId: userId },
          { cartProduct: cartProduct }, 
        ],
      });
  
      if (!existingCart) {
        return res.status(404).json({ message: 'Cart not found for the given user and product' });
      }
  
      return res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  


