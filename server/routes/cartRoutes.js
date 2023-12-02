import express from "express";
const router = express.Router();
import { addToCart, updateCart, deleteCart } from "../controllers/cart.js";

router.post("/:userId", addToCart);
router.put("/:userId", updateCart);
router.delete("/:userId/:cartProduct", deleteCart);

export default router;
