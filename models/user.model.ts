import { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
  address: String,
  city: String,
  state: String,
  country: String,
  pincode: Number,
});

const CartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number
});

const UserSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
    address: [AddressSchema],
    emailVerified: Date,
    image: String,
    hashedPassword: String,
    cart: [CartSchema],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    wishlist: [{
      type: Schema.Types.ObjectId,
      ref: "Product"
    }],
  },
  {
    timestamps: true,
  }
);


const User = models.User || model("User", UserSchema);

export default User;