import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
        userId:{
            type:String
        },
        cartProduct:{
            type:String
        },
        quantity:{
            type:Number
        }
    }
)

const Cart = mongoose.model("cart", cartSchema);
export default Cart;