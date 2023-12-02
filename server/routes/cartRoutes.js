import express from "express";
const router = express.Router();
import displayCart, { addToCart, updateCart, deleteCart } from "../controllers/cart.js";

router.post("/:userId", addToCart);
router.put("/:userId", updateCart);
router.delete("/:userId/:cartProduct", deleteCart);
router.post("/display/:userId", displayCart)

export default router;
