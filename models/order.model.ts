import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: Number,
    }],
    paymentMethod: String,
    shippingAddress: {
        address: String,
        city: String,
        state: String,
        country: String,
        pincode: Number,
    },
    shippingPrice: Number,
    taxPrice: Number,
    totalPrice: Number,
    isPaid: {
        type: Boolean,
        default: false,
    },
    paidAt: Date,
    isDelivered: {
        type: Boolean,
        default: false,
    },
    deliveredAt: Date,
}, {
    timestamps: true,
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;