import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  const { userId, cartProduct, quantity, cartImage } = req.body;
  const cart = await Cart.create({
    userId,
    cartProduct,
    quantity,
    cartImage,
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

export const deleteAllItems = async (req, res) => {
  const { userId } = req.body;

  try {
    const result = await Cart.deleteMany({ userId: userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No items found in the cart for the given user' });
    }
    return res.status(200).json({ message: 'All items deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const displayCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cartItems = await Cart.find({ userId: userId });
    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ message: 'Cart is empty' });
    }
    return res.status(200).json({ cartItems });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default displayCart;

