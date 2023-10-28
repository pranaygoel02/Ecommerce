import { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
  address: String,
  city: String,
  state: String,
  country: String,
  pincode: Number,
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
  },
  {
    timestamps: true,
  }
);


const User = models.User || model("User", UserSchema);

export default User;